<template >
  <q-page id="cart" class="q-mt-md" style="height:calc(100% - 60px);min-height:calc(100% - 60px)">

    <div class="box" style="height:300px" >
        <div class="img1 q-my-auto"></div>
        <div class="img2 q-my-auto"></div>

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
                <q-input rounded flat outlined v-model="form.firstName" :label="$t('firstName')" class="q-ma-md"  lazy-rules
                  :rules="[ val => val && val.length > 0 || 'Required']"></q-input>
              </div>
              <div class="col" col="10">
                <q-input rounded flat outlined v-model="form.lastName" :label="$t('lastName')" class="q-ma-md" style="box-shadow:none"  lazy-rules
                  :rules="[ val => val && val.length > 0 || 'Required']"></q-input>
              </div>
            </div>
            <div class="row">
              <div class="col" col="6">
                <q-input rounded flat outlined v-model="form.phone" :label="$t('phone')" class="q-ma-md" style="box-shadow:none"  lazy-rules
                  :rules="rules.phone"></q-input>
              </div>
              <div class="col" col="6">
                <q-input rounded flat outlined v-model="form.email" label="Email" class="q-ma-md" style="box-shadow:none"  lazy-rules
                  :rules="rules.email"></q-input>
              </div>
            </div>

            <q-card-action class="text-center">
              <div class="text-center q-ma-md">
                <!-- <q-btn :label="$t('1234')" color='primary' :loading='form.submitting' @click='openDialog('')></q-btn> -->
                <q-btn type="submit" :label="$t('submit')" color='primary' :loading='form.submitting' ></q-btn>
                <!-- @click='user.checkout' -->
                <!-- <q-btn @click='user.checkout'></q-btn> -->
              </div>
            </q-card-action>
          </q-card>
        </q-form>
      </q-card>
    </q-dialog>
</div>
<div class="box" style="margin-top:20px">
  <div class="box">
      <div class="row text-center">
      <h5 class="text-center q-mx-auto q-my-md q-mt-lg text-secondary" style="padding:0">
        <q-icon name="mdi-cart-variant" color="secondary"  size="lg" class="q-mx-auto"></q-icon>
      {{$t('cart')}}
      </h5>
    </div>
  </div>
  <div class="row">
    <div class="col col-12 col-md-3">
      <q-card class="bg-accent" style="box-shadow:none;border-radius:16px;">
        <div class="row bg-secondary q-mx-auto rounded" style="width:80%">
        </div>
      <div class="col">
        <div class="text-center text-white q-pb-lg">
          <q-card-section>
            <h5 style="margin-bottom:0;margin-top:10px" class="text-dark">{{$t('totalPrice')}}</h5>
            <h4 style="margin-top:10px;margin-bottom:10px" class="text-dark">$ {{ totalPrice }}</h4>
          </q-card-section>
          <q-separator white inset />
          <q-card-section>
            <div v-for='(item) in cart' :key='item._id' class="flex justify-between">
              <h7 style="text-align:left" class="text-dark">{{item.product.name}}</h7>
              <h7 style="text-align:right" class="text-dark">$ {{item.product.price * item.quantity}}</h7>
            </div>
          </q-card-section>
          <q-card-action>
            <q-btn class="text-center text-white q-my-auto q-mb-md" color='red' @click="openDialog('')" v-if='canCheckout'>{{$t('checkout')}}</q-btn>
            <q-btn class="text-center text-white q-my-auto q-mb-md" color='primary' disabled v-else>{{$t('checkout')}}</q-btn>
            <p class="q-my-md text-red" v-if='!canCheckout && !cart.length '>{{$t('noCart')}}</p>
            <p class="q-my-md text-red" v-else-if='!canCheckout'>{{$t('checkAgain')}}</p>
          </q-card-action>
        </div>
      </div>
      </q-card>
    </div>
    <div class="col col-12 col-md-9">
      <div class="row">
        <div class="col-12 col-md-6 col-lg-4" v-for='(item, idx) in cart' :key='item._id'>
          <!-- {{item}} -->
          <q-card class="my-card q-pa-sm" :key="item" style="background:transparent;box-shadow:none;border-radius:16px">
            <q-img :src='item.product.image'>
              <div class="text-h5 absolute-bottom text-right" style="border-radius:16px">
                <div class="flex row justify-between">
                  <div class="text-h5 text-accent">{{item.product.name}}</div>
                  <div class="text-subtitle1">${{item.product.price}}</div>
                </div>

              <div class="text-subtitle2 text-accent" style="font-size:1.5vmin">{{ new Date(item.product.startDay).toDateString().toLocaleString() }} ~ {{ new Date(item.product.endDay).toDateString().toLocaleString() }}</div>

              <q-card-actions class="flex justify-between q-px-none" style="padding-left:0">
                <div class="div">
                  <q-btn round flat :key="item._id" class="text-accent" icon="fa-solid fa-circle-minus" @click='updateCart(idx, item.quantity-1)'></q-btn>
                  <h7>{{ item.quantity }}</h7>
                  <q-btn round flat :key="item._id" class="text-accent" icon="fa-solid fa-circle-plus" @click='updateCart(idx, item.quantity+1)'></q-btn>
                </div>
                <q-btn round color='secondary' icon="mdi-delete" v-if="canCheckout" @click='updateCart(idx, 0)'></q-btn>
                <q-btn round color='red' icon="mdi-delete" v-else @click='updateCart(idx, 0)'></q-btn>
              </q-card-actions>
              </div>
            </q-img>
          </q-card>
        </div>
      </div>
    </div>
  </div>
</div>

</q-page>

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

const rules = reactive({
  phone: [
    v => !!v || 'Required',
    v => (v.length >= 8 && v.length <= 11) || 'Wrong',
    v => /^[0-9]+$/.test(v) || 'Wrong'
  ],
  email: [
    v => !!v || 'Required',
    v => /^\w+((-\w+)|(\.\w+))*@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/.test(v) || 'Wrong'
  ]
})

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
        title: 'Add Order Success'
        // text: '??????????????????'
      })
    }
    form.dialog = false
  } catch (error) {
    Swal.fire({
      icon: 'question',
      title: 'Please add order again'
      // text: error.isAxiosError ? error.response.data.message : error.message
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
      icon: 'question',
      title: 'Please try it again'
      // text: '???????????????'
    })
  }
}
init()
</script>

<style >

.img1 {
    background: url('src/assets/images/cart/1.jpg') no-repeat center center;
    background-size: cover;
    height: 300px;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    margin: auto;
}

.img2 {
    position: absolute;
    height: 300px;
    width: 100%;
    left: 0;
    top: 0;
    mask: url(https://i.imgur.com/AYJuRke.png);
    mask-size: 3000% 100%;
    animation: maskMove 3s steps(29) ;
    animation-delay: revert;
    animation-fill-mode:forwards;
}

.img2::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 300px;
    width: 100%;
    background: url('src/assets/images/cart/2.jpg') no-repeat center center;
    background-size: cover;
}

@keyframes maskMove {
  /* animation-delay: 3s */
  from {
      mask-position: 0 0;
  }
  to {
      mask-position: 100% 0;
  }
}
</style>
