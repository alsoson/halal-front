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
  <div>
    <div class="row">
      <div class="col-12  col-sm-6 text-center">
        <q-avatar class="avatar">
          <img src="../../assets/images/connectUs/women-gfd7f6ce7b_1920.jpg" alt="">
        </q-avatar>
      </div>
      <div class="col-12 col-sm-6">
        <div class="margin-box">
          <div class="flex justify-center">
            <img src="../../assets/LOGO.svg" class="logo-img" alt="" />
            <h6 class="q-mx-sm q-my-none text-secondary" style="line-height:3" >
              <span style="font-family:Hobo Regular">
                Hello ! Halal
              </span>
            </h6>
            <!-- 電話信箱 退換 呂素條款 -->
          </div>
          <div class="flex justify-center">
            <q-avatar icon="mdi-email" class="text-secondary"></q-avatar>
            <p class="q-ma-none text-secondary flex flex-center" >
              0000@gmail.com
            </p>
            <!-- 電話信箱 退換 呂素條款 -->
          </div>
          <div class="flex justify-center">
            <q-avatar icon="mdi-phone" class="text-secondary"></q-avatar>
            <p class="q-ma-none text-secondary flex flex-center">
              00-0000000
            </p>
            <!-- 電話信箱 退換 呂素條款 -->
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="q-mt-sm-lg " style="">
    <div class="">
      <q-parallax>
        <template v-slot:media>
            <img src="../../assets/images/connectUs/parallax2.jpg">
        </template>

        <template v-slot:description="scope">
          <div
            class="absolute column items-center"
            :style="{
              opacity: 0.45 + (1 - scope.percentScrolled) * 0.55,
              top: (scope.percentScrolled * 60) + '%',
              left: 0,
              right: 0
            }">
            <div>
              <q-spinner-comment color="primary" size="10em" class="text-dark">
              </q-spinner-comment>
            </div>
          </div>
        </template>
      </q-parallax>
    </div>
  </div>
    <!-- <div class="q-pa-md box q-mb-xl" style="">
      <q-list class="rounded-borders q-mt-lg">
        <q-expansion-item
          expand-separator
          icon="fa-solid fa-circle-question"
          :label="$t('whyCreate')"
          default-opened
        >
          <q-expansion-item
            :header-inset-level="1"
            expand-separator
            icon="receipt"
            label="Receipts"
            default-opened
          >

            <q-expansion-item switch-toggle-side dense-toggle label="Today" :header-inset-level="1"   :content-inset-level="2">
              <q-card>
                <q-card-section>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, eius r
                </q-card-section>
              </q-card>
            </q-expansion-item>

            <q-expansion-item switch-toggle-side dense-toggle label="Yesterday" :header-inset-level="1"   :content-inset-level="2">
              <q-card>
                <q-card-section>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, eius r
                </q-card-section>
              </q-card>
            </q-expansion-item>

          </q-expansion-item>

          <q-expansion-item :header-inset-level="1" :content-inset-level="1" expand-separator   icon="schedule" label="Postponed">
            <q-card>
              <q-card-section>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, eius
              </q-card-section>
            </q-card>
          </q-expansion-item>

        </q-expansion-item>

        <q-expansion-item :content-inset-level="0.5" expand-separator icon="mail" label="Inbox" caption="5  unread emails" default-opened>
          <q-expansion-item expand-separator :content-inset-level="0.5" icon="receipt" label="Receipts">

            <q-expansion-item label="Today" :content-inset-level="0.5">
              <q-card>
                <q-card-section>
                  Lorem ipsum dolor sit amet, consectetu eveniet doloribus ullam aliquid.
                </q-card-section>
              </q-card>
            </q-expansion-item>

            <q-expansion-item label="Yesterday" :content-inset-level="0.5">
              <q-card>
                <q-card-section>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, eius reprehenderit
                </q-card-section>
              </q-card>
            </q-expansion-item>

          </q-expansion-item>

          <q-expansion-item :content-inset-level="0.5" expand-separator icon="schedule" label="Postponed">
            <q-card>
              <q-card-section>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, eius reprehe
              </q-card-section>
            </q-card>
          </q-expansion-item>
        </q-expansion-item>
      </q-list>
    </div>
  </div> -->
  <div class="box q-py-md">
    <q-btn round color="secondary" v-if="isLogin" @click="commit = true"><q-spinner-comment
        color="accent"
        size="1.5em"
      />
    </q-btn>
    <q-btn round color="secondary" v-if="!isLogin" to="/login">
      <q-spinner-comment
        color="accent"
        size="1.5em"
      />
    </q-btn>

    <q-dialog v-model="commit" position="bottom" persistent>
      <!-- <q-card style="width: 80%"> -->
        <div class="box bg-accent" style="margin-bottom:10px;border-radius:30px">
          <q-form @submit.prevent='submitForm'>
            <div class="row q-pa-md text-center">
              <div class="col-12 col-md-6 q-my-sm q-px-sm">
                <q-input v-model="form.anonymous" :label="$t('anonymous')" rounded outlined
                :rules='rules.require' lazy-rule>
                </q-input>
              </div>
              <div class="col-12 col-md-6 q-my-sm q-px-sm">
                <q-input v-model="form.title" :label="$t('title')" rounded outlined :rules='rules.require' lazy-rule></q-input>
              </div>
              <div class="col-12 q-my-sm q-px-sm">
                <q-input v-model="form.description" :label="$t('content')"
            type="textarea" rounded outlined :rules='rules.require' lazy-rule></q-input>
              </div>
              <div class="col-12 text-center">

                <q-btn round icon="fa-solid fa-xmark" color="secondary" class="text-center q-mx-sm" v-close-popup ></q-btn>
                <q-btn round icon="fa-solid fa-check" type="sumbit" color="secondary" class="text-center q-mx-sm"  :loading='form.submitting' ></q-btn>
              </div>
            </div>
          </q-form>
  </div>
      <!-- </q-card> -->
    </q-dialog>
  </div>

  <h5 class="text-center text-secondary">
    <q-icon size="xl" class="q-mx-md" color="secondary" name="fa-solid fa-person-circle-question"></q-icon>
    Q A
  </h5>

  <div class="box">
    <div class="" v-for="row in rows" :key="row">
      <q-card class="my-qa q-my-sm" flat bordered>
        <q-card-section>
          <div class="text-overline text-secondary" style="font-size:14px" >{{row.title}}</div>
          <div class="text-h5 q-mt-sm q-mb-xs text-dark" style="font-size:16px"> {{row.description}}</div>
          <div class="text-caption text-grey" style="font-size:15px">
            {{row.reply}}
          </div>
        </q-card-section>

      </q-card>
    </div>
  </div>
  <div class="q-pa-md">

  </div>
