<template>
  <q-page id="loginPage" class="text-center flex-center flex" style="min-height:0px;height: calc( 100vh - 60px )">
      <q-card style="width:50%" class="q-ma-auto border-radius-50px">
        <q-tab-panels v-model="tab" animated>
          <q-tab-panel name="login">
            <div class="text-h4 text-center q-py-lg" >{{$t('loginV')}}</div>

              <q-form
              @submit.prevent='login'
              class="q-gutter-md q-px-lg q-px-sm-none"
              >
                <q-input
                  rounded outlined
                  v-model="form.account"
                  :label="$t('account')"
                  lazy-rules
                  :rules='rules.account'
                  :dense="dense"
                  bottom-slots
                  class="text-secondary"
                >
                  <template v-slot:prepend>
                    <q-icon name="mdi-account" class="text-secondary"/>
                  </template>
                  <template v-slot:append>
                    <q-icon name="mdi-close-circle-outline" @click="form.account= ''" class="cursor-pointer text-secondary" />
                  </template>
                </q-input>

                <q-input
                  rounded outlined
                  v-model="form.password"
                  :type="isPwd ? 'password' : 'text'"
                  :label="$t('password')"
                  lazy-rules
                  :rules='rules.password'
                  :dense="dense"
                  bottom-slots
                >
                  <template v-slot:prepend>
                    <q-icon name="mdi-lock" class="text-secondary"/>
                  </template>
                  <template v-slot:append>
                    <q-icon
            :name="isPwd ? 'visibility_off' : 'visibility'"
            class="cursor-pointer"
            @click="isPwd = !isPwd"
          />
                    <q-icon name="mdi-close-circle-outline" @click="form.password= ''" class="cursor-pointer text-secondary" />
                  </template>
                </q-input>
                <div>
                  <q-btn :label="$t('login')" type="submit" color="primary"/>
                </div>
              </q-form>

          </q-tab-panel>

          <q-tab-panel name="register">
            <div class="text-h4 text-center q-py-lg">{{$t('register')}}</div>
            <q-form
              @submit.prevent="register"
              class="q-gutter-md q-px-lg q-px-sm-none"
              >

                <q-input
                  rounded outlined
                  v-model="formRegister.account"
                  :label="$t('account')"
                  lazy-rules
                  :rules='rules.account'
                  :dense="dense"
                  bottom-slots
                  class="text-secondary"
                >
                  <template v-slot:prepend>
                    <q-icon name="mdi-account" class="text-secondary"/>
                  </template>
                  <template v-slot:append>
                    <q-icon name="mdi-close-circle-outline" @click="formRegister.account= ''" class="cursor-pointer text-secondary" />
                  </template>
                </q-input>

                <q-input
                  rounded outlined
                  v-model="formRegister.password"
                  :type="isPwd ? 'password' : 'text'"
                  :label="$t('password')"
                  lazy-rules
                  :rules='rules.password'
                  :dense="dense"
                  bottom-slots
                >
                  <template v-slot:prepend>
                    <q-icon name="mdi-lock" class="text-secondary"/>
                  </template>
                  <template v-slot:append>
                    <q-icon
            :name="isPwd ? 'visibility_off' : 'visibility'"
            class="cursor-pointer"
            @click="isPwd = !isPwd"
          />
                    <q-icon name="mdi-close-circle-outline" @click="formRegister.password= ''" class="cursor-pointer text-secondary" />
                  </template>
                </q-input>
                <q-input
                  rounded outlined
                  v-model="formRegister.name"
                  :label="$t('yourName')"
                  lazy-rules
                  :rules="[ val => val && val.length > 0 || 'Required']"
                  :dense="dense"
                  bottom-slots
                >
                  <template v-slot:prepend>
                    <q-icon name="fa-solid fa-signature" class="text-secondary"/>
                  </template>
                  <template v-slot:append>
                    <q-icon name="mdi-close-circle-outline" @click="formRegister.name= ''" class="cursor-pointer text-secondary" />
                  </template>
                </q-input>

                <q-input
                  rounded outlined
                  v-model="formRegister.email"
                  label='Email'
                  lazy-rules
                  :rules="rules.email"
                  :dense="dense"
                  bottom-slots
                  type="email"
                >
                <template v-slot:error>Please use maximum 55555characters.</template>
                  <template v-slot:prepend>
                    <q-icon name="mdi-email" class="text-secondary"/>
                  </template>
                  <template v-slot:append>
                    <q-icon name="mdi-close-circle-outline" @click="formRegister.email= ''" class="cursor-pointer text-secondary" />
                  </template>
                </q-input>

                <div>
                  <q-btn :label="$t('register')"  type="submit" color="primary"/>
                </div>
              </q-form>
          </q-tab-panel>

        </q-tab-panels>

        <q-separator />

        <q-tabs
          v-model="tab"
          dense
          class="bg-secondary"
          align="justify"
          narrow-indicator
        >
          <q-tab name="login" style="color:white;" :label="$t('login')" />
          <q-tab name="register" style="color:white;" :label="$t('register')"  />
        </q-tabs>
      </q-card>
  </q-page>
</template>

<script setup>
import { defineComponent, ref, reactive } from 'vue'
// import { email, required } from '@vuelidate/validators'
// import { useVuelidate } from '@vuelidate/core'
// import { useUserStore } from '../stores/user'
import { api } from '../../boot/axios'
import { useRouter } from 'vue-router'
import Swal from 'sweetalert2'
import { useUserStore } from '../../stores/user'

const user = useUserStore()
const router = useRouter()

const tab = ref('login')
const dense = ref(false)
const isPwd = ref(true)

const form = reactive({
  account: '',
  password: ''
})

const formRegister = reactive({
  account: '',
  password: '',
  name: '',
  email: ''
})

const rules = reactive({
  account: [
    v => !!v || 'Required',
    v => (v.length >= 4 && v.length <= 20) || 'Wrong',
    v => /^[a-zA-Z0-9]+$/.test(v) || 'Wrong'
  ],
  password: [
    v => !!v || 'Required',
    v => (v.length >= 4 && v.length <= 20) || 'Wrong',
    v => /^[a-zA-Z0-9]+$/.test(v) || 'Wrong'
  ],
  email: [
    v => !!v || 'Required',
    v => /^\w+((-\w+)|(\.\w+))*@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/.test(v) || 'Wrong'
  ]
})

const login = () => {
  user.login(form)
}

// register
const register = async () => {
  // if (!valid.value) return
  // loading.value = true
  try {
    await api.post('/users', formRegister)
    await Swal.fire({
      icon: 'success',
      title: '成功',
      text: '註冊成功'
    })
    router.push('/')
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: '失敗',
      text: (error.isAxiosError && error.response.data) ? error.response.data.message : '發生錯誤'
    })
    console.log(error)
  }
  // loading.value = false
}

defineComponent({
  name: 'LoginPage'
})

</script>
