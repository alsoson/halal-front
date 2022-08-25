<template>

  <router-view></router-view>
  <!-- <router-view /> -->

</template>

<script setup>
import { useUserStore } from '../src/stores/user'

useUserStore().getUser()
</script>