</q-page>
</template>
<script setup>
import { reactive, ref } from 'vue'
import { apiAuth } from '../../boot/axios'
import Swal from 'sweetalert2'
import { useUserStore } from '../../stores/user'
import { storeToRefs } from 'pinia'
const user = useUserStore()
const { isLogin } = storeToRefs(user)

const rows = reactive([])
// const expanded = ref(false)
// const ex = () => {
//   for (i in rows.rowIndex) {
//     return expanded[i]
//   }
// }
const rules = reactive({
  require: [
    v => !!v || 'Required'
  ]
})
const commit = ref(false)
const form = reactive({
  anonymous: '',
  title: '',
  description: '',
  submitting: false
})

// const columns = [
//   {
//     name: 'anonymous',
//     required: true,
//     label: 'Anonymous',
//     align: 'left',
//     // flied: qa => qa.row.anonymous,
//     sortable: true
//   },
//   { name: 'title', align: 'center', label: 'Title', sortable: true, required: true, flied: qa => qa.rows.title },
//   { name: 'description', flied: qa => qa.rows.description, label: 'Description', sortable: true },
//   { name: 'reply', flied: qa => qa.row.reply, label: 'Reply', sortable: true }
// ]

const submitForm = async () => {
  form.submitting = true

  try {
    await apiAuth.post('/qa', {
      anonymous: form.anonymous,
      title: form.title,
      description: form.description
    })
    Swal.fire({
      icon: 'success',
      title: '成功',
      text: '需等待幾日回覆喔'
    })
    // form.dialog = false
  } catch (error) {
    Swal.fire({
      icon: 'question',
      title: '等稍等一下再輸入'
      // text: error.isAxiosError ? error.response.data.message : error.message
    })
  }
  form.submitting = false
}

const init = async () => {
  try {
    const { data } = await apiAuth.get('/qa/')
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
