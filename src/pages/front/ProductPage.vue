<template>
  <div id="Product">
    <div class="flex flex-center column">
      <h1 class="text-primary q-my-sm">{{ product.name }}</h1>
      <q-btn rounded style="width:55px;height:55px" color='primary' class="q-pa-none" icon="mdi-cart-variant" type='submit'></q-btn>
    </div>
    <div class="row">
      <div class="col"></div>
      <div class="col">
        <div class="col col-12 text-center">
           <q-avatar size="300px" class="">
              <img :src='product.image'>
            </q-avatar>
        </div>
            <h3> ${{ product.price }} </h3>
        <div class="col col-12">
          <p style='white-space: pre;'>
            {{ product.description }}
          </p>
            {{ product.startDay }}
            {{ product.endDay }}
        </div>
        <div class="col col-12">
          <q-form v-model='valid' @submit.prevent='submit'>
            <q-input type="number" label="數量" v-model="quantity"  :rules='quantityRule'>
            </q-input>
          </q-form>
        </div>
        </div>
    </div>
  </div>
</template>
<script setup>
import { reactive, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { api } from '../../boot/axios'
import Swal from 'sweetalert2'
import { useUserStore } from '../../stores/user'

const route = useRoute()
const router = useRouter()
const user = useUserStore()

const quantity = ref(0)
const quantityRule = reactive([
  v => v >= 1 || '數量錯誤'
])
const valid = ref(false)

const product = reactive({
  _id: '',
  name: '',
  price: 0,
  category: '',
  sell: false,
  image: '',
  description: ''
})

const submit = () => {
  user.addCart({ product: product._id, quantity: quantity.value })
}
const init = async () => {
  try {
    const { data } = await api.get('/products/' + route.params.id)
    product._id = data.result._id
    product.name = data.result.name
    product.price = data.result.price
    product.category = data.result.category
    product.sell = data.result.sell
    product.image = data.result.image
    product.description = data.result.description
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: '失敗',
      text: '取得商品資料失敗'
    })
    router.go(-1)
  }
}
init()
</script>
