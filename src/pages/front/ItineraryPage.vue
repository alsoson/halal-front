<template>
  <q-page>
    <div id="Intinerary">
    <div class="row text-center">
      <h5 class="text-center q-mx-auto q-my-md q-mt-lg text-secondary" style="padding:0">
        <q-icon name="fa-solid fa-book-atlas" color="secondary"  size="lg" class="q-mx-auto"></q-icon>
      {{$t('itinerary')}}
      </h5>
    </div>

      <!-- <div class="box" >
        <div class="row"> <q-icon name="mdi-magnify" size="50px" color="dark"></q-icon> </div>
        <div class="row"></div>
      </div> -->
    </div>
    <div id="Intinernary-product">
      <div class="box ">
        <div class="row">
          <div class="col col-12 col-md-6 col-lg-3 q-pa-sm" v-for='product in products' :key='product._id'>
          <ProductCard :product='product'></ProductCard>
          </div>
        </div>
      </div>
    </div>
    <!-- <h5 class="text-center text-secondary" style="font-size:35px">
  <q-icon name="mdi-fire" size="100px" color="secondary"></q-icon>
  {{$t('hot')}}

</h5> -->
    <div id="IntineraryCarosuel" class="flex-center q-mt-lg">
    <div class="row text-center">
      <h5 class="text-center q-mx-auto q-my-md q-mt-lg text-secondary" style="padding:0">
        <q-icon name="mdi-fire" color="secondary"  size="lg" class="q-mx-auto"></q-icon>
      {{$t('hot')}}
      </h5>
    </div>
      <swiper
        :effect="'coverflow'"
        :grabCursor="true"
        :centeredSlides="true"
        :slidesPerView="'auto'"
        :coverflowEffect="{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }"
        :navigation="true"
        :pagination="true"
        :modules="modules"
        class="mySwiper"
      >
        <swiper-slide>

          <img src="../../assets/images/itinerary/阿里山.jpg" />
        </swiper-slide>
        <swiper-slide>
          <img src="../../assets/images/itinerary/西子灣.jpg" />
        </swiper-slide>
        <swiper-slide>
          <img src="../../assets/images/itinerary/清境農場.jpg" />
        </swiper-slide>
        <swiper-slide>
          <img src="../../assets/images/itinerary/平溪.jpg" />
        </swiper-slide>
        <swiper-slide>
          <img src="../../assets/images/itinerary/九份.jpg" />
        </swiper-slide>
        <swiper-slide>
          <img src="../../assets/images/itinerary/十分瀑布.jpg" />
        </swiper-slide>
        <swiper-slide>
          <img src="../../assets/images/itinerary/大港橋.jpeg" />
        </swiper-slide>
        <swiper-slide>
          <img src="../../assets/images/itinerary/大稻埕.jpeg" />
        </swiper-slide>
        <swiper-slide>
          <img src="../../assets/images/itinerary/安平古堡.jpg"/>
        </swiper-slide>
      </swiper>
    </div>

    <div id="IntineraryMessage" class="q-py-lg" style="overflow:hidden">

      <div class="box">
        <div class="row text-center">
      <h5 class="text-center q-mx-auto q-my-md q-mt-lg text-dark" style="padding:0">
        <q-icon name="mdi-forum" color="dark"  size="lg" class="q-mx-auto"></q-icon>
      {{$t('message')}}
      </h5>
    </div>
        <q-intersection
        transition="flip-right"
        class="example-item"
        >
          <q-item class="q-my-sm" style="width:100%">
            <q-item-section avatar>
              <q-avatar color="dark">
              <q-spinner-hearts color="secondary" size="2rem"/>
            </q-avatar>
            </q-item-section>

            <q-item-section>
              <q-item-label class="text-cut">{{$t('message1')}}</q-item-label>
            </q-item-section>

            <q-item-section side>
              <q-icon name="chat_bubble" color="green" />
            </q-item-section>
          </q-item>

        <q-item class="q-my-sm" style="width:100%">
          <q-item-section avatar>
            <q-avatar color="dark">
              <q-spinner-hearts color="secondary" size="2rem"/>
            </q-avatar>
          </q-item-section>

          <q-item-section>
            <q-item-label class="text-cut">{{$t('message2')}}</q-item-label>
          </q-item-section>

          <q-item-section side>
            <q-icon name="chat_bubble" color="green" />
          </q-item-section>
        </q-item>

        <q-item class="q-my-sm" style="width:100%">
          <q-item-section avatar>
            <q-avatar color="dark">
              <q-spinner-hearts color="secondary" size="2rem"/>
            </q-avatar>
          </q-item-section>

          <q-item-section>
            <q-item-label class="text-cut">{{$t('message3')}}</q-item-label>
          </q-item-section>

          <q-item-section side>
            <q-icon name="chat_bubble" color="green" />
          </q-item-section>
        </q-item>

        <q-item class="q-my-sm" style="width:100%">
          <q-item-section avatar>
            <q-avatar color="dark">
              <q-spinner-hearts color="secondary" size="2rem"/>
            </q-avatar>
          </q-item-section>
          <q-item-section>
            <q-item-label class="text-cut">{{$t('message4')}}</q-item-label>
          </q-item-section>

          <q-item-section side>
            <q-icon name="chat_bubble" color="green" />
          </q-item-section>
        </q-item>

        <q-item class="q-my-sm" style="width:100%">
          <q-item-section avatar>
            <q-avatar color="dark">
              <q-spinner-hearts color="secondary" size="2rem"/>
            </q-avatar>
          </q-item-section>
          <q-item-section>
            <q-item-label class="text-cut">{{$t('message5')}}</q-item-label>
            <!-- <q-item-label class="text-cut" caption lines="1">some@email.com</q-item-label> -->
          </q-item-section>

          <q-item-section side>
            <q-icon name="chat_bubble" color="green" />
          </q-item-section>
        </q-item>

      </q-intersection>

      <!-- <div class="box">
        <div class="flex row justify-center q-my-md">

          <p style="width: 80%;
        font-size: 20px;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden">1234666666666666666666666666666666666666666666666666666666666666666</p>
          <q-avatar src="" color="dark" text-color="primary" icon="fa-solid fa-face-smile"></q-avatar>
            <div class="text-box">
        </div>
      </div> -->
    </div>
    </div>
  </q-page>
</template>
<script setup>
import { reactive } from 'vue'
import Swal from 'sweetalert2'
import { api } from '../../boot/axios'
import ProductCard from '../../components/AdminItineraryCard.vue'
import { Swiper, SwiperSlide } from 'swiper/vue'

// Import Swiper styles
import 'swiper/css'

import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'

// import required modules
import { EffectCoverflow, Navigation } from 'swiper'

const modules = [EffectCoverflow, Navigation]

const products = reactive([])

const init = async () => {
  try {
    const { data } = await api.get('/products')
    products.push(...data.result)
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
