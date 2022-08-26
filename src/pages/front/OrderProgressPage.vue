<template>
<q-page id="orderPage">
  <h5 class="text-center">
  <q-icon name="fa-solid fa-clock-rotate-left" size="md" color="secondary"></q-icon>
  <h5 class="q-my-md text-secondary" >{{$t('orderHistory')}}</h5>
</h5>
  <div class="q-pa-md">
    <div  class="card q-mx-auto box" >
      <div class="row">
        <div class="col col-12 col-sm-6 col-md-4 col-lg-3" v-for='order in orders' :key='order._id'>
      <q-card class="my-card text-white q-ma-md" >
      <q-card-section>
        <div class="flex justify-between">
        <div class="confirm-id text-dark" style="overflow:hidden;
white-space: nowrap;
text-overflow: ellipsis;"><strong>{{ order._id }}</strong></div>
        <div class="text-h6 text-dark">${{ order.totalPrice }}</div>
        </div>
        <div class="text-subtitle2 text-dark">{{ new Date(order.date).toLocaleDateString() }}</div>
      </q-card-section>
        <!-- <pre>
          {{order}}
        </pre> -->
        <q-separator inset/>
      <q-card-section>
        <div v-for="product in order.products " :key="product">
          <!-- <pre>{{product}}</pre> -->
          <!-- <pre>{{product.product.name}}</pre> -->

        <div class="flex justify-between">
          <div class="text-subtitle2 text-secondary " style="">{{ product.product.name }}</div>
          <div class="text-subtitle2 text-secondary"> ${{ product.product.price }}</div>
        </div>
        <div class="text-subtitle2 text-secondary"> {{ new Date(product.product.startDay).toLocaleDateString() }} ~ {{ new Date(product.product.endDay).toLocaleDateString() }}</div>
        </div>
      </q-card-section>
      <q-card-section>

      </q-card-section>
      <q-separator inset/>
        <div v-for="info in order.orderInfo" :key="info">
          <!-- <pre>{{product}}</pre> -->
          <!-- <pre>{{product.product.name}}</pre> -->
        <div class="flex column flex-center text-dark q-py-md">
          <div class="text-subtitle1">
            {{$t('contactPeople')}}
          </div>
          <div class="text-subtitle2">{{ info.lastName }}{{ info.firseName }}</div>
        </div>
        </div>

    </q-card>
      </div>
    </div>

  </div>
  </div>
  <div class="box q-pb-xl" >
    <div class="row">
      <div class="col col-12 col-sm-6 col-lg-8" style="height:calc(50vh - 60px)">
        <q-btn flat style="width:100%;height:100%;padding:0;"  @click="confirm = true">
          <div class="taiwan q-pr-sm" style="width:100%;height:100%;padding:0"></div>
        </q-btn>
        <q-dialog v-model="confirm" seamless position="bottom" >

          <q-card class="dialog-map bg-accent" flat >
            <div class="div" >
            <q-btn flat round icon="fa-solid fa-close" v-close-popup />
            </div>
            <q-card-section >
              <div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d28921.25444131725!2d121.5548065072683!3d25.028752110073523!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1staipei%20101!5e0!3m2!1sen!2stw!4v1661482695124!5m2!1sen!2stw" width="500" height="350" style="border:0;" loading="lazy"></iframe>
              </div>

            </q-card-section>
          </q-card>
    </q-dialog>
      </div>
      <div class="col col-0 col-sm-6 col-lg-4">
        <div class="div q-pl-sm"  style="width:100%;height:calc(50vh - 60px)">
          <video autoplay loop src="../../assets/images/order/101.mp4" style="width:100%;height:calc(50vh - 60px);object-fit:cover"></video>
        </div>
      </div>
    </div>
  </div>
  </q-page>
</template>
<script setup>
import { reactive, ref } from 'vue'
import Swal from 'sweetalert2'
import { apiAuth } from '../../boot/axios'

// const progress = ref(0.9)
// const progressLabel = computed(() => (progress.value * 100).toFixed(2) + '%')
// dialog ㄉ
// const order = reactive([])
// console.log(order)
const confirm = ref(false)
const orders = reactive([])
// const filter = ref('')
// const columns = [
//   {
//     name: 'name',
//     required: true,
//     label: 'name',
//     align: 'center',
//     field: row => row._id,
//     format: val => `${val}`,
//     sortable: true
//   },
//   { name: 'orderDay', align: 'center', label: 'orderDay', field: row => new Date(row.date), sortable: true }
//   // { name: 'icon', label: 'icon', sortable: true },
//   // { name: 'progress', label: 'progress' }
// ]

// const open = (id) => {
//   confirm.value = false
//   order.push(
//     ...orders.filter{orders._id === id}
//   )
// }
// console.log(orders[order]._id)
// if (items[item].type.split('').includes('住') === true) {
//   restaurants.push(items[item])
//   console.log(items[item].type.split('').includes('住'))
//   }

const init = async () => {
  try {
    const { data } = await apiAuth.get('/orders')
    orders.push(...data.result.map(order => {
      order.totalPrice = order.products.reduce((a, b) => {
        return a + b.product.price * b.quantity
      }, 0)
      return order
    }))
  } catch (error) {
    console.log(error)
    Swal.fire({
      icon: 'error',
      title: '失敗',
      text: '無法取得訂單'
    })
  }
  // console.log(rows)
}
init()
</script>
