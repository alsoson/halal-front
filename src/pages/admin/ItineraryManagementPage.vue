<template>
<q-page id="adminItinerary">
  <div class="row bg-primary" style="height:100px">
    <div class="flex justify-between" style="width:100%">
      <h5 class="text-center text-white q-my-none q-ml-lg">
        <q-icon name="mdi-account-supervisor-circle" size="100px" color="white"></q-icon>
        {{$t('itineraryManagement')}}
      </h5>
      <q-btn flat fab  class="text-white bg-secpndary" icon="mdi-plus" style="height:70px;margin-top:15px;font-size:20px" @click="openDialog('')" >{{$t('addItinerary')}}</q-btn>
    </div>
    <q-dialog v-model="form.dialog" persistent >
      <q-card id="dialog" >
        <q-toolbar>
          <q-img src="../../assets/LOGO.png" width="35px" style="margin-top:-5px"></q-img>
          <q-toolbar-title class="text-weight-bold text-primary">{{$t('addItinerary')}}</q-toolbar-title>
          <q-btn flat round dense icon="close" v-close-popup />
        </q-toolbar>

        <q-form v-model='form.valid' @submit.prevent='submitForm'>
          <q-card flat >
            <div class="row">
              <div flat class="col" col="10">
                <q-input rounded flat primary standout v-model="form.name" :label="$t('itineraryName')" class="q-ma-md" :rules="rules.require" lazy-rules></q-input>
              </div>
              <div class="col" col="10">
                <q-input rounded flat primary standout v-model="form.price" :label="$t('itineraryPrice')" :rules="rules.require" lazy-rules class="q-ma-md" style="box-shadow:none" type="number"></q-input>
              </div>
            </div>
            <div class="row">
              <div class="col col-6" col="6">
                <q-input rounded flat primary standout v-model="form.startDay" :label="$t('startDay')" :rules="rules.startDay" lazy-rules class="q-ma-md" style="box-shadow:none">
                  <template v-slot:prepend>
                    <q-icon name="event" class="cursor-pointer">
                      <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                        <q-date  v-model="form.startDay" mask="YYYY-MM-DD">
                          <div class="row items-center justify-end">
                            <q-btn v-close-popup label="Close" color="primary" flat />
                          </div>
                        </q-date>
                      </q-popup-proxy>
                    </q-icon>
                  </template>
                </q-input>
              </div>
              <div class="col col-6" col="6">
                <q-input rounded flat primary standout v-model="form.endDay" :label="$t('endDay')" :rules="rules.endDay" lazy-rules class="q-ma-md" style="box-shadow:none">
                  <template v-slot:prepend>
                    <q-icon name="event" class="cursor-pointer">
                      <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                        <q-date  v-model="form.endDay" mask="YYYY-MM-DD">
                          <div class="row items-center justify-end">
                            <q-btn v-close-popup label="Close" color="primary" flat />
                          </div>
                        </q-date>
                      </q-popup-proxy>
                    </q-icon>
                  </template>
                </q-input>
              </div>
              <div class="col" col="6">
                <q-input rounded flat primary standout v-model="form.endDay" :rules="rules.endDay" lazy-rules :label="$t('endDay')" class="q-ma-md" style="box-shadow:none" type="number"></q-input>
              </div>
            </div>
            <div class="row">
              <div class="col" col="6">
                <q-input rounded flat primary standout v-model="form.people" type="number" :label="$t('people')" class="q-ma-md" style="box-shadow:none" :rules="rules.require" lazy-rules></q-input>
              </div>
              <div class="col" col="6">
                <q-file v-model="form.image" rounded standout counter class="q-ma-md" :label="$t('image')" :rules="rules.require" lazy-rules></q-file>
              </div>
            </div>
            <div class="row">
              <div class="col col-6">
                <q-input rounded flat primary standout v-model="form.dayoneone" :label="$t('dayoneone')" class="q-ma-md" style="box-shadow:none" :rules="rules.require" lazy-rules></q-input>
              </div>
              <div class="col col-6"  v-if="form.dayoneone">
                <q-input rounded flat primary standout v-model="form.dayonetwo" :label="$t('dayonetwo')" class="q-ma-md" style="box-shadow:none"></q-input>
              </div>
              <div class="col col-6" v-if="form.dayonetwo">
                <q-input rounded flat primary standout v-model="form.dayonethree" :label="$t('dayonethree')" class="q-ma-md" style="box-shadow:none"></q-input>
              </div>
              <div class="col col-6" v-if="form.dayonethree">
                <q-input rounded flat primary standout v-model="form.dayonefour" :label="$t('dayonefour')" class="q-ma-md" style="box-shadow:none"></q-input>
              </div>
              <div class="col col-6" v-if="form.dayonefour">
                <q-input rounded flat primary standout v-model="form.dayonefive" :label="$t('dayonefive')" class="q-ma-md" style="box-shadow:none"></q-input>
              </div>
              <div class="col col-6" v-if="form.dayonefive">
                <q-input rounded flat primary standout v-model="form.daytwoone" :label="$t('daytwoone')" class="q-ma-md" style="box-shadow:none"></q-input>
              </div>
              <div class="col col-6" v-if="form.daytwoone">
                <q-input rounded flat primary standout v-model="form.daytwotwo" :label="$t('daytwotwo')" class="q-ma-md" style="box-shadow:none"></q-input>
              </div>
              <div class="col col-6" v-if="form.daytwotwo">
                <q-input rounded flat primary standout v-model="form.daytwothree" :label="$t('daytwothree')" class="q-ma-md" style="box-shadow:none"></q-input>
              </div>
              <div class="col col-6" v-if="form.daytwothree">
                <q-input rounded flat primary standout v-model="form.daytwofour" :label="$t('daytwofour')" class="q-ma-md" style="box-shadow:none"></q-input>
              </div>
              <div class="col col-6" v-if="form.daytwofour">
                <q-input rounded flat primary standout v-model="form.daytwofive" :label="$t('daytwofive')" class="q-ma-md" style="box-shadow:none"></q-input>
              </div>
            </div>
            <div class="row">
              <div class="col" col="12">
                <q-input  v-model="form.description" rounded standout autogrow type="textarea" class="q-ma-md"/>
              </div>
            </div>

            <div class="row">
              <div class="col" col="6">
                <q-toggle
                :false-value="false"
                :label="`On the Shelf - ${form.sell}`"
                :true-value="true"
                color="green"
                v-model="form.sell"/>
              </div>
            </div>

            <q-card-action class="text-center">
              <q-btn type="sumbit" :label="$t('submit')" color='primary' :loading='form.submitting' v-close-popup></q-btn>
            </q-card-action>
          </q-card>
        </q-form>
      </q-card>
    </q-dialog>
  </div>

