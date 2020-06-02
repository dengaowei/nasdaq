<template>
  <div>
    <div class="box">
      <Classdata :index="index" @change="onChange"></Classdata>
    </div>
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
import Classdata from "../pages/classdata.vue";
import { mapState } from 'vuex'
export default {
  name: 'Classify',
  components: {
    Classdata
  },
  data () {
    return {
      activeKey: 0,
      index: 0
    };
  },
  computed: {
    ...mapState({
      reqcateNavDatas: state => state.home.reqcateNavDatas,
    })
  },
  methods: {
    onChange (index) {
      this.index = index
    },
  },
  mounted () {
    console.log(this.$store)
    this.$store.dispatch("cateLists");
    this.$store.dispatch("reqcateNavDatas");

  }
}
</script>

<style>
.box {
  width: 290px;
}
</style>