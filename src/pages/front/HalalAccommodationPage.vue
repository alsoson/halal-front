<template>
<q-page>
  <div class="row text-center">
    <q-btn round icon="fa-solid fa-map-location-dot" color="primary" @click="seamless = true" text-color="white" class="q-my-auto" style="width:50px;height:50px;position:fixed;right:2px;top:62px"/>
    <q-icon name="fa-solid fa-hotel" color="secondary"  size="lg" class="q-mx-auto q-my-md"></q-icon>
  </div>
    <div class="q-pa-md q-gutter-sm">

    <q-dialog v-model="seamless" seamless position="right">
      <div flat class="map" style="width:350px;height:700px;background:transparent;border:none;box-shadow:none">
      <q-btn round dense flat icon="close" style="height:30px" v-close-popup></q-btn>
        <iframe src="https://www.google.com/maps/d/embed?mid=14K7c1wBh23xHnEApxXcTy3-_WTL1cYbB&ehbc=2E312F" width="100%" height="600px" ></iframe>
      </div>
    </q-dialog>
  </div>

  <div class="box halalData" >
    <q-infinite-scroll @load="onLoad" :offset="250">
      <div v-for="(index) in arr" :key="index.name" class="caption" >
        <div class="row q-my-md hover" >
          <div class="col col-1 q-my-auto text-center">
            <q-avatar icon="fa-solid fa-bed" size="md" color="primary" text-color="white">
            </q-avatar>
          </div>
          <div class="col col-11">
            <div class="row">
              <div class="col col-9 col-sm-6 q-my-auto">
                <div class="title-wrap">
                {{index.name}}
                  <p class="q-ma-none">{{index.address}}</p>
                </div>
              </div>
              <div class="col col-3 col-sm-6">
                <div class="row">
                  <div class="col col-12 col-sm-4 q-my-auto">
                    <div class="word-small q-my-auto" style="text-align:right">
                    {{index.type}}
                    </div>
                  </div>
                  <div class="col col-12 col-sm-4 q-my-auto">
                    <div class="word-small q-my-auto">
                    {{index.district}}
                    </div>
                  </div>
                  <div class="col col-12 col-sm-4 text-right q-my-auto">
                    <div class="word-small q-my-auto">
                    {{index.phone}}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <template v-slot:loading>
        <div class="row justify-center q-my-md">
          <q-spinner-dots color="primary" size="40px" />
        </div>
      </template>
    </q-infinite-scroll>
  </div>

</q-page>
</template>
<script setup>
import { reactive, ref } from 'vue'
import Swal from 'sweetalert2'
import { apiAuth } from '../../boot/axios'

const seamless = ref(false)
const items = reactive([])
const arr = reactive([])
const restaurants = reactive([])
// for (const item of items) {
//   console.log(item)
//   restaurants.push(item.type.includes('料理'))
// }
// console.log(restaurants)
// const restaurants = items.filter(items.type.includes('料理'))
// console.log(items)
const init = async () => {
  try {
    const { data } = await apiAuth.get('/data/')
    // data.splice(0, data.length)
    items.push(...data.result)
    for (const item in items) {
      if (items[item].type.split('').includes('住') === true) {
        restaurants.push(items[item])
        console.log(items[item].type.split('').includes('住'))
      }
    }
    console.log(restaurants)
    arr.push(
      ...items.filter(function(item) {
        return item.type.split('').includes('住')
      })
    )
    // arr.push(accommodations)
    // console.log(accommodations)
    // console.log(items)
    // console.log(collections[0].product)
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: '失敗',
      text: error
    })
  }
}
init()

</script>
