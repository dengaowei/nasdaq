<template>
  <div class="con">
    <van-tabs v-model="active" animated>
      <van-tab v-for="index in 4" :key="index">
        <van-image v-for="(img,index) in worthbuying " :key="index" :src="img.picUrl" class="box1" />
        <!-- {{img.mainTitle}}{{img.viceTitle}} -->
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Worthbuying',
  data () {
    return {
      active: 0
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

<style >
.con {
  background: url("https://m.you.163.com/topic/index/img/topic_title_bg.2373a140.png");
  width: 100%;
  height: 300px;
}
.box1 {
  width: 62.24px;
  height: 62.24px;
}
</style>