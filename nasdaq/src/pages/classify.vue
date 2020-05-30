<template>
  <div>
    <van-sidebar v-model="activeKey" @change="onChange">
      <van-sidebar-item
        v-for="(image, index) in reqcateNavDatas.categoryL1List"
        :key="index"
        :title="image.name"
      />
    </van-sidebar>
  </div>
</template>

<script>
import { Notify } from 'vant';
import { mapState } from 'vuex'
export default {
  name: 'Classify',
  data () {
    return {
      activeKey: 0,
    };
  },
  computed: {
    ...mapState({
      reqcateNavDatas: state => state.home.reqcateNavDatas
    })
  },
  methods: {
    onChange (index, a) {
      Notify({ type: 'primary', message: a });
    },
  },
  mounted () {
    console.log(this.categoryL1List)
    this.$store.dispatch("reqcateNavDatas");
  }
}
</script>

<style scoped lang=scss>
</style>