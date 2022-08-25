import { defineStore } from 'pinia'
import { api, apiAuth } from '../boot/axios'
import Swal from 'sweetalert2'
// 在 pinia 這樣寫 useRouter() 會是 undefined
// import { useRouter } from 'vue-router'
// import Router from '../router'
// import router from 'src/router'

export const useUserStore = defineStore({
  id: 'user',
  state () {
    return {
      token: '',
      account: '',
      role: 0
      // cart: 0
    }
  },
  getters: {
    isLogin () {
      return this.token.length !== 0
    },
    isAdmin () {
      return this.role === 1
    }
    // avatar () {
    //   return 'https://source.boringavatars.com/beam/120/' + this.account
    // }
  },
  actions: {
    async login (form) {
      try {
        const { data } = await api.post('/users/login', form)
        this.token = data.result.token
        this.account = data.result.account
        this.role = data.result.role
        this.name = data.result.name
        // this.cart = data.result.cart
        Swal.fire({
          icon: 'success',
          title: '成功',
          text: '登入成功'
        })
        this.router.push('/')
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: '失敗',
          text: (error.isAxiosError && error.response.data) ? error.response.data.message : '發生錯誤'
        })
      }
    },
    async logout () {
      try {
        // await api.delete('/users/logout', {
        //   headers: {
        //     authorization: `Bearer ${this.token}`
        //   }
        // })
        await apiAuth.delete('/users/logout')
        this.router.push('/')
        Swal.fire({
          icon: 'success',
          title: '成功',
          text: '登出成功'
        })
      } catch (_) {
      }
      this.token = ''
      this.account = ''
      this.role = 0
      // this.cart = 0
    },
    async addCart (data) {
      console.log(data)
      if (this.token.length === 0) {
        Swal.fire({
          icon: 'error',
          title: '失敗',
          text: '請先登入'
        })
        this.router.push('/login')
        return
      }
      if (data.quantity <= 0) {
        Swal.fire({
          icon: 'error',
          title: '失敗',
          text: '數量必須大於 0'
        })
        return
      }
      try {
        // console.log(data)
        const { data: resData } = await apiAuth.post('/users/cart', data)
        console.log(resData)
        this.cart = resData.result
        Swal.fire({
          icon: 'success',
          title: '成功',
          text: '加入購物車成功'
        })
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: '失敗',
          text: error
        })
      }
    },
    async addCollection (data) {
      if (this.token.length === 0) {
        Swal.fire({
          icon: 'error',
          title: '失敗',
          text: '請先登入'
        })
        this.router.push('/login')
        return
      }
      // if (data.quantity <= 0) {
      //   Swal.fire({
      //     icon: 'error',
      //     title: '失敗',
      //     text: '數量必須大於 0'
      //   })
      //   return
      // }
      try {
        console.log(data)
        await apiAuth.post('/users/collections', data)
        // this.collection = resData.result
        Swal.fire({
          icon: 'success',
          title: '成功',
          text: '加入最愛成功'
        })
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: '失敗',
          text: error
        })
      }
    },
    async updateCart (data) {
      try {
        await apiAuth.patch('/users/cart', data)
        return true
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: '失敗',
          text: '更新購物車失敗'
        })
        return false
      }
    },
    async checkout (data) {
      console.log(data)
      try {
        await apiAuth.post('/orders', data)
        console.log(this.cart)
        this.cart = 0
        // console.log(this.order)
        // this.orderInfo = 0
        // Swal.fire({
        //   icon: 'success',
        //   title: '成功',
        //   text: '結帳成功'
        // })
        this.router.push('/progress')
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: '失敗',
          text: '結帳失敗'
        })
      }
    },
    async getUser () {
      if (this.token.length === 0) return
      try {
        const { data } = await apiAuth.get('/users')
        this.account = data.result.account
        this.role = data.result.role
        this.cart = data.result.cart
      } catch (error) {
        this.logout()
      }
    },
    async getUserAll () {
      if (this.token.length === 0) return
      try {
        const { data } = await apiAuth.get('/users')
        this.account = data.result.account
        this.role = data.result.role
        this.cart = data.result.cart
      } catch (error) {
        this.logout()
      }
    }
  },
  persist: {
    key: 'vite-shop',
    paths: ['token']
  }
})
