<template>
<q-page id="connectUs">
  <h2 class=" text-center text-secondary" style="font-family:'ChenYuluoyan-Thin';font-size:10vmin">
    {{$t('connectUsTitle')}}
  </h2>
  <div style="width:100%" class="bg-accent">
    <h6 class="text-center q-px-lg q-py-lg" style="font-family:'ChenYuluoyan-Thin';font-size:3.5vmin;font-weight:300">
      {{$t('connectUsP')}}
    </h6>
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
      <template v-slot:top-right>
        <q-input borderless dense debounce="300" v-model="filter" placeholder="Search">
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>
      </template>

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
            <q-card-section class="">{{ props.row.description }}</q-card-section>

            <q-separator inset />

            <q-card-section>
            <div class="text-subtitle2">Answer</div>
              {{ props.row.reply }}
              </q-card-section>

            <q-card-action>
              <!-- <q-btn rounded style="width:50px;height:50px"  class="bg-red" icon="mdi-delete"></q-btn> -->
              <q-btn rounded @click="confirm = true" style="width:50px;height:50px" class="bg-accent" icon="mdi-circle-edit-outline"></q-btn>
                <q-dialog v-model="confirm" persistent style="width:100%">
                  <q-card flat bordered  style="width:100%" class="my-card bg-secondary text-white">
                    <q-form v-model="form" @submit.prevent='submitForm'>
                      <!-- <q-card-section>
                        <div class="text-h6">{{props.row.title}}</div>
                      </q-card-section>

                      <q-card-section class="q-pt-none">
                        {{ props.row.description }}
                      </q-card-section>

                      <q-separator inset />

                      <q-card-section>
                        <q-input v-model="form.reply" type="textarea"></q-input>
                      </q-card-section>

                      <q-card-actions vertical>
                        <q-btn flat>Action 1</q-btn>
                        <q-btn flat>Action 2</q-btn>
                      </q-card-actions> -->

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
                          <q-input v-model="form.reply" type="textarea" color="white"></q-input>
                        </q-card-section>

                        <q-separator dark />

                        <q-card-actions>
                          <q-btn v-close-popup flat>X</q-btn>
                          <q-btn flat v-close-popup type="submit" @click="openDialog(props.row._id)">Edit</q-btn>
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
import { reactive, ref } from 'vue'
import { apiAuth } from '../../boot/axios'
import Swal from 'sweetalert2'

const confirm = ref(false)
const rows = reactive([])

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
  form._id = _id
  form.reply = rows.reply
  form.sell = rows.sell
  form.dialog = true
  form.submitting = false
}

const columns = [
  {
    name: 'anonymous',
    required: true,
    label: 'Anonymous',
    align: 'left',
    // flied: qa => qa.row.anonymous,
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
