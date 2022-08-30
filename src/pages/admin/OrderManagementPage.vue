<template>
  <q-page id="orderManagement">
    <div class="q-pa-md">
      <div class="box">
        <div class="row text-center">
          <h5 class="text-center q-mx-auto q-my-md q-mt-lg text-secondary" style="padding:0">
            <q-icon name="mdi-clipboard-file" size="100px" color="secondary" class="q-mx-auto"></q-icon>
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
</div>

  </div>
  </q-page>
</template>
<script  setup>
import { reactive, ref } from 'vue'
import { apiAuth } from '../../boot/axios'
import Swal from 'sweetalert2'

const filter = ref('')
const orders = reactive([])

const tab = ref('one')
const detail = ref('')
const detailDialog = reactive({
  dialog: false
})
const openDetailDialog = (orderId) => {
  detail.value = orderId
  detailDialog.dialog = true
}

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

const init = async () => {
  try {
    const { data } = await apiAuth.get('/orders/all')
    orders.push(...data.result.map(order => {
      order.totalPrice = order.products.reduce((a, b) => {
        return a + b.product.price * b.quantity
      }, 0)
      return order
    }))
  } catch (error) {
    console.log(error)
    Swal.fire({
      icon: 'question',
      title: 'Please try it again'
      // text: '無法取得訂單'
    })
  }
}
init()
</script>
