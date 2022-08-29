<template>
<q-page id="orderPage">
  <div class="box">
      <div class="row text-center">
      <h5 class="text-center q-mx-auto q-my-md q-mt-lg text-secondary" style="padding:0">
        <q-icon name="fa-solid fa-clock-rotate-left" color="secondary"  size="lg" class="q-mx-auto"></q-icon>
      {{$t('orderHistory')}}
      </h5>
    </div>
  </div>
  <!-- <h5 class="text-center">
  <q-icon name="fa-solid fa-clock-rotate-left" size="md" color="secondary"></q-icon>
  <h5 class="q-my-md text-secondary" >{{$t('orderHistory')}}</h5>
</h5> -->
<div class="box">
<q-table
      :grid="$q.screen.lt.md"
      :rows="orders"
      :columns="columns"
      row-key="name"
      :filter="filter"
      flat
    >

      <template v-slot:no-data="{}">
        <div class="full-width row flex-center text-secondary q-gutter-sm">
          <!-- <q-icon size="3em" name="sentiment_dissatisfied" />
          <span style="font-size:30px">
            {{$t('noOrder')}}
          </span>
          <q-icon size="3em" :name="filter ? 'filter_b_and_w' : icon" /> -->
          <q-btn color="primary" class="q-my-md" style="font-size:30px" to="/cart">
            {{$t('noOrder')}}
          </q-btn>
        </div>
      </template>
      <template v-slot:top-right>
        <q-input borderless dense debounce="300" v-model="filter" placeholder="Search">
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>
      </template>
      <template #body-cell-totalPrice="detail" >
        <q-td>
        ${{detail.row.totalPrice}}
        </q-td>
      </template>
      <template #body-cell-btn="detail" >
        <q-td style="text-align:right" :key="detail">
          <q-btn  class="bg-accent"  @click="openDetailDialog(detail)">
          {{$t('detail')}}</q-btn>
        </q-td>
      </template>

      <template v-slot:item="card">
        <div
          class="q-pa-xs col-xs-12 col-sm-6 col-md-4 col-lg-3 grid-style-transition"
          :style="card.selected ? 'transform: scale(0.95);' : ''"
        >
        <!-- <pre>{{card}}</pre> -->
          <q-card class="text-dark q-ma-sm">
            <q-separator />
            <div>
              <h6 class="text-center q-my-md">{{card.row._id}}</h6>
            </div>
            <div class="flex row justify-between q-mx-md">
              <div class="text-subtitle2">{{new Date(card.row.date).toLocaleString()}}</div>
                <div class="text-subtitle2">${{card.row.totalPrice}}</div>
              </div>
              <q-separator class="q-my-md"/>
            <div v-for="item in card.row.orderInfo " :key="item" class="q-my-md">
                <h6 class="q-my-sm text-center">{{item.lastName}}{{item.firstName}}</h6>
                  <h6 class="q-my-sm text-center">{{item.email}}</h6>
            </div>
            <q-card-action class="q-mx-auto text-center ">
              <div class="text-center ">
              <q-btn class="bg-accent q-mb-md" style="" @click="openDetailDialog(card)" >
                {{$t('detail')}}
                </q-btn>
              </div>
            </q-card-action>
          </q-card>
        </div>
      </template>

    </q-table>
        <q-dialog persistent v-model="detailDialog.dialog">
           <q-card class="my-card bg-accent">
            <q-card-section class="text-dark">
              <div class="flex row justify-between">
                <div class="text-h6">{{detail.row._id}}</div>
                <!-- <div class="text-h6">${{detail.row.totalPrice}}</div> -->
              </div>
              <div class="flex row justify-between">
              <div class="text-subtitle2">{{new Date(detail.row.date).toLocaleString()}}</div>
                <div class="text-subtitle2">${{detail.row.totalPrice}}</div>
              </div>
            </q-card-section>

            <q-tabs v-model="tab" class="text-teal">
              <q-tab :label="$t('intineraryDetail')" name="one" class="text-secondary"/>
              <q-tab :label="$t('orderDetail')" name="two" />
            </q-tabs>

            <q-separator />

            <q-tab-panels v-model="tab" animated class=" bg-accent">
              <q-tab-panel name="one">
                <div v-for="item in detail.row.products " :key="item" class="q-my-md">
                  <!-- <pre>{{item}}</pre> -->

                  <div class="flex row justify-between">
                    <h6 class="q-my-sm">{{item.product.name}}</h6>
                    <h6 class="q-my-sm">${{item.product.price}}</h6>
                  </div>
                  <div>{{new Date(item.product.startDay).toLocaleDateString()}} ~ {{new Date(item.product.endDay).toLocaleDateString()}}</div>
                </div>
              </q-tab-panel>

              <q-tab-panel name="two" class=" bg-accent">
                <div v-for="item in detail.row.orderInfo " :key="item" class="q-my-md">
                  <!-- <pre>{{item}}</pre> -->
                  <h6 class="q-my-sm text-center">{{item.lastName}}{{item.firstName}}</h6>
                  <h6 class="q-my-sm text-center">{{item.email}}</h6>
                </div>
              </q-tab-panel>
            </q-tab-panels>
            <q-card-actions align="right" class="text-teal bg-accent">
          <q-btn flat label="OK" v-close-popup />
        </q-card-actions>
          </q-card>
      </q-dialog>
