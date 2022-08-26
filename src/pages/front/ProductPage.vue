<template>
  <div id="Product">
    <div class="flex flex-center column">
      <h1 class="text-primary q-my-sm" style="font-family:ChenYuluoyan-Thin, sans-serif">{{ product.name }}</h1>
      <!-- <q-btn rounded style="width:55px;height:55px" color='primary' class="q-pa-none" icon="mdi-cart-variant" type='submit'></q-btn> -->
    </div>
    <div class="row">
      <div class="col-12  col-md-8">
        <div class="q-px-lg q-pb-md">
          <div class="text-h5 text-secondary q-ma-sm text-center">
            {{new Date(product.startDay).toDateString()}} ~ {{new Date(product.endDay).toDateString()}}
          </div>
          <div class="row">
            <div class="col-0 col-md-2"></div>
            <div class="col-6 col-md-5">
            <q-timeline color="secondary" class="text-dark">
              <q-timeline-entry  :title="product.dayoneone" icon="fa-solid fa-1" />
              <q-timeline-entry v-if="product.dayonetwo" :title="product.dayonetwo" icon="fa-solid fa-2"/>
              <q-timeline-entry v-if="product.dayonethree" :title="product.dayonethree" icon="fa-solid fa-3"/>
              <q-timeline-entry v-if="product.dayonefour" :title="product.dayonefour" icon="fa-solid fa-4"/>
              <q-timeline-entry v-if="product.dayonefive" :title="product.dayonefive" icon="fa-solid fa-5"/>
            </q-timeline>
            </div>
            <div class="col-6 col-md-5">
            <q-timeline color="secondary" class="text-dark">
              <q-timeline-entry v-if="product.daytwoone" :title="product.daytwoone" icon="fa-solid fa-6"/>
              <q-timeline-entry v-if="product.daytwotwo" :title="product.daytwotwo" icon="fa-solid fa-7"/>
              <q-timeline-entry v-if="product.daytwothree" :title="product.daytwothree" icon="fa-solid fa-8"/>
              <q-timeline-entry v-if="product.daytwofour" :title="product.daytwofour" icon="fa-solid fa-9"/>
              <q-timeline-entry v-if="product.daytwofive" :title="product.daytwofive" icon="fa-solid fa-genderless"/>
            </q-timeline>
            </div>

          </div>

        </div>
      </div>
      <div class="col-12 col-md-4">
        <div class="col col-12 text-center">
            <q-avatar size="300px" class="">
              <img :src='product.image'>
            </q-avatar>
        </div>
            <h3 class="text-secondary"> $ {{ product.price }} </h3>
        <div class="col col-12">
          <p style="font-size:16px" class="q-pr-md">
            {{ product.description }}
          </p>
            <!-- {{ product.startDay }}
            {{ product.endDay }} -->
        </div>
        <div class="col col-12">
          <!-- <q-form v-model='valid' @submit.prevent='submit'> -->
            <!-- <q-input type="number" label="數量" v-model="quantity" class="num" :rules='quantityRule'> -->
            <!-- </q-input> -->
          <!-- </q-form> -->
        </div>
        </div>
    </div>
  </div>
</template>
<script setup>
import { reactive } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { api } from '../../boot/axios'
import Swal from 'sweetalert2'
// import { useUserStore } from '../../stores/user'

const route = useRoute()
const router = useRouter()
// const user = useUserStore()

// const quantity = ref(0)
// const quantityRule = reactive([
//   v => v >= 1 || '數量錯誤'
// ])

const product = reactive({
  _id: '',
  name: '',
  price: 0,
  category: '',
  sell: false,
  image: '',
  description: '',
  startDay: '',
  endDay: '',
  dayoneone: '',
  dayonetwo: '',
  dayonethree: '',
  dayonefour: '',
  dayonefive: '',
  daytwoone: '',
  daytwotwo: '',
  daytwothree: '',
  daytwofour: '',
  daytwofive: ''

})

// const submit = () => {
//   user.addCart({ product: product._id, quantity: quantity.value })
// }
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
    product.startDay = data.result.startDay
    product.endDay = data.result.endDay
    product.dayoneone = data.result.dayoneone
    product.dayonetwo = data.result.dayonetwo
    product.dayonethree = data.result.dayonethree
    product.dayonefour = data.result.dayonefour
    product.dayonefive = data.result.dayonefive
    product.daytwoone = data.result.daytwoone
    product.daytwotwo = data.result.daytwotwo
    product.daytwothree = data.result.daytwothree
    product.daytwofour = data.result.daytwofour
    product.daytwofive = data.result.daytwofive
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
