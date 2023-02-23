<script>
  // import Swiper core and required modules
  import { Navigation, A11y, Autoplay } from 'swiper';

  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue';

  // Import Swiper styles
  import 'swiper/css';
  import 'swiper/css/navigation';
  import 'swiper/css/autoplay';
  // Import Swiper styles
  export default {
    components: {
      Swiper,
      SwiperSlide,
    },
    setup() {
      const onSwiper = (swiper) => {
        console.log(swiper);
      };
      const onSlideChange = () => {
        console.log('slide change');
      };
      return {
        onSwiper,
        onSlideChange,
        modules: [Navigation, A11y, Autoplay],
      };
    },
  };

</script> 
<style>
.swiper-button-next:after, .swiper-button-prev:after {
    font-size: 14px;
    color: #2B313B;
    font-weight: bold;
    transition: 250ms;
}

.swiper-button-next, .swiper-button-prev {
    background: #fff;
    border-radius: 50%;
    height: 40px;
    width: 40px;
    transition: 250ms;
}

.swiper-button-next:hover:after, .swiper-button-prev:hover:after {
    color: #fff;
}

.swiper-button-next:hover, .swiper-button-prev:hover {
    background: #112954;
}
.swiper-button-next {
    right: 0;
}

.swiper-button-prev {
    left: 0;
}
.spotlight-offer-area .swiper-button-prev {
    display: none;
}

.spotlight-offer-area  .swiper-button-next {
    top: 25px;
    background: #112954;
    border: 1px solid #112954;
}

.spotlight-offer-area .swiper-button-next::after {
    color: #fff;
}

.spotlight-offer-area .swiper-button-next:hover {
    background: transparent;
}

.spotlight-offer-area .swiper-button-next:hover:after {
    color: #112954;
}
</style>
<template>
    <div class="spotlight-offer-area">
        <div class="grid gap-2 grid-cols-1 md:grid-cols-2 md:gap-4">
            <div class="single-offer-box relative h-[400px] rounded-md p-[30px]">
                <div class="product-offer-detail flex items-center justify-between mb-2">
                    <span class="font-normal text-sm text-[#F22222]">Summer sale up to 50%</span><span class="w-fit bg-[#EBF1FF] text-[#0052FE] text-xs font-bold p-2 rounded ">Computer & Laptop</span>
                </div>
                <div class="grid grid-cols-3">
                    <div class="offer-details col-span-2">
                        <h5 class="text-[#2B313B] text-[40px] font-black mb-4 leading-none">Apple Bundle New Series</h5>
                        <p class="text-[#6C7A93] text-sm font-normal mb-4 w-[245px]">Real offers with high discounts up to 30% discount on Apple Product</p>
                        <div class="button-area w-48">
                            <button class="btn-translate-z bg-[#112954] w-full opacity-100 hover:opacity-90 transition text-white flex text-sm font-bold text-center justify-center items-center rounded-md py-[10px] px-2"><span class="flex items-center"> Grab the Deal </span></button>
                        </div>
                    </div>
                </div>
                <div class="offer-img">
                    <img src="@/assets/img/offers/computer.png" alt="image">
                </div>
            </div>
            <div class="grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-4">
                <div class="grid grid-cols-1 gap-2 md:gap-4">
                    <div class="single-offer-box h-[192px] rounded-md p-4">
                        <swiper     

    :modules="modules"
    :slides-per-view="1"
    :space-between="0"    
    
    navigation
    :loop="true"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
  >
  <swiper-slide>
    <div>
    <h6 class="flex items-center text-[#2B313B] font-bold text-base mb-1">Logitech Keyboard</h6>
                        <p class="tag-line text-[#6C7A93] text-xs font-normal mb-5">Real offers with high discounts</p>
                        <div class="product-img flex items-center justify-center">
                            <img src="@/assets/img/offers/keyboard.png" alt="image">
                        </div>
                    </div>
</swiper-slide>
<swiper-slide>
    <div>
        <h6 class="flex items-center text-[#2B313B] font-bold text-base mb-1">Logitech Mouse MX</h6>
                        <p class="tag-line text-[#6C7A93] text-xs font-normal mb-5">Real offers with high discounts</p>
                        <div class="product-img flex items-center justify-center">
                            <img src="@/assets/img/offers/mouse.png" alt="image">
                        </div>
    </div>
</swiper-slide>
  </swiper>

                       
                    </div>
                    <div class="single-offer-box h-[192px] rounded-md p-4">
                        <swiper     

:modules="modules"
:slides-per-view="1"
:space-between="0"

navigation
:loop="true"
@swiper="onSwiper"
@slideChange="onSlideChange"
>
<swiper-slide>
    <div>
        <h6 class="flex items-center text-[#2B313B] font-bold text-base mb-1">Logitech Mouse MX</h6>
                        <p class="tag-line text-[#6C7A93] text-xs font-normal mb-5">Real offers with high discounts</p>
                        <div class="product-img flex items-center justify-center">
                            <img src="@/assets/img/offers/mouse.png" alt="image">
                        </div>
    </div>
</swiper-slide>
<swiper-slide>
    <div>
    <h6 class="flex items-center text-[#2B313B] font-bold text-base mb-1">Logitech Keyboard</h6>
                        <p class="tag-line text-[#6C7A93] text-xs font-normal mb-5">Real offers with high discounts</p>
                        <div class="product-img flex items-center justify-center">
                            <img src="@/assets/img/offers/keyboard.png" alt="image">
                        </div>
                    </div>
</swiper-slide>
</swiper>

                    </div>
                </div>
                
                <div class="single-offer-box rounded-md p-4">
                    <h5 class="text-[#2B313B] font-black text-2xl italic leading-tight">Nike Shoes</h5>
                    <h6 class="text-[#2B313B] font-normal text-2xl italic leading-none mb-4">Limited Edition</h6>
                    <p class="text-[#6C7A93] text-sm font-normal mb-2 w-auto lg:w-[245px]">Real offers with high discounts</p>
                    <img src="@/assets/img/offers/shoe.png" alt="">
                    <div class="button-area mt-4">
                            <button class="btn-translate-z bg-[#112954] w-full opacity-100 hover:opacity-90 transition text-white flex text-sm font-bold text-center justify-center items-center rounded-md py-[10px] px-2"><span class="flex items-center"> Grab the Deal </span></button>
                        </div>
                </div>
            </div>
        </div>
    </div>
</template>