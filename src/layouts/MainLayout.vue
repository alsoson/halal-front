<template>
    <q-layout view="hHh lpr lff" container style="height: 100vh" class="rounded-borders">
      <q-header >
        <q-toolbar class="bg-primary text-white" style="height:60px;">
          <q-btn flat @click="drawer = !drawer" dense >
            <q-img src="../assets/LOGO.png" width="50px"></q-img>
            <q-toolbar-title style="font-family: 'Hobo Regular', cursive;text-transform:capitalize;">Hello ! Halal <p style="font-size:14px" class="small-none"> - Intinerary By Halal</p></q-toolbar-title>
            <!-- font-family: 'DynaPuff', cursive; -->
          </q-btn>
          <q-space />

          <q-btn v-if='!isLogin' to="/login" stretch flat icon="fa-solid fa-circle-user"/>
          <q-btn v-if='isLogin' to="/cart" stretch flat icon="mdi-cart-variant" >
        <q-badge color="red" rounded v-if='cart > 0'/>
      </q-btn>
      <!-- <q-separator dark vertical /> -->
      <q-btn v-if='isLogin' to="/collection" stretch flat icon="mdi-heart-circle" />
      <q-btn-dropdown v-if='isLogin' stretch flat no-icon-animation dropdown-icon="mdi-account-check">
        <q-list>
          <!-- <q-item to="/progress" clickable v-close-popup tabindex="0">
            <q-item-section avatar>
              <q-avatar icon="mdi-progress-check" color="secondary" text-color="white" />
            </q-item-section>
            <q-item-section>
              <q-item-label style="color:#3C4755">{{$t('orderProgress')}}</q-item-label>
            </q-item-section>
          </q-item> -->
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
        </q-toolbar>
      </q-header>

      <q-drawer
        v-model="drawer"
        show-if-above
        :mini="miniState"
        @mouseover="miniState = false"
        @mouseout="miniState = true"
        mini-to-overlay
        :width="250"
        :breakpoint="568"
        id="MainLayoutDrawer"
      >
        <q-scroll-area class="fit">
          <q-list padding>
            <q-item to="/introduction" clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="mdi-food-halal" />
              </q-item-section>

              <q-item-section>
                {{$t('whatIsHalal')}}
              </q-item-section>
            </q-item>

            <q-item to="/restaurant" clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="fa-solid fa-utensils" />
              </q-item-section>

              <q-item-section>
                {{$t('halalRestaurant')}}
              </q-item-section>
            </q-item>

            <q-item to="/attraction"  clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="fa-solid fa-street-view" />
              </q-item-section>

              <q-item-section>
                {{$t('halalAttraction')}}
              </q-item-section>
            </q-item>

            <q-item to="/accommodation"  clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="fa-solid fa-hotel" />
              </q-item-section>

              <q-item-section>
                {{$t('halalAccommodation')}}
              </q-item-section>
            </q-item>

            <q-item to="/itinerary"  clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="fa-solid fa-book-atlas" />
              </q-item-section>

              <q-item-section>
                {{$t('itinerary')}}
              </q-item-section>
            </q-item>

            <q-item to="/connectus"  clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="fa-solid fa-phone" />
              </q-item-section>

              <q-item-section>
                {{$t('connectUs')}}
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="fa-solid fa-language " />
              </q-item-section>
              <!-- btn toggle -->
              <q-item-section>
                <!-- <q-select  v-model="locale" :options="localeOptions" label="Change Language" emit-value map-options style="min-width: 150px;" /> -->
                <q-option-group dark v-model="locale" :options="localeOptions" color="white" left-label/>
              </q-item-section>
            </q-item>

            <q-separator  v-if='isLogin && isAdmin' dark/>

            <q-item clickable v-ripple v-if='isLogin && isAdmin' to="/admin" >
              <q-item-section avatar>
                <q-icon name="fa-solid fa-people-carry-box" />
              </q-item-section>

              <q-item-section>
                {{$t('adminManagement')}}
              </q-item-section>
            </q-item>
          </q-list>
        </q-scroll-area>
      </q-drawer>

      <q-page-container>
          <router-view></router-view>
      </q-page-container>
    </q-layout>
</template>

<script setup>
import { ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useQuasar } from 'quasar'
import { useI18n } from 'vue-i18n'
// const { isLogin } = storeToRefs(user)
import { useUserStore } from '../stores/user'
const user = useUserStore()
const { logout } = user
const { isLogin, isAdmin, cart } = storeToRefs(user)

const drawer = ref(false)
const miniState = ref(true)

const localeOptions = [
  { value: 'en-US', label: 'English' },
  { value: 'zh-TW', label: '繁體中文' }
]

const { locale } = useI18n({ useScope: 'global' })
// console.log(useQuasar().lang.getLocale())
locale.value = useQuasar().lang.getLocale()
</script>
