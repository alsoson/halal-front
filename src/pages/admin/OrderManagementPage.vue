<template>
  <q-page id="orderManagement">
    <h5 class="text-center">
      <q-icon name="mdi-clipboard-file" size="100px" color="secondary"></q-icon>
    </h5>
    <div class="q-pa-md">

    <q-table
      grid
      :rows="orders"
      :columns="columns"
      row-key="name"
      :filter="filter"
      hide-header
      v-model:pagination="pagination"
      :rows-per-page-options="rowsPerPageOptions"
    >
      <template v-slot:top-right>
        <q-input borderless dense debounce="300" v-model="filter" placeholder="Search">
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>
      </template>

      <template v-slot:item="props">
        <!-- <pre>{{props}}</pre> -->
        <div class="q-pa-xs col-xs-12 col-sm-6 col-md-4 col-lg-3">
          <q-card :key="props.row" class="text-dark">
            <q-card-section class="text-center">
              <div class="q-ma-none order-id"><strong>{{ props.row._id }}</strong></div>
              <h7>{{ props.row.user.account }}</h7>
            </q-card-section>
            <q-separator />
            <q-card-section v-for="product in props.row.products" :key="product._id" class="">
              <div class="pack-product">
                <div class="flex justify-between">
                  <div class="text-subtitle2">
                    {{ product.product.name}} - {{ product.quantity}}{{$t('pack')}}
                  </div>
                  <div class="text-subtitle2 text-secondary">
                    ${{ product.product.price}}
                  </div>
                </div>
                <div class="text-subtitle2">
                  {{ new Date(product.product.startDay).toDateString()}} ~ {{ new Date(product.product. endDay).toDateString()}}
                </div>
              </div>
            </q-card-section>
            <q-separator inset />

            <div class="text-subtitle2 q-mx-auto text-center q-pt-md q-pb-none">
              {{$t('orderInfo')}}
            </div>
            <q-card-section v-for="info in props.row.orderInfo" :key="info._id">
            <div class="text-subtitle2 text-center">
              {{info.lastName}}{{info.firstName}}
            </div>
            <div class="text-subtitle2 text-center">
              {{info.phone}}
            </div>
            <div class="text-subtitle2 text-center">
              {{info.email}}
            </div>
              </q-card-section>
            <q-card-action>

              <q-btn rounded :key="props.row._id" style="width:50px;height:50px" class="bg-accent" icon="mdi-circle-edit-outline"></q-btn>
                <q-dialog :key="props.row._id" persistent style="width:100%">
                  <q-card flat bordered  style="width:100%" class="my-card bg-secondary text-white">
                    <q-form v-model="form" @submit.prevent='submitForm'>
                        <q-card-section>
                          <div class="text-h6">{{ props.row }}</div>
                          <div class="text-subtitle2">{{ props.row }}</div>
                        </q-card-section>

                        <q-card-section>
                          {{ props.row }}
                        </q-card-section>

                        <q-separator inset />

                        <q-card-section>
                          <div class="text-subtitle2">Answer</div>
                          <q-input v-model="form.reply" type="textarea" color="white"></q-input>
                        </q-card-section>

                        <q-separator dark />

                        <q-card-actions>
                          <q-btn v-close-popup round flat icon="fa-solid fa-xmark"></q-btn>
                          <q-btn flat v-close-popup  round type="submit" icon="fa-solid fa-check" @click="submitForm()"></q-btn>
                          <q-toggle
                            :false-value="false"
                            :label="`On the Shelf - ${form.sell}`"
                            :true-value="true"
                            color="pink"
                            v-model="form.sell"/>
                        </q-card-actions>
                    </q-form>
                  </q-card>
                </q-dialog>
            </q-card-action>
          </q-card>
        </div>
      </template>
    </q-table>
  </div>
  </q-page>
</template>
<script  setup>
import { reactive, ref } from 'vue'
import { apiAuth } from '../../boot/axios'
import Swal from 'sweetalert2'

const filter = ref('')
const orders = reactive([])

const columns = [
  {
    name: '_id',
    required: true,
    label: 'Id',
    align: 'left',
    sortable: true
  }
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
      icon: 'error',
      title: '失敗',
      text: '無法取得訂單'
    })
  }
}
init()
</script>
