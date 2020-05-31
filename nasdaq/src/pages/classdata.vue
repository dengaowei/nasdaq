<template>
  <div>
    <template>
      <van-grid :border="false" :column-num="3">
        <van-grid-item>
          <van-image />
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