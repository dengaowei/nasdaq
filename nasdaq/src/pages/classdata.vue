<template>
  <div>
    <template v-for="(value,index) in cateLists[0]">
      <van-grid :border="false" :column-num="3" :key="index">
        <van-grid-item v-for="(c1,index) in value" :key="index" icon="photo-o" text="文字">
          <van-image v-for="(c2,index) in c1" :key="index" :src="c2.bannerUrl" />
          {{c2}}
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
      console.log(this.index)
    }
  },
  computed: {
    ...mapState({
      cateLists: state => state.home.cateLists
    })
  },
  mounted () {
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