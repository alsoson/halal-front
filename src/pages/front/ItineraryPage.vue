<template>
  <q-page>
    <div id="IntineraryCarosuel" class="flex-center">
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
          132
          <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
        </swiper-slide>
        <swiper-slide>
          <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
        </swiper-slide>
        <swiper-slide>
          <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
        </swiper-slide>
        <swiper-slide>
          <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
        </swiper-slide>
        <swiper-slide>
          <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
        </swiper-slide>
        <swiper-slide>
          <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
        </swiper-slide>
        <swiper-slide>
          <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
        </swiper-slide>
        <swiper-slide>
          <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
        </swiper-slide>
        <swiper-slide>
          <img src="https://swiperjs.com/demos/images/nature-9.jpg"/>
        </swiper-slide>
      </swiper>
    </div>

    <div id="Intinerary">
      <div class="box" >
        <div class="row"> <q-icon name="mdi-magnify" size="50px" color="dark"></q-icon> </div>
        <div class="row"></div>
      </div>
    </div>
    <div id="Intinernary-product">
      <div class="box">
        <div class="row">
          <div class="col col-12 col-md-6 col-lg-3 q-pa-sm" v-for='product in products' :key='product._id'>
          <ProductCard :product='product'></ProductCard>
          </div>
        </div>
      </div>
    </div>

    <div id="IntineraryMessage" class="q-py-lg" style="overflow:hidden">
      <!-- <div class="row box">
        <div class="col col-12 col-md-6 col-lg-4">
          <div class="flex row justify-center q-my-md q-my-sm-none">
            <div class="text-box">
              <p class="q-ma-none p q-mx-sm-none" style="
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden">原來台灣清真隨處可見，下次一定再來!</p>
            </div>
            <q-avatar style="" src="" color="dark" text-color="primary" icon="fa-solid fa-face-smile"></q-avatar>
          </div>
        </div>

        <div class="col col-12 col-md-6 col-lg-4">
          <div class="flex row row-reverse  justify-center q-my-md">
            <div class="text-box" >
              <p class="q-ma-none p" style="width: 100%;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden">行程安排流暢，沒有太多的購物站強迫消費，行程費用也不高，cp值很高</p>
            </div>
            <q-avatar src="" color="dark" text-color="primary" icon="fa-solid fa-face-smile"></q-avatar>
          </div>
        </div>

        <div class="col col-12 col-md-6 col-lg-4">
          <div class="flex row row-reverse  justify-center q-my-md">
            <div class="text-box">
              <p class="q-ma-none p" style="width: 100%;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden">1234</p>
            </div>
            <q-avatar src="" color="dark" text-color="primary" icon="fa-solid fa-face-smile"></q-avatar>
          </div>
        </div>

        <div class="col col-12 col-md-6 col-lg-4 col-text-RWD">
          <div class="flex row row-reverse  justify-center q-my-md">
            <div class="text-box">
              <p class="q-ma-none p" style="width: 100%;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden">1111</p>
            </div>
            <q-avatar src="" color="dark" text-color="primary" icon="fa-solid fa-face-smile"></q-avatar>
          </div>
        </div>

        <div class="col col-12 col-md-6 col-lg-4 gt-sm block ">
          <div class="flex row row-reverse  justify-center q-my-md">
            <div class="text-box" >
              <p class="q-ma-none p" style="width: 100%;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden">2222</p>
            </div>
            <q-avatar src="" color="dark" text-color="primary" icon="fa-solid fa-face-smile"></q-avatar>
          </div>
        </div>

        <div class="col col-12 col-md-6 col-lg-4 gt-sm">
          <div class="flex row row-reverse  justify-center q-my-md">
            <div class="text-box">
              <p class="q-ma-none p" style="width: 100%;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden">3333</p>
            </div>
            <q-avatar src="" color="dark" text-color="primary" icon="fa-solid fa-face-smile"></q-avatar>
          </div>
        </div>

        <div class="col col-12 col-md-6 col-lg-4 lt-sm block">
          <div class="flex row row-reverse  justify-center q-my-md">
            <div class="text-box">
              <p class="q-ma-none p" style="width: 100%;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden">4444</p>
            </div>
            <q-avatar src="" color="dark" text-color="primary" icon="fa-solid fa-face-smile"></q-avatar>
          </div>
        </div>

        <div class="col col-12 col-md-6 col-lg-4 lt-sm block">
          <div class="flex row row-reverse  justify-center q-my-md">
            <div class="text-box" >
              <p class="q-ma-none p" style="width: 100%;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden">5555</p>
            </div>
            <q-avatar src="" color="dark" text-color="primary" icon="fa-solid fa-face-smile"></q-avatar>
          </div>
        </div>

        <div class="col col-12 col-md-6 col-lg-4 lt-sm block">
          <div class="flex row row-reverse  justify-center q-my-md">
            <div class="text-box">
              <p class="q-ma-none p" style="width: 100%;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden">6666</p>
            </div>
            <q-avatar src="" color="dark" text-color="primary" icon="fa-solid fa-face-smile"></q-avatar>
          </div>
        </div>

        <div class="col col-12 col-md-6 col-lg-4 lt-sm block">
          <div class="flex row row-reverse  justify-center q-my-md">
            <div class="text-box">
              <p class="q-ma-none p" style="width: 100%;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden">7777</p>
            </div>
            <q-avatar src="" color="dark" text-color="primary" icon="fa-solid fa-face-smile"></q-avatar>
          </div>
        </div>

        <div class="col col-12 col-md-6 col-lg-4">
          <div class="flex row row-reverse  justify-center q-my-md">
            <div class="text-box" >
              <p class="q-ma-none p" style="width: 100%;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden">8888</p>
            </div>
            <q-avatar src="" color="dark" text-color="primary" icon="fa-solid fa-face-smile"></q-avatar>
          </div>
        </div>

        <div class="col col-12 col-md-6 col-lg-4">
          <div class="flex row row-reverse  justify-center q-my-md">
            <div class="text-box">
              <p class="q-ma-none p" style="width: 100%;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden">9999</p>
            </div>
            <q-avatar src="" color="dark" text-color="primary" icon="fa-solid fa-face-smile"></q-avatar>
          </div>
        </div>

      </div> -->

      <div class="box">
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
      icon: 'error',
      title: '失敗',
      text: '伺服器錯誤'
    })
  }
}
init()
</script>
