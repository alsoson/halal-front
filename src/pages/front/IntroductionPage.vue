<template>
<q-page id="introductionPage">
  <div class="q-pa-md">
    <q-carousel
      id="introductionPageCarousel"
      animated
      v-model="slide"
      height-sm="650px"
      navigation
      infinite
      :autoplay="autoplay"
      @mouseenter="autoplay = false"
      @mouseleave="autoplay = true"
    >
      <q-carousel-slide :name="1" img-src="../../assets/images/1.jpg" />h
      <q-carousel-slide :name="2" img-src="../../assets/images/2.jpg" />
      <q-carousel-slide :name="3" img-src="../../assets/images/3.jpg" />
      <q-carousel-slide :name="4" img-src="../../assets/images/4.jpg" />
    </q-carousel>
  </div>

  <div class="box q-py-lg">
    <q-splitter
      v-model="splitterModel"
      class="splitter"
    >

      <template v-slot:before>
        <q-tabs
          v-model="tab"
          vertical
          class="text-teal"
        >
          <q-tab name="whatIsHalal" icon="mdi-food-halal" :label="$t('whatIsHalal')" actived />
          <q-tab name="aboutHalal" icon="fa-solid fa-star-and-crescent"  :label="$t('aboutMuslim')"/>
          <q-tab name="aboutHalalTravel" icon="fa-solid fa-suitcase-rolling" :label="$t('aboutHalalTravel')" />
        </q-tabs>
      </template>

      <template v-slot:after>
        <q-tab-panels
          v-model="tab"
          animated
          swipeable
          vertical
          transition-prev="jump-up"
          transition-next="jump-up"
        >
          <q-tab-panel name="whatIsHalal" >
            <div class="text-h4 q-mb-md" >{{$t('whatIsHalal')}}</div>
            <p>{{$t('whatIsHalalP')}}</p>
            <p>{{$t('whatIsHalalP2')}}</p>
          </q-tab-panel>

          <q-tab-panel name="aboutHalal">
            <div class="text-h4 q-mb-md">{{$t('aboutMuslim')}}</div>
            <p>{{$t('aboutMuslimP')}}</p>
            <p>{{$t('aboutMuslimP2')}}</p>
          </q-tab-panel>

          <q-tab-panel name="aboutHalalTravel" >
            <div class="text-h4 q-mb-md">{{$t('aboutHalalTravel')}}</div>
            <p>{{$t('aboutHalalTravelP')}}</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.</p>
          </q-tab-panel>
        </q-tab-panels>
      </template>
    </q-splitter>
  </div>
  <div class="q-ma-md q-mt-lg">
    <div class="row text-center q-ma-md">
      <div class="col">
        <q-avatar color="primary" class="avatar-img text-white">
          <q-icon name="fa-solid fa-utensils" size="lg" class="q-mx-auto"></q-icon>
        </q-avatar>
      </div>
    </div>
  </div>
  <!-- swiper-restaurant -->
<div class="box">
  <!-- Infinite loop with slides per group -->
    <swiper
    :slidesPerView="slidePage"
    :spaceBetween="30"
    :slidesPerGroup="1"
    :loop="true"
    :loopFillGroupWithBlank="true"
    :pagination="{
      clickable: true,
    }"
    :grabCursor="true"
    :navigation="true"
    :modules="modules"
    class="mySwiper"
    style="width:90%"
  >
    <swiper-slide class=".swiper-slide">
      <q-img src="../../assets/images/introduction/restaurant/印度香料王餐廳.jpg" class="img">
      <div class="img-text">
        <!-- Taipei -->
        印度香料王餐廳
      </div>
      </q-img>
    </swiper-slide>
    <swiper-slide class=".swiper-slide">
      <q-img src="../../assets/images/introduction/restaurant/瑪莎拉印度餐廳三芝店.jpg" class="img">
      <div class="img-text">
        <!-- Taipei -->
        瑪莎拉印度餐廳三芝店
      </div>
      </q-img>
    </swiper-slide>
    <swiper-slide class=".swiper-slide">
      <q-img src="https://images.deliveryhero.io/image/fd-tw/LH/f5it-hero.jpg" class="img">
      <div class="img-text">
        <!-- Taipei -->
        安拿朵利亞土耳其餐廳
      </div>
      </q-img>
    </swiper-slide>
    <swiper-slide class=".swiper-slide">
      <q-img src="https://images.deliveryhero.io/image/fd-tw/Products/21968403.jpg?width=500" class="img">
      <div class="img-text">
        爵士印尼風小館
      </div>
      </q-img>
    </swiper-slide>
    <swiper-slide class=".swiper-slide">
      <q-img src="../../assets/images/introduction/restaurant/烏司答土耳其居家料理.jpeg" class="img">
      <div class="img-text">
        烏司答土耳其居家料理
      </div>
      </q-img>
    </swiper-slide>
    <swiper-slide class=".swiper-slide">
      <q-img src="../../assets/images/introduction/restaurant/陳莉莉印尼美食.jpg" class="img">
      <div class="img-text">
        陳莉莉印尼美食
      </div>
      </q-img>
    </swiper-slide>
    <swiper-slide class=".swiper-slide">
      <q-img src="../../assets/images/introduction/restaurant/瑪丁娜印度小館.jpeg" class="img">
      <div class="img-text">
        瑪丁娜印度小館
      </div>
      </q-img>
    </swiper-slide>
    <swiper-slide class=".swiper-slide">
      <q-img src="../../assets/images/introduction/restaurant/有春茶館.jpg" class="img">
      <div class="img-text">
        有春茶館
      </div>
      </q-img>
    </swiper-slide>
    <swiper-slide class=".swiper-slide">
      <q-img src="../../assets/images/introduction/restaurant/白灣景觀餐廳.jpg" class="img">
      <div class="img-text">
        白灣景觀餐廳
      </div>
      </q-img>
    </swiper-slide>
  </swiper>
