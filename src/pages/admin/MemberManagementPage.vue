<template>
<h5 class="text-center">
  <q-icon name="mdi-account-supervisor-circle" size="100px" color="secondary"></q-icon>
</h5>
<!-- <pre>{{ rows }}</pre> -->
  <div class="q-pa-md">
    <q-table
      :grid="$q.screen.lt.sm"
      :title="$t('memberManagement')"
      :rows="rows"
      :columns="columns"
      row-key="name"
      title-class="text-h5 title-center"
      v-model:selected="selected"
      :filter="filter"
    >
      <template #body-cell-delete="Data" >
        <!-- <pre>{{ Data.row }}</pre> -->
        <!-- <pre>{{ Data.row }}</pre> -->
        <q-td style="text-align:right">
          <!-- {{Data.row._id}} -->
          <q-btn rounded style="width:50px;height:50px" class="bg-accent" @click="confirm =true" icon="mdi-delete"></q-btn>
        </q-td>
          <q-dialog v-model="confirm" persistent>
          <q-card>
            <q-card-section class="row items-center">
                <q-avatar icon="mdi-delete" color="primary" text-color="white" />
                  <span class="q-ml-sm text-center q-ml-md">{{$t('Delete')}} ?</span>
            </q-card-section>

            <q-card-actions align="right">
              <q-btn flat color="primary" icon="mdi-check-circle"  @click="deleteUser(Data.row._id)" v-close-popup />
              <q-btn flat color="primary" icon="mdi-close-circle" v-close-popup />
            </q-card-actions>
          </q-card>
        </q-dialog>
      </template>

      <template v-slot:top-right>
        <q-input borderless dense debounce="300" v-model="filter" placeholder="Search">
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>
      </template>

      <template v-slot:item="card">
        <div
          class="q-pa-xs col-xs-12 col-sm-6 col-md-4 col-lg-3 grid-style-transition"
          :style="card.selected ? 'transform: scale(0.95);' : ''"
        >
          <q-card :class="card.selected ? 'bg-grey-2' : ''" >
            <q-card-section >
              <div class="flex between" style="justify-content: space-between;">
                <!-- <q-checkbox dense v-model="card.selected" :label="card.row.name" /> -->
                <q-btn rounded  @click="deleteUser(card.row._id)" icon="mdi-delete" style="width:50px;height:50px;" class="bg-accent"></q-btn>
              </div>
            </q-card-section>
            <q-separator />

            <q-list v-for="col in card.cols" :key="col.name">
              <!-- <pre>{{ col }}</pre> -->
              <q-item class="text-center">
                <q-item-section class="text-right q-mx-auto">
                  <q-item>
                    <q-item-label>{{ col.label }}</q-item-label>
                    <!-- card.col => 指 整個data col // col.name => card.cols.name col的name 要相同於 row value 的 name -->
                    <q-item-label caption v-if="col.name !== 'image'" class="text-center q-mx-auto">
                      {{ col.value}}
                    </q-item-label>

                  </q-item>
                </q-item-section>

              </q-item>
            </q-list>

          </q-card>
        </div>
      </template>
    </q-table>
  </div>

</template>
<script setup>
import { reactive, ref } from 'vue'
import { apiAuth } from '../../boot/axios'
import Swal from 'sweetalert2'

const confirm = ref('false')
// const confirmCard = ref('false')
const columns = [
  {
    name: 'name',
    required: true,
    label: 'Name',
    align: 'left',
    field: row => row.name,
    format: val => `${val}`,
    sortable: true
  },
  { name: 'account', align: 'center', label: 'Account', field: row => row.account, sortable: true },
  { name: 'email', label: 'Email', field: row => row.email, sortable: true },
  { name: 'id', label: 'Id', align: 'right', field: row => row._id, sortable: true, sort: (a, b) => parseInt(a, 10) - parseInt(b, 10) },
  { name: 'delete', label: '', align: 'right', sortable: true, sort: (a, b) => parseInt(a, 10) - parseInt(b, 10) }

  // { name: 'iron', label: 'Iron (%)', field: 'iron', sortable: true, sort: (a, b) => parseInt(a, 10) - parseInt(b, 10) }
]

const selected = ref([])
const filter = ref('')
const rows = reactive([])

const deleteUser = async(userId) => {
  try {
    await apiAuth.delete('/users/' + userId)
    await Swal.fire({
      icon: 'success',
      title: '成功',
      text: '刪除成功'
    })
    init()
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: '刪除失敗',
      text: error.isAxiosError ? error.response.data.message : error.message
    })
  }
}

const init = async () => {
  try {
    const { data } = await apiAuth.get('/users/all')
    rows.splice(0, rows.length)
    rows.push(...data.result)
    console.log(rows)
  } catch (error) {
    console.log(error)
    Swal.fire({
      icon: 'error',
      title: '失敗',
      text: error.isAxiosError ? error.response.data.message : error.message
    })
  }
}
init()

</script>
