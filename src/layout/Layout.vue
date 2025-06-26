<template>
  <PLDheader/>
  <div class="main"><router-view /></div>
  <PLDFooter/>
</template>
<script setup>
import PLDFooter from '@/components/utils/PLDFooter.vue';
import PLDheader from '@/components/utils/PLDheader.vue';



</script>
<style>
.main {
  min-height: 100vh;
}
</style>
