<template>
      <!-- swiper -->
    <div class="container">
        <swiper :options="swiperOption">
            <swiper-slide v-for="(item,index) in items" :key="index">
                <figure class="image">
                    <img v-bind:src="item.imgsrc" alt="Placeholder image">
                </figure>
                <div class="content">
                     <p class="title is-4">{{item.title}}</p>
                    {{item.intro}}
                </div>
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
        <a class="button is-large" v-on:click="logindex">Comfrim</a>
    </div>
</template>

<script>
import {swiper,swiperSlide} from 'vue-awesome-swiper';

export default {
    name: "gallery",
    components:{
            swiper,
            swiperSlide
		},
    data() {
        return {
            swiperOption: {
                effect: 'coverflow', 
                grabCursor: false,
                centeredSlides: true,
                slidesPerView: 'auto',
                coverflowEffect: {
                    rotate:50,
                    stretch: 0,
                    depth: 20,
                    modifier: 1,
                    slideShadows : false,}
            },
            pagination: {
                el: '.swiper-pagination'
            },
            items: [
                {
                    id: 1,
                    title: 'Do the dishes',
                    imgsrc: require('../../static/img1.jpg'),
                    intro: "One of Repin’s most complicated paintings, the massive 6 by 11 foot Reply of the Zaporozhian Cossacks took over a decade to complete. As he worked on the painting, he carefully recorded the years at the bottom edge of the canvas. Without haste, Alexander III, Emperor of Russia, bought the painting for 30,000 roubles, which at the time was the largest sum ever paid for a Russian painting. Although Repin designed the painting to be a comical look at government, it eventually entailed the themes of liberty, fraternity and equality. The painting is now held in the State Russian Museum in St. Petersburg."
                },
                {
                    id: 2,
                    title: 'Take out the trash',
                    imgsrc: require('../../static/img2.jpg'),
                    intro:"Repin’s first widely recognized work after graduation from art school, Barge Haulers on the Volga was immediately praised by critics. Although its social message was crystal clear in its portrayal of the inhumane working conditions faced by the barge haulers, the work was bought by the Emperor’s second son, Grand Duke Vladimir Alexandrovich, and exhibited all throughout Europe as an example of Russian realist painting. The work was wildly popular, and it has been parodied throughout Russia, and used as the basis for political cartoons. It was also the inspiration for the popular Russian song “The Song of the Volga Boatmen.“"
                },
                {
                    id: 3,
                    title: 'Mow the lawnc',
                    imgsrc: require('../../static/img3.jpg'),
                    intro: "One of Repin’s most complicated paintings, the massive 6 by 11 foot Reply of the Zaporozhian Cossacks took over a decade to complete. As he worked on the painting, he carefully recorded the years at the bottom edge of the canvas. Without haste, Alexander III, Emperor of Russia, bought the painting for 30,000 roubles, which at the time was the largest sum ever paid for a Russian painting. Although Repin designed the painting to be a comical look at government, it eventually entailed the themes of liberty, fraternity and equality. The painting is now held in the State Russian Museum in St. Petersburg."
                }
            ],
        }
      },
      methods: {
            logindex: function () {
                alert(this.$children[0].swiper.activeIndex)
                 this.$router.push('/')
            }
      }
    }
</script>

<style scoped>
    body, html, .wrap, .swiper-container {
        width: 100%;
        height: auto;
    }
  .swiper-inner {
    width: 100%;
    padding-top: 50px;
    padding-bottom: 50px;
  }
  .swiper-slide {
    background-position: center;
    background-size: cover;
    padding-top: 100px;
  }
  image {
    max-width:300px;
    overflow:hidden
    }

</style>