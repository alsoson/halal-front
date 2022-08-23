<template>
  <q-page>
    <!-- <pre>{{items}}</pre> -->
  <div class="row text-center">
        <q-icon name="fa-solid fa-street-view" size="lg" class="q-mx-auto q-my-md"></q-icon>
      </div>
    <div class="q-pa-md flex justify-center">
<!-- <pre>{{ items }}</pre> -->
<!-- <pre>{{ arr }}</pre> -->
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

          <!-- <q-item-section side>
            <q-icon name="chat_bubble" color="green" />
          </q-item-section> -->
        </q-item>
      </q-intersection>
    </div>
  </div>
  <!-- <q-card v-for="item in items" :key="item.name">
    {{item.name}}
  </q-card> -->
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
      icon: 'error',
      title: '失敗',
      text: error
    })
  }
}
init()

</script>
