<template>
  <div class="q-pa-md">
    <div v-for='order in orders' :key='order._id' class="card bg-accent q-mx-auto"  style="width:90%">
      <q-card-section>
        <h5>{{ order._id }}</h5>
        <h6>{{ new Date(order.date).toLocaleDateString() }}</h6>
        <h7>${{ order.totalPrice }}</h7>
        <q-btn
          color="grey"
          round
          flat
          dense
          :icon="expanded ? 'keyboard_arrow_up' : 'keyboard_arrow_down'"
          @click="expanded = !expanded"
        />
        <div class="flex">
          <q-icon name="mdi-home"></q-icon>
          <q-icon name="mdi-home"></q-icon>
          <q-icon name="mdi-home"></q-icon>
          <q-icon name="mdi-home"></q-icon>
        </div>

        <q-linear-progress size="50px" :value="progress" color="primary" class="q-mt-sm">
      <div class="absolute-full flex flex-center">
        <q-badge color="white" text-color="white" :label="progressLabel" />
      </div>
    </q-linear-progress>
      </q-card-section>
    </div>
    <q-slide-transition>
        <div v-show="expanded">
          <q-separator />
          <q-card-section class="text-subitle2">
            <!-- {{ card.product }} -->
          </q-card-section>
        </div>
      </q-slide-transition>
  </div>
</template>
<script setup>
import { reactive, ref, computed } from 'vue'
import Swal from 'sweetalert2'
import { apiAuth } from '../../boot/axios'

const progress = ref(0.9)
const progressLabel = computed(() => (progress.value * 100).toFixed(2) + '%')
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
