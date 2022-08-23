<template>
  <q-card id="memberCard" style="width:90%" class="q-mx-auto q-mt-md bg-accent q-pa-md"  :key="user">
    <q-form readonly>
      <div class="row">
        <div class="col col-12 col-md-6">
          <div class="flex q-mx-auto">
          <q-avatar class="avatar q-mx-auto">
            <!-- style="width:150px;height:150px" -->
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZOi_tWWY8kbbWaDMncXDrSL8N_vSHVABAHR9ICp68ryH25trIJHMhFYd_bZlSOVEAfwI&usqp=CAU" style="width:100%;height:100%" alt="">
          </q-avatar>
          </div>
        </div>
        <div class="col col-12 col-md-6">
          <q-input :label="$t('account')" v-bind:readonly="user.read" v-model="user.account"></q-input>
          <q-input label="Email" v-bind:readonly="user.read"  v-model="user.email"></q-input>
          <!-- <div>
            <q-icon size="lg" name="mdi-account"></q-icon>
            {{ user.account }}
          </div>
          <div>
            <q-icon size="lg" name="mdi-email"></q-icon>
            {{ user.email }}
          </div> -->
        </div>
      </div>
      <div class="row">
        <div class="col col-12 col-md-6">
          <q-input label="name" v-bind:readonly="user.read" v-model="user.name">{}</q-input>
          <!-- <div>
            <q-icon size="lg" name="fa-solid fa-signature"></q-icon>
            {{ user.name}}
          </div> -->
        </div>
        <!-- <div class="col col-12 col-md-6">
          <q-input label="First Name"></q-input>
        </div> -->
        <div class="col col-12 col-md-6">
          <q-input label="smartPhone" v-bind:readonly="user.read" v-model="user.smartphone"></q-input>
        </div>
        <div class="col col-12 col-md-6">
          <q-input label="teltphone" v-bind:readonly="user.read" v-model="user.telephone"></q-input>
        </div>
        <div class="col col-12 text-center q-mt-md">
          <q-btn color="primary" v-bind:readonly="user.read" v-if="readonly= true" @click="openDialog(user._id)">Edit</q-btn>
          <q-btn color="primary" v-bind:readonly="user.read" v-else :label="$t('submit')" ></q-btn>
          <!-- v-if="user.read=true" -->
          <!-- <q-btn v-else-if="user.read=false" color="primary" @click="openDialog(user._id)">False</q-btn> -->
          <!-- @click="openDialog(user._id) -->
        </div>
      </div>
    </q-form>
  </q-card>
</template>

<script setup>
import { reactive } from 'vue'
import Swal from 'sweetalert2'
import { apiAuth } from '../../boot/axios'

// const users = reactive([])
// const
const user = reactive({
  _id: '',
  account: '',
  email: '',
  name: '',
  image: '',
  smartphone: '',
  telephone: '',
  read: true
})

// const read = readonly(true)

const openDialog = (_id) => {
  user._id = _id
  // const idx = _id === '' ? -1 : user.findIndex(user => user._id === _id)
  // if (idx > -1) {
  //   user.name = user[idx].name
  // } else {
  //   user.name = ''
  // }

  user.image = null
  // user.idx = idx
  user.dialog = true
  user.valid = false
  user.submitting = false
  user.read = false
}
// console.log(users)
// 抓到 data 有資料 ，users push 了卻沒有
const init = async () => {
  try {
    const { data } = await apiAuth.get('/users')
    console.log(data.result)
    user._id = data.result._id
    user.account = data.result.account
    user.email = data.result.email
    user.name = data.result.name
    user.image = data.result.image
    user.smartphone = data.result.smartphone
    user.telephone = data.result.telephone
    // console.log(data.result)
    // console.log(typeof (data.result))
    // users.push(data.result)
    // console.log(users)
    // return users
  } catch (error) {
    console.log(error)
    Swal.fire({
      icon: 'error',
      title: '失敗',
      text: error.isAxiosError ? error.response.data.message : error.message
    })
  }
}
init()
</script>