<!-- 上下架用switch -->
  <div class="q-pa-md">
    <q-table
      flat
      :grid="$q.screen.lt.md"
      :rows="products"
      :columns="columns"
      row-key="name"
      :filter="filter"
    >
      <template v-slot:top-right>
        <q-input borderless dense debounce="300" v-model="filter" placeholder="Search">
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>
      </template>

      <template #body-cell-image="image">
        <q-td style="text-align:right">
          <q-avatar>
          <img :src="image.row.image" alt="">
          </q-avatar>
        </q-td>
      </template>

      <template #body-cell-edit="edit" >
        <q-td style="text-align:right">
          <q-btn round class="bg-accent" style="width:50px;height:50px" @click="openDialog(edit.row._id)" icon="mdi-circle-edit-outline"></q-btn>
          <q-btn round class="bg-red" style="width:50px;height:50px" @click="confirm = true" icon="mdi-delete"></q-btn>
        </q-td>

        <q-dialog v-model="confirm" persistent>
          <q-card>
            <q-card-section class="row items-center">
                <q-avatar icon="mdi-delete" color="primary" text-color="white" />
                  <span class="q-ml-sm text-center q-ml-md">{{$t('Delete')}} ?</span>
            </q-card-section>

            <q-card-actions align="right">
              <q-btn flat color="primary" icon="mdi-check-circle"  @click="deleteProduct(edit.row._id)" v-close-popup />
              <q-btn flat color="primary" icon="mdi-close-circle" v-close-popup />
            </q-card-actions>
          </q-card>
        </q-dialog>
      </template>

      <template v-slot:item="card">
        <div
          class="q-pa-xs col-xs-12 col-sm-6 col-md-4 col-lg-3 grid-style-transition"
          :style="card.selected ? 'transform: scale(0.95);' : ''"
        >
          <!-- <pre>{{ card }}</pre> -->
          <q-card :class="card.selected ? 'bg-grey-2' : ''" >
            <!-- <q-card-section >
              <q-checkbox dense v-model="card.selected" :label="card.row.name" />
            </q-card-section> -->
            <q-separator />
            <!-- <div class="text-center q-mx-auto">
              <q-btn rounded class="text-center" @click="openDialog(card.row._id)" icon="mdi-circle-edit-outline">
                </q-btn>
              <q-btn rounded  @click="confirmSm = true" icon="mdi-delete">
                </q-btn>
              </div> -->
            <q-list v-for="col in card.cols" :key="col.name">
              <!-- <pre>{{ col }}</pre> -->
              <q-item class="text-center">
                <q-item-section class="text-center q-mx-auto">
                  <q-item>
                    <!-- <q-item-label>{{ col.label }}</q-item-label> -->
                    <!-- card.col => 指 整個data col // col.name => card.cols.name col的name 要相同於 row value 的 name -->
                    <q-item-label caption v-if="col.name !== 'image'" class="text-center q-mx-auto">
                      <!-- {{ card.row[col.name] }} -->
                      {{ col.value }}
                    </q-item-label>
                    <q-avatar v-else-if="col.name == 'image'" square size="200px" class="text-center q-mx-auto">
                        <img :src="card.row[col.name]" alt="">
                        <!-- <img :src="card.row.image" alt=""> -->
                        <!-- <h3>{{ card.row.image }}</h3> -->
                        <!-- <q-btn>1234</q-btn> -->
                        <!-- <h1>{{ row.name }}</h1> -->
                    </q-avatar>
                  </q-item>
                </q-item-section>
              </q-item>
            </q-list>
            <q-card-action class="q-mx-auto text-center">
              <div class="flex" style="justify-content:space-around">
                <q-btn rounded class="text-center bg-red" @click="confirmSm = true" icon="mdi-delete" style="width:50px;height:50px"></q-btn>
                <q-btn rounded class="text-center bg-accent" @click="openDialog(card.row._id)" icon="mdi-circle-edit-outline" style="width:50px;height:50px"></q-btn>
              </div>
            </q-card-action>
          </q-card>

          <!-- 刪除鍵 -->
          <q-dialog v-model="confirmSm" persistent>
            <q-card>
              <q-card-section class="row items-center">
                  <q-avatar icon="mdi-account-arrow-right" color="primary" text-color="white" />
                    <span class="q-ml-sm text-center q-ml-md">{{$t('Delete')}} ?</span>
              </q-card-section>
              <q-card-actions align="right">
                <q-btn flat color="primary" icon="mdi-check-circle"  @click="deleteProduct(card.row._id)" v-close-popup />
                <q-btn flat color="primary" icon="mdi-close-circle" v-close-popup />
              </q-card-actions>
            </q-card>
          </q-dialog>
        </div>
      </template>

    </q-table>

  </div>

