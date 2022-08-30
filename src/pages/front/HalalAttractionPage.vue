<template>
  <q-page>
    <h5 class="text-center q-mx-auto q-my-md q-mt-lg text-secondary" style="padding:0">
      <q-icon name="fa-solid fa-street-view" color="secondary"  size="lg" class="q-mx-auto"></q-icon>
      {{$t('halalAttraction')}}
    </h5>
  <!-- <div class="row text-center">
    <div class="q-pa-md flex justify-center">
    <div style="width:90%">
      <q-intersection
        v-for="index in items"
        :key="index"
        transition="fade"
        class="example-item"
      >
        <q-item clickable v-ripple>
          <q-item-section avatar>
            <q-avatar color="primary" text-color="white">
              <q-icon name="fa-solid fa-street-view"></q-icon>
            </q-avatar>
          </q-item-section>

          <q-item-section class="flex column">
            <q-item-label>{{ index.name }}</q-item-label>
            <q-item-label caption lines="1">{{ index.address }}</q-item-label>
          </q-item-section>
          <q-item-section>
            <q-item-label>{{ index.type }}</q-item-label>
          </q-item-section>
          <q-item-section>
            <q-item-label>{{ index.district }}</q-item-label>
          </q-item-section>
          <q-item-section>
            <q-item-label>{{ index.phone }}</q-item-label>
          </q-item-section>

        </q-item>
      </q-intersection>
    </div>
  </div>
  </div> -->
  <div class="box halalData" >
    <q-infinite-scroll @load="onLoad" :offset="250">
      <div v-for="(index) in items" :key="index.name" class="caption" >
        <div class="row q-my-md hover" >
          <div class="col col-1 q-my-auto text-center">
            <q-avatar icon="fa-solid fa-street-view" size="md" color="primary" text-color="white">
            </q-avatar>
          </div>
          <div class="col col-11">
            <div class="row">
              <div class="col col-9 col-sm-6 q-my-auto">
                <div class="title-wrap">
                {{index.name}}
                  <p class="q-ma-none">{{index.address}}</p>
                </div>
              </div>
              <div class="col col-3 col-sm-6">
                <div class="row">
                  <div class="col col-12 col-sm-4 q-my-auto">
                    <div class="word-small q-my-auto" style="text-align:right">
                    {{index.type}}
                    </div>
                  </div>
                  <div class="col col-12 col-sm-3 q-my-auto">
                    <div class="word-small q-my-auto">
                    {{index.district}}
                    </div>
                  </div>
                  <div class="col col-12 col-sm-4 text-right q-my-auto">
                    <div class="word-small q-my-auto">
                    {{index.phone}}
                    </div>
                  </div>
                  <div class="col col-0 col-sm-1 text-right q-my-auto">

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <template v-slot:loading>
        <div class="row justify-center q-my-md">
          <q-spinner-dots color="primary" size="40px" />
        </div>
      </template>
    </q-infinite-scroll>
  </div>

  </q-page>
</template>
<script setup>
import { reactive } from 'vue'
import Swal from 'sweetalert2'
import { apiAuth } from '../../boot/axios'

const items = reactive([])
const init = async () => {
  try {
    const { data } = await apiAuth.get('/data/attraction')
    items.push(...data.result)
  } catch (error) {
    Swal.fire({
      icon: 'warning',
      title: 'Please try it again',
      text: 'Please wait a minute and refresh'
    })
  }
}
init()

</script>
