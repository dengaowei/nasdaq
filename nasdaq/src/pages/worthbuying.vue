<template>
<div>
  <swiper class="swiper" :options="swiperOption">
    <swiper-slide v-for="(c1, index) in worthbuying" :key="index">
      <div>
        <img :src="c1.picUrl" alt />
        <img :src="c1.picUrl" alt />
      </div>
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination">
     
    </div>
    
  </swiper>
  <div @click="add">
   {{fullName}}
  </div>

</div>
  
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import { mapGetters } from 'vuex'
export default {
  name: 'Worthbuying',
  components: {
    Swiper,
    SwiperSlide
  },
  data () {
    return {
      swiperOption: {
        slidesPerView: 5,
        spaceBetween: 50,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
     
      },
       firstName:"add",
      lastName:"app"
    }
  },
  computed: {
    ...mapGetters([
      'worthbuying',
    ]),
    swiper () {
        console.log(1);
      return this.$refs.mySwiper.$swiper
    
    },
    fullName: function () {
      return this.firstName + ' ' + this.lastName
    }
  },
  methods:{
add(){
  setInterval(()=>{
  this.firstName= Date.now()
  },1000)

}
  },
  mounted () {
    this.$store.dispatch("reqworthbuying");
    console.log(this.$store);

  },

}       
</script>

<style scoped >
.swiper {
  background: url("https://m.you.163.com/topic/index/img/topic_title_bg.2373a140.png");
}
.box1 {
  width: 62.24px;
  height: 62.24px;
}
.swiper-container {
  width: 100%;
  height: 200px;
}
img {
  width: 62.24px;
  height: 62.24px;
}
</style>
<style lang="scss" scoped>
@import "./base.scss";
</style>