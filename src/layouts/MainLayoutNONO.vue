<template>
  <q-layout>
    <q-header style="position:fixed">
    <q-toolbar class="bg-primary text-white shadow-2" style="height:60px;">
      <q-img src="../assets/LOGO.svg" height="50" max-width="50" style="max-width:50px;"/>

      <q-btn to="/" stretch no-wrap flat label="Hello ! Halal" ></q-btn>

      <q-space />

      <q-btn v-if='isLogin && isAdmin' to='/admin' stretch flat icon="fa-solid fa-users-between-lines" :label="$t('adminManagement')"/>
      <q-btn-dropdown stretch flat dropdown-icon="fa-solid fa-hand-point-up" :label="$t('introduction')">
        <q-list>
          <q-item clickable to="/introduction" v-close-popup tabindex="0">
            <q-item-section avatar>
              <q-avatar icon="mdi-food-halal" color="secondary" text-color="white" />
            </q-item-section>
            <q-item-section>
              <q-item-label>{{$t('whatIsHalal')}}</q-item-label>
            </q-item-section>
          </q-item>
          <!-- 連不到 reataurant -->
          <q-item clickable to="/introduction"  v-close-popup tabindex="0">
            <q-item-section avatar>
              <q-avatar icon="fa-solid fa-utensils" color="secondary" text-color="white" />
            </q-item-section>
            <q-item-section>
              <q-item-label  style="color:#3C4755">{{$t('halalRestaurant')}}</q-item-label>
            </q-item-section>
          </q-item>
          <q-item clickable to="/introduction"  v-close-popup tabindex="0">
            <q-item-section avatar>
              <q-avatar icon="fa-solid fa-street-view" color="secondary" text-color="white" />
            </q-item-section>
            <q-item-section>
              <q-item-label style="color:#3C4755">{{$t('halalAttraction')}}</q-item-label>
            </q-item-section>
          </q-item>
          <q-item clickable to="/introduction"  v-close-popup tabindex="0">
            <q-item-section avatar>
              <q-avatar icon="fa-solid fa-hotel" color="secondary" text-color="white" />
            </q-item-section>
            <q-item-section>
              <q-item-label style="color:#3C4755">{{$t('halalAccommodation')}}</q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </q-btn-dropdown>
      <!-- <q-separator dark vertical /> -->
      <q-btn to="/itinerary" stretch flat :label="$t('itinerary')" />
      <!-- <q-separator dark vertical /> -->
      <q-btn  to="/connectus" stretch flat :label="$t('connectUs')"/>
      <!-- <q-separator dark vertical /> -->
      <q-btn v-if='!isLogin' to="/login" stretch flat icon="fa-solid fa-circle-user"/>
      <q-btn v-if='isLogin' to="/cart" stretch flat icon="mdi-cart-variant" />
      <!-- <q-separator dark vertical /> -->
      <q-btn v-if='isLogin' to="/collection" stretch flat icon="mdi-heart-circle" />
      <q-btn-dropdown v-if='isLogin' stretch flat no-icon-animation dropdown-icon="mdi-account-check">
        <q-list>
          <q-item to="/progress" clickable v-close-popup tabindex="0">
            <q-item-section avatar>
              <q-avatar icon="mdi-progress-check" color="secondary" text-color="white" />
            </q-item-section>
            <q-item-section>
              <q-item-label style="color:#3C4755">{{$t('orderProgress')}}</q-item-label>
            </q-item-section>
          </q-item>
          <q-item to="/history" clickable v-close-popup tabindex="0">
            <q-item-section avatar>
              <q-avatar icon="fa-solid fa-clock-rotate-left" color="secondary" text-color="white" />
            </q-item-section>
            <q-item-section>
              <q-item-label style="color:#3C4755">{{$t('orderHistory')}}</q-item-label>
            </q-item-section>
          </q-item>
          <q-item  to="/member" clickable v-close-popup tabindex="0">
            <q-item-section avatar>
              <q-avatar icon="fa-solid fa-address-card" color="secondary" text-color="white" />
            </q-item-section>
            <q-item-section>
              <q-item-label style="color:#3C4755">{{$t('memberProfile')}}</q-item-label>
            </q-item-section>
          </q-item>
          <q-item  @click='logout' clickable v-close-popup tabindex="0">
            <q-item-section avatar>
              <q-avatar icon="fa-solid fa-right-from-bracket" color="secondary" text-color="white" />
            </q-item-section>
            <q-item-section>
              <q-item-label @click='logout' style="color:#3C4755">{{$t('logOut')}}</q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </q-btn-dropdown>
      <q-select  v-model="locale" :options="localeOptions" label="Change Language" emit-value map-options
        style="min-width: 150px;" />

      <!-- <div class="q-pa-md">
        <div class="q-gutter-sm">
          <q-radio v-model="shape" checked-icon="task_alt" unchecked-icon="panorama_fish_eye" val="line" label="Line" />
          <q-radio v-model="shape" checked-icon="task_alt" unchecked-icon="panorama_fish_eye" val="rectangle"
            label="Rectangle" />
        </div>
      </div> -->
    </q-toolbar>
    </q-header>

    <!-- <q-page-container> -->
      <router-view></router-view>
    <!-- </q-page-container> -->
  </q-layout>
