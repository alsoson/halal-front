<template>
    <q-layout view="hhh lpR fFf" container style="height: 100vh" class="rounded-borders">
      <q-drawer
        v-model="drawer"
        show-if-above
        :mini="miniState"
        @mouseover="miniState = false"
        @mouseout="miniState = true"
        mini-to-overlay
        :width="250"
        :breakpoint="568"
        side="left"
        id="AdminLayout"
      >
        <q-scroll-area class="fit">
          <q-list padding>
            <q-item to="/admin/member" clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="mdi-account-supervisor-circle" />
              </q-item-section>

              <q-item-section>
                {{$t('memberManagement')}}
              </q-item-section>
            </q-item>

            <q-item to="/admin/itinerary"  clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="fa-solid fa-book-atlas" />
              </q-item-section>

              <q-item-section>
                {{$t('itineraryManagement')}}
              </q-item-section>
            </q-item>

            <q-item to="/admin/order" clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="mdi-clipboard-file" />
              </q-item-section>

              <q-item-section>
                {{$t('orderManagement')}}
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="fa-solid fa-language " />
              </q-item-section>

              <q-item-section>
                <q-select  v-model="locale" :options="localeOptions" label="Change Language" emit-value map-options style="min-width: 150px;" />
              </q-item-section>
            </q-item>

            <!-- <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="fa-solid fa-language " />
              </q-item-section>
              <q-item-section>
                <q-btn-toggle
        v-model="model"
        push
        rounded
        glossy
        toggle-color="purple"
        :options= localeOptions
      >
        <template v-slot:one>
          <div class="row items-center no-wrap">
            <q-icon name="mdi-alphabetical-variant" />
          </div>
        </template>

        <template v-slot:two>
          <div class="row items-center no-wrap">

            <q-icon name="mdi-ideogram-cjk-variant" />
          </div>
        </template>

      </q-btn-toggle>
              </q-item-section>
            </q-item> -->

            <q-separator />

            <q-item clickable v-ripple  to="/" >
              <q-item-section avatar>
                <q-icon name="fa-solid fa-house-chimney" />
              </q-item-section>

              <q-item-section>
                {{$t('home')}}
              </q-item-section>
            </q-item>
          </q-list>
        </q-scroll-area>
      </q-drawer>

      <q-footer>
        <q-toolbar id="AdminToolbar" class="bg-third text-white" style="height:60px;">
          <q-btn flat @click="drawer = !drawer" dense >
            <q-img src="../assets/LOGO.png" width="50px"></q-img>
            <q-toolbar-title>Hello ! Hallo</q-toolbar-title>
          </q-btn>
          <q-space />
        <q-btn flat stretch icon="mdi-account-arrow-right" @click="confirm = true"></q-btn>
          <q-dialog v-model="confirm" persistent>
              <q-card>
                <q-card-section class="row items-center">
                  <q-avatar icon="mdi-account-arrow-right" color="primary" text-color="white" />
                  <span class="q-ml-sm text-center q-ml-md">{{$t('logOut')}} ?</span>
                </q-card-section>

                <q-card-actions align="right">
                  <q-btn flat color="primary" icon="mdi-check-circle" @click="logout"/>
                  <q-btn flat color="primary" icon="mdi-close-circle" v-close-popup />
                </q-card-actions>
              </q-card>
            </q-dialog>

        </q-toolbar>
      </q-footer>

      <q-page-container>
          <router-view></router-view>
      </q-page-container>
    </q-layout>
</template>

<script setup>
import { ref } from 'vue'
// import { storeToRefs } from 'pinia'
import { useQuasar } from 'quasar'
import { useI18n } from 'vue-i18n'
// const { isLogin } = storeToRefs(user)'
// const user = useUserStore()
// const { logout } = user
// import i18n from '@/lang'
// const _this = this
import { useUserStore } from '../stores/user'
const user = useUserStore()
const { logout } = user
// const $q = useQuasar()
const drawer = ref(false)
const miniState = ref(true)
const confirm = ref(false)

const localeOptions = [
  { value: 'en-US', label: 'English' },
  { value: 'zh-TW', label: '繁體中文' }
]
// const localeOptions = [
//   { value: 'en-US', slot: 'one' },
//   { value: 'zh-TW', slot: 'two' }
// ]

const { locale } = useI18n({ useScope: 'global' })
locale.value = useQuasar().lang.getLocale()

// const alerts = [
//   { color: 'accent', icon: 'mdi-account-arrow-right' }
// ]

// message: this.$t('logOut')

</script>
