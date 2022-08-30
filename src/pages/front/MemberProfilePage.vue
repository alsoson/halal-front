<template>
<q-page id="memberProfile" class="flex flex-center">
  <div>
  <div class="box">
      <div class="row text-center">
      <h5 class="text-center q-mx-auto q-my-md q-mt-lg text-secondary" style="padding:0">
        <q-icon name="mdi-account-box-multiple" color="secondary"  size="lg" class="q-mx-auto"></q-icon>
      {{$t('memberProfile')}}
      </h5>
    </div>
  </div>
    <div class="row q-mt-none q-mt-lg-xl">
      <q-card flat bordered v-if="openflag" class="q-mx-auto bg-accent" >
        <div class="row memberCard q-pa-lg ">
          <div class="col col-12 text-center">
            <q-avatar color="secondary" class="text-white">
              <q-icon v-if="userinfo.image == 0" name="fa-solid fa-address-book" size="xl"></q-icon>
              <img v-else :src="userinfo.image" alt="">
            </q-avatar>
          </div>
              <div class="col col-12 col-md-6 q-pa-xs">
                <q-input :label="$t('account')" readonly v-model="userinfo.account"></q-input>
              </div>
              <div class="col col-12 col-md-6 q-pa-xs">
                <q-input label="Email" readonly  v-model="userinfo.email"></q-input>
              </div>
              <div class="col col-12 q-pa-xs">
                <q-input :label="$t('name')" readonly v-model="userinfo.name"></q-input>
              </div>
              <div class="col col-12 col-md-6 q-pa-xs">
                <q-input :label="$t('smartphone')" readonly v-model="userinfo. smartphone"></q-input>
              </div>
              <div class="col col-12 col-md-6 q-pa-xs">
                <q-input :label="$t('telephone')" readonly v-model="userinfo.telephone"></q-input>
              </div>
              <div class="col-12">
                <div class="q-my-xxl q-mx-auto text-center q-pa-md">
                  <q-btn round icon="fa-solid fa-pen-nib" class="q-py-sm q-px-xxl text-subtitle2" unelevated color="secondary" @click='goEdit()' />
                </div>
              </div>
            </div>
          </q-card>
          <q-card flat bordered v-else class="q-mx-auto bg-accent">
            <q-form @submit.prevent='editForm()'>
            <div class="row memberCard q-pa-lg">

              <div class="col col-12 col-md-6 q-pa-xs">
                <q-input :label="$t('account')" readonly v-model="userinfo.account"></q-input>
              </div>
              <div class="col col-12 col-md-6 q-pa-xs">
                <q-input label="Email" readonly  v-model="userinfo.email"></q-input>
              </div>
              <div class="col col-12 q-pa-xs">
                <q-input :label="$t('name')" v-model="editinfo.name" lazy-rules :rules='rules.name'></q-input>
              </div>
              <div class="col col-12 col-md-6 q-pa-xs">
                <q-input :label="$t('smartphone')" v-model="editinfo.smartphone" lazy-rules :rules='rules.smartphone'></q-input>
              </div>
              <div class="col col-12 col-md-6 q-pa-xs">
                <q-input :label="$t('telephone')" v-model="editinfo.telephone" lazy-rules :rules='rules.telephone'></q-input>
              </div>
              <div class="col col-12 q-pa-xs">
                <q-file type="file" accept='image/*' :hint="$t('imageHint')" :label="$t('imageUpload')" v-model="editinfo.image"></q-file>
              </div>
              <div class="col-12">
                <div class="q-my-xxl q-mx-auto text-center q-pa-md">
                  <q-btn round icon="fa-solid fa-xmark" class="q-py-sm q-px-xxl text-subtitle2 q-mx-xs" unelevated color="secondary" @click='changeFlag()' />
                  <q-btn round icon="fa-solid fa-check" class="q-py-sm q-px-xxl q-mx-xs text-subtitle2" unelevated color="secondary" type="submit"/>
                </div>
              </div>
            </div>
            </q-form>
          </q-card>
      </div>
      </div>
  </q-page>
</template>

<script setup>
import { reactive, ref } from 'vue'
import Swal from 'sweetalert2'
import { apiAuth } from '../../boot/axios'

// const users = reactive([])
// const
const openflag = ref(true)

const changeFlag = () => {
  if (openflag.value) {
    openflag.value = false
  } else {
    openflag.value = true
  }
}

const rules = reactive({
  name: [
    v => !!v || 'Required'
  ],
  smartphone: [
    v => !!v || 'Required',
    v => /^[0-9]+$/.test(v) || 'Wrong'
  ],
  telephone: [
    v => !!v || 'Required',
    v => /^[0-9]+$/.test(v) || 'Wrong'
  ]
})

const userinfo = reactive({
  _id: '',
  image: '',
  account: '',
  email: '',
  name: '',
  smartphone: '',
  telephone: ''
})

const editinfo = reactive({
  name: '',
  image: '',
  smartphone: '',
  telephone: ''
})

// const read = readonly(true)

const goEdit = () => {
  openflag.value = false
  editinfo.name = userinfo.name
  editinfo.smartphone = userinfo.smartphone
  editinfo.telephone = userinfo.telephone
  editinfo.image = userinfo.image
}
// console.log(users)
// 抓到 data 有資料 ，users push 了卻沒有
const init = async () => {
  try {
    const { data } = await apiAuth.get('/users')
    console.log(data.result.image)
    userinfo._id = data.result._id
    userinfo.account = data.result.account
    userinfo.email = data.result.email
    userinfo.name = data.result.name
    userinfo.image = data.result.image
    userinfo.smartphone = data.result.smartphone
    userinfo.telephone = data.result.telephone
  } catch (error) {
    // console.log(error)
    Swal.fire({
      icon: 'error',
      title: '失敗',
      text: error.isAxiosError ? error.response.data.message : error.message
    })
  }
}

const editForm = async () => {
  try {
    const fd = new FormData()

    for (const key in editinfo) {
      fd.append(key, editinfo[key])
      // console.log(editinfo[key])
    }
    const object = {}
    fd.forEach((value, key) => { object[key] = JSON.stringify(value) })
    console.log(JSON.stringify(object))
    await apiAuth.patch('/users', fd)
    // editinfo.email = data.result.email
    // editinfo.name = data.result.name
    // editinfo.sex = data.result.sex
    // editinfo.birthday = data.result.birthday
    // editinfo.address = data.result.address
    // editinfo.phone = data.result.phone
    init()
    Swal.fire({
      icon: 'success',
      title: 'Edit Success'
      // text: '編輯成功'
    })
    openflag.value = true
  } catch (error) {
    Swal.fire({
      icon: 'question',
      title: 'Please try it again'
      // text: error.isAxiosError ? error.response.data.message : error.message
    })
  }
}
init()
</script>
