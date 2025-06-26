<template>
  <PLDheader/>
  <div class="tutu"><router-view /></div>
  <PLDFooter/>
</template>
<script setup>
import PLDFooter from '@/components/utils/PLDFooter.vue';
import PLDheader from '@/components/utils/PLDheader.vue';



</script>
<style>
.tutu {
  min-height: 100vh;
}
</style>
