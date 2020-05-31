<template>
  <div>
    <van-grid :border="false" :column-num="5">
      <van-grid-item>
        <van-image v-for="(img,index) in worthbuying " :key="index" :src="img.picUrl" />
      </van-grid-item>
    </van-grid>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Worthbuying',
  data () {
    return {
    };
  },
  computed: {
    ...mapGetters([
      'worthbuying',
    ])
  },
  mounted () {
    this.$store.dispatch("reqworthbuying");
    console.log(this.$store);
  }
}
</script>

<style scoped lang=scss>
</style>