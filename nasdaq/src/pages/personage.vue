<template>
  <div>personage</div>
</template>

<script>

import{pubgmobile}from "../api/index"
export default {
  name: 'Personage',
  mounted(){
   
    console.log( pubgmobile());
  }
}
</script>

<style scoped lang=scss>
</style>