<template >
  <q-page class="q-mt-md" style="height:calc(100% - 60px);min-height:calc(100% - 60px)">
    <div class="row bg-secondary q-mx-auto rounded" style="width:80%">
      <div class="col">
        <h3 class="text-center text-white"> 總金額  $ {{ totalPrice }} </h3>
      </div>
      <div class="col">
        <q-btn class="text-center text-white q-my-auto" color='accent' @click="openDialog('')" :disabled='!canCheckout'>結帳</q-btn>
      </div>

      <q-dialog seamless v-model="form.dialog" persistent >
      <q-card id="dialog" >
        <q-toolbar>
          <q-img src="../../assets/LOGO.png" width="35px" style="margin-top:-5px"></q-img>
          <q-toolbar-title class="text-weight-bold text-primary" > {{$t('contactInfo')}} </q-toolbar-title>
          <q-btn flat round dense icon="close" v-close-popup />
        </q-toolbar>

        <q-form @submit.prevent='submitForm'>
          <q-card flat >
            <div class="row">
              <div flat class="col" col="10">
                <q-input rounded flat primary standout v-model="form.firstName" :label="$t('firstName')" class="q-ma-md"></q-input>
              </div>
              <div class="col" col="10">
                <q-input rounded flat primary standout v-model="form.lastName" :label="$t('lastName')" class="q-ma-md" style="box-shadow:none"></q-input>
              </div>
            </div>
            <div class="row">
              <div class="col" col="6">
                <q-input rounded flat primary standout v-model="form.phone" :label="$t('phone')" class="q-ma-md" style="box-shadow:none"></q-input>
              </div>
              <div class="col" col="6">
                <q-input rounded flat primary standout v-model="form.email" label="Email" class="q-ma-md" style="box-shadow:none"></q-input>
              </div>
            </div>

            <q-card-action class="text-center">
              <div class="text-center q-ma-md">
                <!-- <q-btn :label="$t('1234')" color='primary' :loading='form.submitting' @click='openDialog('')></q-btn> -->
                <q-btn type="submit" :label="$t('submit')" color='primary' :loading='form.submitting'  v-close-popup></q-btn>
                <!-- @click='user.checkout' -->
                <!-- <q-btn @click='user.checkout'></q-btn> -->
              </div>
            </q-card-action>
          </q-card>
        </q-form>
      </q-card>
    </q-dialog>
    </div>

  <q-card flat v-for='(item, idx) in cart' :key='item._id' :class="{'bg-red': !item.product.sell}" class="q-mx-auto q-ma-sm q-pa-md"
  style="width:90%" >
  <!-- {{item.product}} -->
    <div class="row q-ml-lg">
      <q-avatar size="200px" style="background:white">
        <img :src='item.product.image' alt="">
      </q-avatar>
    </div>
    <div class="row rounded q-pa-md" style="width:100%;background:rgba(117, 181, 152, 0.5);margin-top:-10px;" >
      <div class="col col-10">
        <h4>{{ item.product.name }}</h4>
        <h6>$ {{ item.product.price }}</h6>
        <h6>{{ new Date(item.product.startDay).getFullYear().toLocaleString() }}.{{ new Date(item.product.startDay).getMonth() +1 }}.{{ new Date(item.product.startDay).getDate().toLocaleString() }} ~ {{ new Date(item.product.endDay).getFullYear().toLocaleString() }}.{{ new Date(item.product.endDay).getMonth()+1}}.{{ new Date(item.product.endDay).getDate().toLocaleString() }}</h6>
        {{ item.product.price * item.quantity }}
        <q-btn color='primary' @click='updateCart(idx, 0)'>刪除</q-btn>
        <!-- <q-btn @click="form.dialog = true" color='accent' v-for="number in item.quantity" :key="number">參加者{{number}}</q-btn> -->
      </div>
      <div class="col col-2">
        <q-btn color='primary' @click='updateCart(idx, item.quantity-1)' variant="text"> - </q-btn>
        <h4>{{ item.quantity }}</h4>
        <q-btn color='primary' @click='updateCart(idx, item.quantity+1)' variant="text"> + </q-btn>
      </div>
    </div>
  </q-card>
  </q-page>

  <!-- <div class="q-pa-md">
    <q-stepper
      v-model="step"
      ref="stepper"
      color="primary"
      header-class="text-bold"
      animated
      v-for='(item) in cart' :key='item._id' :class="{'bg-red': !item.product.sell}"
    >
      <q-step
        :name="1"
        title="Check itinerary and Quantity for people"
        icon="mdi-question"
        :done="step > 1"
      >
        <q-card class="q-mx-auto q-ma-sm q-pa-md" flat style="width:90%" >
    <div class="row q-ml-lg">
      <q-avatar size="200px" style="background:white">
        <img :src='item.product.image' alt="">
          1234
      </q-avatar>
    </div>
    <div class="row rounded q-pa-md" style="width:100%;background:rgba(117, 181, 152, 0.5);margin-top:-10px;" >
      <div class="col col-10">
        <h4>{{ item.product.name }}</h4>
        <h6>$ {{ item.product.price }}</h6>
        <h6>{{ item.product.startDay }} ~ {{ item.product.endDay }}</h6>
        {{ item.product.price * item.quantity }}
        <q-btn color='primary' @click='updateCart(idx, 0)'>刪除</q-btn>
      </div>
    </div>
        </q-card>
      </q-step>

      <q-step
        :name="2"
        title="Fill the information for people"
        icon="create_new_folder"
        :done="step > 2"
      >
      </q-step>
      <q-step
        :name="3"
        title="check again "
        icon="assignment"
        :done="step > 3"
      >
        This step won't show up because it is disabled.
      </q-step>

      <template v-slot:navigation>
        <q-stepper-navigation>
          <q-btn @click="$refs.stepper.next()" color="primary" :label="step === 3 ? 'checkout' : 'Continue'" />
          <q-btn v-if="step > 1" flat color="primary" @click="$refs.stepper.previous()" label="Back" class="q-ml-sm" />
        </q-stepper-navigation>
      </template>
    </q-stepper>
  </div> -->

