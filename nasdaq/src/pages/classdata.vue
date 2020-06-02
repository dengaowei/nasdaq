<template>
  <div>
    <template>
      <van-grid :border="false" :column-num="3">
        <van-grid-item v-for="(image, index) in cateLists[index].categoryList" :key="index">
          <van-image :src="image.bannerUrl" :key="index" />
          {{image.frontName}}
        </van-grid-item>
      </van-grid>
    </template>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: 'Classdata',
  props: ['index'],
  methods: {
    click () {

    },
    data () {
      return {

      }
    },
  },
  computed: {
    ...mapState({
      cateLists: state => state.home.cateLists
    })
  },
  mounted () {

  },
  created () {

  }
}

</script>

<style>
.box {
  float: right;
}
.van-grid .van-hairline--top {
  width: 70% !important;
}
</style>