</q-page>
</template>
<script setup>
import { reactive, ref } from 'vue'
import { apiAuth } from '../../boot/axios'
import Swal from 'sweetalert2'

const products = reactive([])
// const expanded = ref(false)
const filter = ref('')
const confirm = ref(false)
const confirmSm = ref(false)

const columns = [
  {
    name: 'image',
    label: 'Image'
  },
  {
    name: 'name',
    required: true,
    label: 'Name',
    field: row => row.name,
    sortable: true
  },
  { name: 'price', field: row => row.price, label: 'Price', sortable: true },
  { name: 'people', field: row => row.people, label: 'People', sortable: true },
  { name: 'startDay', field: row => new Date(row.startDay).toLocaleDateString(), label: 'Start Day', sortable: true },
  { name: 'endDay', label: 'End Day', field: row => new Date(row.endDay).toLocaleDateString(), sortable: true },
  { name: 'edit', label: 'Edit' }
  // { name: 'iron', label: 'Iron (%)', field: 'iron', sortable: true, sort: (a, b) => parseInt(a, 10) - parseInt(b, 10) }
]

const rules = reactive({
  require: [
    v => !!v || 'Required'
  ],
  startDay: [
    v => !!v || 'Required'
  ],
  endDay: [
    v => !!v || 'Required'
  ]
})