</template>
<script setup>
import { reactive, computed } from 'vue'
import Swal from 'sweetalert2'
import { apiAuth } from '../../boot/axios'
import { useUserStore } from '../../stores/user'

// const step = ref(1)

const user = useUserStore()
const order = reactive([])
const cart = reactive([])

const totalPrice = computed(() => {
  return cart.reduce((a, b) => {
    return a + b.product.price * b.quantity
  }, 0)
})

const canCheckout = computed(() => {
  return cart.length > 0 && !cart.some(item => {
    return !item.product.sell
  })
})

const form = reactive({
  _id: '',
  firstName: '',
  lastName: '',
  phone: '',
  email: '',
  idx: -1,
  dialog: false,
  submitting: false
})

const openDialog = (_id) => {
  form._id = _id
  const idx = _id === '' ? -1 : user.orderInfo.findIndex(order => order._id === _id)
  if (idx > -1) {
    form.lastName = order[idx].lastName
    form.firstName = order[idx].firstName
    form.phone = order[idx].phone
    form.email = order[idx].email
  } else {
    form.lastName = ''
    form.firstName = ''
    form.phone = ''
    form.email = ''
  }
  form.idx = idx
  form.dialog = true
  form.submitting = false
  console.log(form.lastName)
}

const submitForm = async () => {
  form.submitting = true

  // console.log(form._id)
  // console.log(form.lastName)
  try {
    if (form._id.length === 0) {
      await apiAuth.post('/users/order', {
        _id: form._id,
        lastName: form.lastName,
        firstName: form.firstName,
        phone: form.phone,
        email: form.email
      })
      // this.order
      Swal.fire({
        icon: 'success',
        title: '成功',
        text: '新增訂單成功'
      })
    }
    form.dialog = false
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: '失敗',
      text: error.isAxiosError ? error.response.data.message : error.message
    })
  }
  form.submitting = false
  await user.checkout()
}

const updateCart = async (idx, quantity) => {
  const result = await user.updateCart({ product: cart[idx].product._id, quantity })
  if (result) {
    if (quantity === 0) {
      cart.splice(idx, 1)
    } else {
      cart[idx].quantity = quantity
    }
  }
}

const init = async () => {
  try {
    const { data } = await apiAuth.get('/users/cart')
    cart.push(...data.result)
    // const { data } = await apiAuth.get('/products/all')
    // products.splice(0, products.length)
    // console.log(data.result)
    // console.log(typeof (data.result))
    // products.push(...data.result)
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: '失敗',
      text: '伺服器錯誤'
    })
  }
}
init()
</script>
