<template>
<div class="q-pa-md">
  <div class="box">
      <div class="row text-center">
      <h5 class="text-center q-mx-auto q-my-md q-mt-lg text-secondary" style="padding:0">
        <q-icon name="mdi-heart-circle" color="secondary"  size="lg" class="q-mx-auto"></q-icon>
      {{$t('collections')}}
      </h5>
    </div>
  </div>
  <!-- <div class="row"></div> -->
  <div class="row">
    <div v-if="!collections.length" class="text-center q-mx-auto">
      <q-btn  class="text-center q-mx-auto" color="primary" to="/itinerary" style="font-size:25px;border-radius:16px">
        {{$t('noCollections')}}
      </q-btn>
    </div>
    <div class="col col-12 col-sm-6 col-md-4 col-lg-3" v-for="(collection ) in collections" :key="collection._id">
      <q-card class="my-card q-ma-sm" style="">
        <!-- <pre>{{collection}}</pre> -->
        <q-img :src="collection.product.image" :ratio="4/3">
          <div class="absolute-bottom q-pb-none" style="padding-bottom:0">
            <div class="flex row justify-between">
              <div class="text-h6 text-accent">{{collection.product.name}}</div>
              <div class="text-subtitle2">${{collection.product.price}}</div>
            </div>
            <div class="text-subtitle3 text-accent">{{ new Date(collection.product.startDay).toDateString().toLocaleString() }} ~ {{ new Date(collection.product.endDay).toDateString().toLocaleString() }}</div>

            <q-card-actions class="flex justify-right">
              <q-btn round flat icon="mdi-cart" :key="collection._id" class="text-accent" @click="addCart({ product: collection.product._id, quantity: 1 });deleteCollection(collection.product._id)"></q-btn>
              <!-- @click="twoFunction(collection.product._id, 1)" -->
              <!--  @click="addCart({ product: collection.product._id, quantity: 1 });deleteCollection(collection.product._id)" -->
              <q-btn  round flat icon="mdi-delete" :key="collection.product._id" @click="deleteCollection(collection.product._id)" style="color:#FFC0CB"></q-btn>
            </q-card-actions>

          </div>.
        </q-img>

      </q-card>
    </div>
  </div>
</div>
</template>
<script setup>
import { reactive } from 'vue'
import Swal from 'sweetalert2'
import { apiAuth } from '../../boot/axios'
// import { useUserStore } from '../../stores/user'

import { useUserStore } from '../../stores/user'
const user = useUserStore()
const { addCart } = user

// const columns = [
//   {
//     name: 'name',
//     required: true,
//     label: 'name',
//     align: 'left',
//     field: collections => collections.product.name,
//     sortable: true
//   },
//   { name: 'price', label: 'price', field: collection => collection.product.price },
//   { name: 'startDay', label: 'startDay', field: collections => collections.product.startDay },
//   { name: 'endDay', label: 'endDay', field: collections => collections.product.endDay },
//   { name: 'image', label: 'image' },
//   { name: 'btn', label: 'btn' }

// ]

const collections = reactive([])
const deleteCollection = async(productId) => {
  try {
    console.log(productId)
    await apiAuth.delete('/users/collections/' + productId)
    await Swal.fire({
      icon: 'success',
      title: 'Delete Success'
      // text: '????????????'
    })
    init()
  } catch (error) {
    Swal.fire({
      icon: 'question',
      title: 'Please delete again'
      // text: error
    })
  }
}

// const twoFunction = async (productId, quantity) => {
//   try {
//     addCart({ product: productId, quantity })
//     deleteCollection(productId)
//     await Swal.fire({
//       icon: 'success',
//       title: '??????',
//       text: '?????????????????????'
//     })
//     await init()
//   } catch (error) {
//     Swal.fire({
//       icon: 'error',
//       title: '?????????????????????',
//       text: error
//     })
//   }
// }
const init = async () => {
  try {
    const { data } = await apiAuth.get('/users/collections')
    collections.splice(0, collections.length)
    collections.push(...data.result)
    // console.log(collections[0].product)
  } catch (error) {
    Swal.fire({
      icon: 'question',
      title: 'Please try it again'
      // text: error
    })
  }
}
init()
</script>