<!-- <pre>{{orders}}</pre> -->
</div>
  <!-- <div class="q-pa-md">
    <div  class="card q-mx-auto box" >
      <div class="row">
        <div class="col col-12 col-sm-6 col-md-4 col-lg-3" v-for='order in orders' :key='order._id'>
          <q-card class="my-card text-white q-ma-md" >
            <q-card-section>
              <div class="flex justify-between">
                <div class="confirm-id text-dark" style="overflow:hidden;white-space: nowrap;text-overflow: ellipsis;">
                  <strong>{{ order._id }}</strong>
                </div>
                <div class="text-h6 text-dark">${{ order.totalPrice }}</div>
              </div>
              <div class="text-subtitle2 text-dark">{{ new Date(order.date).toLocaleDateString() }}</div>
            </q-card-section>
              <q-separator inset/>
            <q-card-section>
              <div v-for="product in order.products " :key="product">
                <div class="flex justify-between">
                  <div class="text-subtitle2 text-secondary " style="">{{ product.product.name }}</div>
                  <div class="text-subtitle2 text-secondary"> ${{ product.product.price }}</div>
                </div>
                <div class="text-subtitle2 text-secondary"> {{ new Date(product.product.startDay).toLocaleDateString() }} ~ {{ new Date(product.product.endDay).toLocaleDateString() }}</div>
              </div>
            </q-card-section>

            <q-separator inset/>
            <div v-for="info in order.orderInfo" :key="info">
              <div class="flex column flex-center text-dark q-py-md">
                <div class="text-subtitle1">{{$t('contactPeople')}}</div>
                <div class="text-subtitle2">{{ info.lastName }}{{ info.firstName }}</div>
                <div class="text-subtitle2">0{{ info.phone }}</div>
              </div>
            </div>
          </q-card>
        </div>
      </div>
    </div>
  </div> -->
  <!-- 地圖 dialog -->
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
const tab = ref('one')
const detail = ref('')
const detailDialog = reactive({
  dialog: false
})
const openDetailDialog = (orderId) => {
  detail.value = orderId
  detailDialog.dialog = true
}
const confirm = ref(false)
const orders = reactive([])
const filter = ref('')
const columns = [
  {
    name: 'name',
    required: true,
    label: 'ID',
    align: 'left',
    field: row => row._id,
    format: val => `${val}`,
    sortable: true
  },
  { name: 'orderDay', align: 'left', label: 'Order Day', field: row => new Date(row.date).toLocaleString(), sortable: true },
  { name: 'totalPrice', align: 'left', label: 'Total Price', field: row => row.totalPrice, sortable: true },
  // { name: 'icon', label: 'icon', sortable: true },
  { name: 'btn' }
]

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
