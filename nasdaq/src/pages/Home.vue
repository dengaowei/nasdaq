<template>
  <div>
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
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      categoryList: [],
      images: [
        "https://img.yzcdn.cn/vant/apple-1.jpg",
        "https://img.yzcdn.cn/vant/apple-2.jpg",
      ],
    }
  },
  mounted () {
    this.categoryList = this.$store.state.home.reqindex.categoryHotSellModule.categoryList
    console.log(this.categoryList)
  },
}
</script>

<style>
img {
  width: 100%;
  height: 200px;
}
</style>