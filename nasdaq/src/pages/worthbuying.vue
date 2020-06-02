<template>
  <swiper class="swiper" :options="swiperOption">
    <swiper-slide v-for="(c1, index) in worthbuying" :key="index">
      <div>
        <img :src="c1.picUrl" alt />
        <img :src="c1.picUrl" alt />
      </div>
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
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
        // breakpoints: {
        //   1024: {
        //     slidesPerView: 4,
        //     spaceBetween: 40
        //   },
        //   768: {
        //     slidesPerView: 3,
        //     spaceBetween: 30
        //   },
        //   640: {
        //     slidesPerView: 2,
        //     spaceBetween: 20
        //   },
        //   320: {
        //     slidesPerView: 1,
        //     spaceBetween: 10
        //   }
        // }
      }
    }
  },
  computed: {
    ...mapGetters([
      'worthbuying',
    ]),
    swiper () {
      return this.$refs.mySwiper.$swiper
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