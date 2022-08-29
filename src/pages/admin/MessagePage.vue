<template>
<q-page id="connectUs">
  <div class="box">
        <div class="row text-center">
          <h5 class="text-center q-mx-auto q-my-md q-mt-lg text-secondary" style="padding:0">
            <q-icon name="mdi-forum" size="100px" color="secondary" class="q-mx-auto"></q-icon>
            {{$t('messageManagement')}}
          </h5>
        </div>
      </div>

      <q-table
      grid
      :card-container-class="cardContainerClass"
      :rows="rows"
      :columns="columns"
      row-key="name"
      :filter="filter"
      hide-header
      v-model:pagination="pagination"
      :rows-per-page-options="rowsPerPageOptions"
    >
      <!-- <template v-slot:top-right>
        <q-input borderless dense debounce="300" v-model="filter" placeholder="Search">
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>
      </template> -->

      <template v-slot:item="props">
        <!-- <pre>
          {{props}}
        </pre> -->
        <div class="q-pa-xs col-xs-12 col-sm-6 col-md-4">
          <q-card :key="props.row">
            <q-card-section class="text-center">
              <h5 class="q-ma-none"><strong>{{ props.row.title }}</strong></h5>
              <h7>{{ props.row.anonymous }}</h7>
            </q-card-section>
            <q-separator />
            <q-card-section class="" style="overflow: hidden;
text-overflow:ellipsis;
white-space: nowrap">{{ props.row.description }}</q-card-section>

            <q-separator inset />

            <q-card-section style="overflow: hidden;
text-overflow:ellipsis;
white-space: nowrap">
            <div class="text-subtitle2">Answer</div>
              {{ props.row.reply }}
              </q-card-section>

            <q-card-action>
              <!-- <q-btn rounded style="width:50px;height:50px"  class="bg-red" icon="mdi-delete"></q-btn> -->
              <q-btn rounded @click="openDialog(props.row._id)" :key="props.row._id" style="width:50px;height:50px" class="bg-accent" icon="mdi-circle-edit-outline"></q-btn>
              <!-- 彈跳視窗 -->
                <q-dialog :key="props.row._id" v-model="form.dialog" persistent style="width:100%">
                  <q-card flat bordered  style="width:100%" class="my-card bg-secondary text-white">
                    <q-form v-model="form" @submit.prevent='submitForm'>
                        <q-card-section>
                          <div class="text-h6">{{props.row.title}}</div>
                          <div class="text-subtitle2">{{ props.row.anonymous }}</div>
                        </q-card-section>

                        <q-card-section>
                          {{ props.row.description }}
                        </q-card-section>

                        <q-separator inset />

                        <q-card-section>
                          <div class="text-subtitle2">Answer</div>
                          <q-input v-model="form.reply"
                          :rules="[val => !!val || 'Required']" type="textarea" color="white"></q-input>
                        </q-card-section>

                        <q-separator dark />

                        <q-card-actions>
                          <q-btn v-close-popup round flat icon="fa-solid fa-xmark"></q-btn>
                          <q-btn flat  round type="submit" icon="fa-solid fa-check"></q-btn>
                          <q-toggle
                            v-if="form.reply"
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
</q-page>
</template>
<script setup>
import { reactive } from 'vue'
import { apiAuth } from '../../boot/axios'
import Swal from 'sweetalert2'

const rows = reactive([])
// const filter = ref('')
// for (i in rows.rowIndex) {
//   const { i } = ref('one')
// }

const form = reactive({
  _id: '',
  reply: '',
  idx: 0,
  sell: false,
  dialog: false,
  submitting: false
})

const openDialog = (_id) => {
  const idx = rows.findIndex(rows => rows._id === _id)
  form._id = _id
  form.reply = rows[idx].reply
  form.sell = rows[idx].sell
  form.dialog = true
  form.submitting = false
}

const columns = [
  {
    name: 'anonymous',
    required: true,
    label: 'Anonymous',
    align: 'left',
    flied: qa => qa.row.anonymous,
    sortable: true
  },
  { name: 'title', align: 'center', label: 'Title', sortable: true, required: true },
  { name: 'description', label: 'Description', sortable: true },
  { name: 'reply', label: 'Reply', sortable: true },
  { name: 'edit', label: 'Edit', sortable: true }
]

const submitForm = async () => {
  form.submitting = true
  console.log(form.reply)
  try {
    await apiAuth.patch('/qa/' + form._id, {
      reply: form.reply,
      sell: form.sell
    })
    Swal.fire({
      icon: 'success',
      title: '成功',
      text: '編輯成功'
    })
    init()
    form.dialog = false
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: '失敗',
      text: error.isAxiosError ? error.response.data.message : error.message
    })
  }
  form.submitting = false
}

const init = async () => {
  try {
    const { data } = await apiAuth.get('/qa/all')
    rows.splice(0, rows.length)
    rows.push(...data.result)
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