const form = reactive({
  _id: '',
  name: '',
  price: 0,
  category: '',
  sell: false,
  image: null,
  description: '',
  idx: -1,
  dialog: false,
  valid: false,
  submitting: false,
  perple: '',
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

const openDialog = (_id) => {
  form._id = _id
  const idx = _id === '' ? -1 : products.findIndex(product => product._id === _id)
  if (idx > -1) {
    form.name = products[idx].name
    form.price = products[idx].price
    // form.category = products[idx].category
    form.sell = products[idx].sell
    form.description = products[idx].description
    form.people = products[idx].people
    form.startDay = products[idx].startDay
    form.endDay = products[idx].endDay
    form.dayoneone = products[idx].dayoneone
    form.dayonetwo = products[idx].dayonetwo
    form.dayonethree = products[idx].dayonethree
    form.dayonefour = products[idx].dayonefour
    form.dayonefive = products[idx].dayonefive
    form.daytwoone = products[idx].daytwoone
    form.daytwotwo = products[idx].daytwotwo
    form.daytwothree = products[idx].daytwothree
    form.daytwofour = products[idx].daytwofour
    form.daytwofive = products[idx].daytwofive
    form.image = products[idx].image
  } else {
    form.name = ''
    form.price = 0
    // form.category = ''
    form.sell = false
    form.description = ''
    form.people = ''
    form.startDay = ''
    form.endDay = ''
    form.dayoneone = ''
    form.dayonetwo = ''
    form.dayonethree = ''
    form.dayonefour = ''
    form.dayonefive = ''
    form.daytwoone = ''
    form.daytwotwo = ''
    form.daytwothree = ''
    form.daytwofour = ''
    form.daytwofive = ''
    form.image = null
  }
  form.idx = idx
  form.dialog = true
  form.valid = false
  form.submitting = false
}

const submitForm = async () => {
  form.submitting = true
  const fd = new FormData()
  for (const key in form) {
    if (['_id', 'idx', 'dialog', 'valid', 'submitting'].includes(key)) continue
    // else if (key === 'image') fd.append(key, form[key][0])
    else fd.append(key, form[key])
    console.log(form[key])
  }
  console.log(fd)

  try {
    if (form._id.length === 0) {
      const { data } = await apiAuth.post('/products', fd)
      products.push(data.result)
      Swal.fire({
        icon: 'success',
        title: '成功',
        text: '新增成功'
      })
    } else {
      const { data } = await apiAuth.patch('/products/' + form._id, fd)
      console.log('1234')
      products[form.idx] = data.result
      Swal.fire({
        icon: 'success',
        title: '成功',
        text: '編輯成功'
      })
      init()
    }
    form.dialog = false
  } catch (error) {
    Swal.fire({
      icon: 'success',
      title: '失敗',
      text: error.isAxiosError ? error.response.data.message : error.message
    })
  }
  form.submitting = false
}

const deleteProduct = async(productId) => {
  try {
    await apiAuth.delete('/products/' + productId)
    await Swal.fire({
      icon: 'success',
      title: '成功',
      text: '行程刪除成功'
    })
    init()
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: '行程刪除失敗',
      text: '行程刪除失敗'
    })
  }
}

// 抓後台資料
const init = async () => {
  try {
    const { data } = await apiAuth.get('/products/all')
    products.splice(0, products.length)
    products.push(...data.result)
  } catch (error) {
    console.log(error)
    Swal.fire({
      icon: 'error',
      title: '失敗',
      text: error.isAxiosError ? error.response.data.message : error.message
    })
  }
}
console.log(products)
init()
</script>
