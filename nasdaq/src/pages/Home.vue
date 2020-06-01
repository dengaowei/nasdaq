<template>
  <div class="swiper">
    <van-tabs>
      <van-tab v-for="(c1, index) in categoryList" :key="index" :title="c1.categoryName"></van-tab>
    </van-tabs>
    <van-swipe :autoplay="3000">
      <van-swipe-item v-for="(image, index) in categoryList" :key="index">
        <img v-lazy="image.showPicUrl" />
      </van-swipe-item>
    </van-swipe>
    <van-grid :border="false" :column-num="5">
      <van-grid-item v-for="(image, index) in categoryList" :key="index">
        <van-image :src="image.showPicUrl" />
      </van-grid-item>
    </van-grid>
    <div>
      <div class="recommend">
        <img src="https://yanxuan.nosdn.127.net/5d07f2917f7831cd868fc0a0cdf4b9b5.jpeg" alt />
      </div>
      <div class="recommend2">
        <img src="https://yanxuan.nosdn.127.net/a526ae177b5302d3143d88520d330604.png" alt />
        <img src="https://yanxuan.nosdn.127.net/b601a0fdb7e0ae4ee2affd12182b6971.png" alt />
      </div>
    </div>
    <div>
      <div class="text">——新人专享礼——</div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Home',
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters([
      'categoryList',
    ])
  },
  mounted () {

  },
}
</script>

<style>
.van-swipe-item > img {
  width: 100%;
  height: 200px;
}
.recommend {
  width: 100%;
}
.recommend > img {
  width: 100%;
}
.recommend2 {
  width: 100%;
  display: flex;
}
.recommend2 > img {
  width: 50%;
}
.text {
  display: flex;
  justify-content: center;
}
</style>