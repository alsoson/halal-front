<template>
<q-page>
  <div class="q-pa-md">
  <div class="row" style="height:calc(100vh - 92px);">
    <div class="col col-12 col-sm-6">
      <q-btn flat style="width:100%;border-radius:16px;height:100%" to="/admin/member">
        <div class="flex column flex-center bg-accent q-ma-md q-pa-md" style="width:100%;border-radius:16px;height:90%">
          <q-icon name="mdi-account-supervisor-circle text-secondary" size="xl"></q-icon>
          <h6 class="q-my-md text-dark">{{$t('memberManagement')}}</h6>
          <h7 class="q-my-md text-dark">{{$t('memberToUse')}}</h7>
        </div>
      </q-btn>
    </div>
    <div class="col col-12 col-sm-6">
      <q-btn flat style="width:100%;border-radius:16px;height:100%" to="/admin/itinerary">
        <div class="flex column flex-center bg-accent q-ma-md q-pa-md" style="width:100%;border-radius:16px;height:90%">
          <q-icon name="fa-solid fa-book-atlas text-secondary" size="xl"></q-icon>
          <h6 class="q-my-md text-dark">{{$t('itineraryManagement')}}</h6>
          <h7 class="q-my-md text-dark">{{$t('itineraryToUse')}}</h7>
        </div>
      </q-btn>
    </div>
    <div class="col col-12 col-sm-6">
      <q-btn flat style="width:100%;border-radius:16px;height:100%" to="/admin/order">
        <div class="flex column flex-center bg-accent q-ma-md q-pa-md" style="width:100%;border-radius:16px;height:90%">
          <q-icon name="mdi-clipboard-file text-secondary text-secondary" size="xl"></q-icon>
          <h6 class="q-my-md text-dark">{{$t('orderManagement')}}</h6>
          <h7 class="q-my-md text-dark">{{$t('orderToUse')}}</h7>
        </div>
      </q-btn>
    </div>
    <div class="col col-12 col-sm-6">
      <q-btn flat style="width:100%;border-radius:16px;height:100%" to="/admin/message">
        <div class="flex column flex-center bg-accent q-ma-md q-pa-md" style="width:100%;border-radius:16px;height:90%">
          <q-icon name="mdi-forum  text-secondary" size="xl"></q-icon>
          <h6 class="q-my-md text-dark">{{$t('messageManagement')}}</h6>
          <h7 class="q-my-md text-dark">{{$t('messageToUse')}}</h7>
        </div>
      </q-btn>
    </div>
  </div>
  </div>
</q-page>
</template>
<script setup>

</script>
