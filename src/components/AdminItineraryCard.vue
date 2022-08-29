<template>
  <q-card class="product-card " flat bordered >
      <q-img :src='product.image' :ratio="4/3"/>
      <q-card-section >
        <router-link :to="'/product/' + product._id" style="text-decoration:none">
        <div class="text-overline text-orange-9 " style="font-size:20px;">${{ product.price }}</div>
        <div class="text-h5 q-mt-sm q-mb-xs text-secondary">{{product.name}}</div>
        <div class="text-caption text-dark" style="font-size:14px">
          {{ new Date(product.startDay).toDateString() }} ~ {{ new Date(product.endDay).toDateString() }}
          <!-- {{ new Date(product.startDay).getFullYear().toLocaleString() }}.{{ new Date(product.startDay).getMonth() +1 }}.{{ new Date(product.startDay).getDate().toLocaleString() }} ~ {{ new Date(product.endDay).getFullYear().toLocaleString() }}.{{ new Date(product.endDay).getMonth()+1}}.{{ new Date(product.endDay).getDate().toLocaleString() }} -->
        </div>
        </router-link>
      </q-card-section>
      <q-card-actions class="flex-center">
        <q-btn flat round color="dark" icon="mdi-heart-circle" text-color="primary" @click="addCollection({ product: product._id, quantity: 1 })"/>
        <q-btn flat round color="dark" icon="mdi-cart-variant" text-color="primary" @click="addCart({ product: product._id, quantity: 1 })"/>
        <!-- <q-btn flat round color="dark" :icon="expanded ? 'keyboard_arrow_up' : 'keyboard_arrow_down'" @click="expanded = !expanded" /> -->
      </q-card-actions>
      <q-slide-transition >
        <div v-show="expanded">
          <q-separator />
          <!-- <q-card-section class="text-subitle2">
            {{ product.description }}
          </q-card-section> -->
        </div>
      </q-slide-transition>
  </q-card>
</template>

<script setup>
import { useUserStore } from '../stores/user'
import { ref } from 'vue'
const user = useUserStore()
const { addCart, addCollection } = user
const expanded = ref(false)
defineProps(['product'])
// defineProps({
//   product: {
//     type: Object,
//     required: true,
//     default () {
//       return {
//         _id: '',
//         name: '',
//         price: 0,
//         category: '',
//         sell: false,
//         image: '',
//         description: ''
//       }
//     }
//   }
// })
</script>