</template>
<script setup>
// import EssentialLink from 'components/EssentialLink.vue'
import { storeToRefs } from 'pinia'
import { useQuasar } from 'quasar'
import { useI18n } from 'vue-i18n'
// const { isLogin } = storeToRefs(user)
import { useUserStore } from '../stores/user'
const user = useUserStore()
const { logout } = user
const { isLogin, isAdmin } = storeToRefs(user)

// const linksList = [
//   {
//     title: 'Docs',
//     caption: 'quasar.dev',
//     icon: 'school',
//     link: 'https://quasar.dev'
//   },
//   {
//     title: 'Github',
//     caption: 'github.com/quasarframework',
//     icon: 'code',
//     link: 'https://github.com/quasarframework'
//   },
//   {
//     title: 'Discord Chat Channel',
//     caption: 'chat.quasar.dev',
//     icon: 'chat',
//     link: 'https://chat.quasar.dev'
//   },
//   {
//     title: 'Forum',
//     caption: 'forum.quasar.dev',
//     icon: 'record_voice_over',
//     link: 'https://forum.quasar.dev'
//   },
//   {
//     title: 'Twitter',
//     caption: '@quasarframework',
//     icon: 'rss_feed',
//     link: 'https://twitter.quasar.dev'
//   },
//   {
//     title: 'Facebook',
//     caption: '@QuasarFramework',
//     icon: 'public',
//     link: 'https://facebook.quasar.dev'
//   },
//   {
//     title: 'Quasar Awesome',
//     caption: 'Community Quasar projects',
//     icon: 'favorite',
//     link: 'https://awesome.quasar.dev'
//   }
// ]

// const scroll = (id) => {
//   document.getElementById(id).scrollIntoView()
//   console.log(document.getElementById(id))
// }
const localeOptions = [
  { value: 'en-US', label: 'English' },
  { value: 'zh-TW', label: '繁體中文' }
]

const { locale } = useI18n({ useScope: 'global' })
// 這段把預設語言設為偵測到電腦的語言
locale.value = useQuasar().lang.getLocale()

// const leftDrawerOpen = ref(false)
// const essentialLinks = linksList
// const toggleLeftDrawer = () => {
//   leftDrawerOpen.value = !leftDrawerOpen.value
// }

// export default ({
// name: 'MainLayout'

//   // components: {
//   //   EssentialLink
// }

//   setup() {
//     const leftDrawerOpen = ref(false)

//     return {
//       essentialLinks: linksList,
//       leftDrawerOpen,
//       toggleLeftDrawer() {
//         leftDrawerOpen.value = !leftDrawerOpen.value
//       }
//     }
//   }
// })
// 沒有用到版面

</script>