</div>

<div class="q-ma-md q-mt-lg">
    <div class="row text-center q-ma-md">
      <div class="col">
        <q-avatar color="primary" class="avatar-img text-white">
          <q-icon name="fa-solid fa-street-view" size="lg" class="q-mx-auto"></q-icon>
        </q-avatar>
      </div>
    </div>
</div>

<!-- swiper-attraction-->
<div class="box">
  <!-- Infinite loop with slides per group -->
    <swiper
    :slidesPerView="slidePage"
    :spaceBetween="30"
    :slidesPerGroup="1"
    :loop="true"
    :loopFillGroupWithBlank="true"
    :pagination="{
      clickable: true,
    }"
    :grabCursor="true"
    :navigation="true"
    :modules="modules"
    class="mySwiper"
    style="width:90%"
  >
    <swiper-slide class=".swiper-slide">
      <q-img src="../../assets/images/introduction/attraction/福田園教育休閒農場.jpg" class="img">
      <div class="img-text">
        福田園教育休閒農場
      </div>
      </q-img>
    </swiper-slide>
    <swiper-slide class=".swiper-slide">
      <q-img src="../../assets/images/introduction/attraction/耀輝牧場.jpg" class="img">
      <div class="img-text">
        耀輝牧場
      </div>
      </q-img>
    </swiper-slide>
    <swiper-slide class=".swiper-slide">
      <q-img src="../../assets/images/introduction/attraction/卡里善之樹.jpg" class="img">
      <div class="img-text">
        卡里善之樹
      </div>
      </q-img>
    </swiper-slide>
    <swiper-slide class=".swiper-slide">
      <q-img src="../../assets/images/introduction/attraction/洺盛農場有機茶園.jpg" class="img">
      <div class="img-text">
        洺盛農場有機茶園
      </div>
      </q-img>
    </swiper-slide>
    <swiper-slide class=".swiper-slide">
      <q-img src="../../assets/images/introduction/attraction/旺萊山愛情大草原.jpg" class="img">
      <div class="img-text">
        旺萊山愛情大草原
      </div>
      </q-img>
    </swiper-slide>
    <swiper-slide class=".swiper-slide">
      <q-img src="../../assets/images/introduction/attraction/台灣鹽博物館.jpg" class="img">
      <div class="img-text">
        台灣鹽博物館
      </div>
      </q-img>
    </swiper-slide>
    <swiper-slide class=".swiper-slide">
      <q-img src="../../assets/images/introduction/attraction/壽豐農業生態館.jpg" class="img">
      <div class="img-text">
        壽豐農業生態館
      </div>
      </q-img>
    </swiper-slide>
    <swiper-slide class=".swiper-slide">
      <q-img src="../../assets/images/introduction/attraction/海漂實驗室.jpeg" class="img">
      <div class="img-text">
        海漂實驗室
      </div>
      </q-img>
    </swiper-slide>
    <swiper-slide class=".swiper-slide">
      <q-img src="../../assets/images/introduction/attraction/愛玩色創意館.jpg" class="img">
      <div class="img-text">
        愛玩色創意館
      </div>
      </q-img>
    </swiper-slide>
  </swiper>
  </div>

<div class="q-ma-md q-mt-lg">
    <div class="row text-center q-ma-md">
      <div class="col">
        <q-avatar color="primary" class="avatar-img text-white">
          <q-icon name="fa-solid fa-hotel" size="lg" class="q-mx-auto"></q-icon>
        </q-avatar>
      </div>
    </div>
</div>

<!-- swiper-accommmdation-->
<div class="box q-mb-lg" style="margin-bottom:100px">
  <!-- Infinite loop with slides per group -->
    <swiper
    :slidesPerView="slidePage"
    :spaceBetween="30"
    :slidesPerGroup="1"
    :loop="true"
    :loopFillGroupWithBlank="true"
    :pagination="{
      clickable: true,
    }"
    :grabCursor="true"
    :navigation="true"
    :modules="modules"
    class="mySwiper"
    style="width:90%"
  >
    <swiper-slide class=".swiper-slide">
      <q-img src="../../assets/images/introduction/accomodation/台北109青旅.jpg" class="img">
      <div class="img-text">
        台北109青旅
      </div>
      </q-img>
    </swiper-slide>
    <swiper-slide class=".swiper-slide">
      <q-img src="../../assets/images/introduction/accomodation/台糖台北會館.jpg" class="img">
      <div class="img-text">
        台糖台北會館
      </div>
      </q-img>
    </swiper-slide>
    <swiper-slide class=".swiper-slide">
      <q-img src="../../assets/images/introduction/accomodation/禾順欣業商旅.jpeg" class="img">
      <div class="img-text">
        禾順欣業商旅
      </div>
      </q-img>
    </swiper-slide>
    <swiper-slide class=".swiper-slide">
      <q-img src="../../assets/images/introduction/accomodation/趣淘漫旅台北.jpg" class="img">
      <div class="img-text">
        趣淘漫旅台北
      </div>
      </q-img>
    </swiper-slide>
    <swiper-slide class=".swiper-slide">
      <q-img src="../../assets/images/introduction/accomodation/卓也小屋.jpg" class="img">
      <div class="img-text">
        卓也小屋
      </div>
      </q-img>
    </swiper-slide>
    <swiper-slide class=".swiper-slide">
      <q-img src="../../assets/images/introduction/accomodation/燕子陶.jpg" class="img">
      <div class="img-text">
        燕子陶
      </div>
      </q-img>
    </swiper-slide>
    <swiper-slide class=".swiper-slide">
      <q-img src="../../assets/images/introduction/accomodation/西湖渡假村.jpg" class="img">
      <div class="img-text">
        西湖渡假村
      </div>
      </q-img>
    </swiper-slide>
    <swiper-slide class=".swiper-slide">
      <q-img src="../../assets/images/introduction/accomodation/田中文旅.jpg" class="img">
      <div class="img-text">
        田中文旅
      </div>
      </q-img>
    </swiper-slide>
    <swiper-slide class=".swiper-slide">
      <q-img src="../../assets/images/introduction/accomodation/龍雲農場.jpg" class="img">
      <div class="img-text">
        龍雲農場
      </div>
      </q-img>
    </swiper-slide>
  </swiper>
  </div>

</q-page>
</template>

<script setup>
import { ref } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation } from 'swiper'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
const slidePage = ref(3)
window.onresize = () => {
  console.log(window.innerWidth)
  if (window.innerWidth <= 700) {
    slidePage.value = 1
  } else if (window.innerWidth > 1000) {
    slidePage.value = 3
  } else {
    slidePage.value = 2
  }
}
// const swiper = new Swiper('.mySwiper', {
//   effect: 'cards',
//   grabCursor: true
// })
// console.log(swiper)
const slide = ref(1)
const autoplay = ref(true)
const tab = ref('whatIsHalal')
const splitterModel = ref(20)
const modules = [Navigation]

</script>
<style>

.swiper-slide:nth-child(1n) {
  background-color: rgb(206, 17, 17);
}

.swiper-slide:nth-child(2n) {
  background-color: rgb(0, 140, 255);
}

.swiper-slide:nth-child(3n) {
  background-color: rgb(10, 184, 111);
}

.swiper-slide:nth-child(4n) {
  background-color: rgb(211, 122, 7);
}

.swiper-slide:nth-child(5n) {
  background-color: rgb(118, 163, 12);
}

.swiper-slide:nth-child(6n) {
  background-color: rgb(180, 10, 47);
}

.swiper-slide:nth-child(7n) {
  background-color: rgb(35, 99, 19);
}

.swiper-slide:nth-child(8n) {
  background-color: rgb(0, 68, 255);
}

.swiper-slide:nth-child(9n) {
  background-color: rgb(218, 12, 218);
}

.swiper-slide:nth-child(10n) {
  background-color: rgb(54, 94, 77);
}
</style>
