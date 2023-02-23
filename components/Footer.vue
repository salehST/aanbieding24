<script>
export default {
mounted() {
// go to top start*//
    
        const showOnPx = 100;
        const backToTopButton = document.querySelector(".back-to-top");

const pageProgressBar = document.querySelector(".progress-bar");

const scrollContainer = () => {
  return document.documentElement || document.body;
};
//backToTopButton.addEventListener("click",this.goToTop);



document.addEventListener("scroll", () => {
  console.log("Scroll Height: ", scrollContainer().scrollHeight);
  console.log("Client Height: ", scrollContainer().clientHeight);

  const scrolledPercentage =
    (scrollContainer().scrollTop /
      (scrollContainer().scrollHeight - scrollContainer().clientHeight)) *
    100;

  pageProgressBar.style.width = `${scrolledPercentage}%`;

  if (scrollContainer().scrollTop > showOnPx) {
    backToTopButton.classList.remove("hide");
  } else {
    backToTopButton.classList.add("hide");
  }
});
    
},
methods:{
   goToTop() {
    document.body.scrollIntoView({
        behavior: "smooth"
    });
},
}
};
</script>
<template>
    <!-- footer start -->
    <footer class="p-4 md:p-12 bg-white sm:p-6">
        <div class="container mx-auto max-w-screen-xl">
            <div class="md:flex md:flex-row md:justify-between flex-none">
                <div class="mb-6 md:mb-0 md:basis-1/3 basis-full">
                    <a href="#" class="flex items-center">
                        <img src="@/assets/img/full-logo.svg" class="mr-3  w-40 h-9" alt="FlowBite Logo" />
                    </a>
                    <p class="sm:space-y-6 py-2 sm:py-8 text-xs font-normal leading-5 text-[#6C7A93] sm:pr-9">
                        Aanbieding24 helps thousands consumers per day at the finding the best offers and the lowest prices. Completely independent and free to use. Our vision is to get to the starting point.
                    </p>
                </div>
                <div
                    class="mb-6 md:mb-0 grid grid-cols-2 gap-2 sm:justify-between sm:flex sm:basis-1/2 md:basis-2/3 sm:flex-wrap basis-full">
                    <div class="mb-6 md:mb-0">
                        <h2 class="mb-6 text-base font-semibold text-[#2B313B] ">Popular Offers</h2>
                        <ul class="text-xs font-normal leading-5 text-[#6C7A93]">
                            <li class="mb-4">
                                <a href="#" class="">iPhone</a>
                            </li>
                            <li class="mb-4">
                                <a href="#" class="">iPad Pro</a>
                            </li>
                            <li class="mb-4">
                                <a href="#" class="">Macbook</a>
                            </li>
                            <li class="mb-4">
                                <a href="#" class="">iMac Studio</a>
                            </li>
                        </ul>
                    </div>
                    <div class="mb-6 md:mb-0">
                        <h2 class="mb-6 text-base font-semibold text-[#2B313B] ">Hot Categories</h2>
                        <ul class="text-xs font-normal leading-5 text-[#6C7A93]">
                            <li class="mb-4">
                                <a href="#" class=" ">Computer & Laptop</a>
                            </li>
                            <li class="mb-4">
                                <a href="#" class="">Sim</a>
                            </li>
                            <li class="mb-4">
                                <a href="#" class="">Home & Decoration</a>
                            </li>
                            <li class="mb-4">
                                <a href="#" class="">Accessories</a>
                            </li>
                        </ul>
                    </div>
                    <div class="mb-6 md:mb-0">
                        <h2 class="mb-6 text-base font-semibold text-[#2B313B] ">About Us</h2>
                        <ul class="text-xs font-normal leading-5 text-[#6C7A93]">
                            <li class="mb-4">
                                <a href="#" class="">About Us</a>
                            </li>
                            <li class="mb-4">
                                <a href="#" class="">Contact Us</a>
                            </li>
                            <li class="mb-4">
                                <a href="#" class="">Daily Offers</a>
                            </li>
                            <li class="mb-4">
                                <a href="#" class="">Customer Review</a>
                            </li>
                        </ul>
                    </div>
                    <div class="mb-6 md:mb-0">
                        <h2 class="mb-6 text-base font-semibold text-[#2B313B] ">Community</h2>
                        <ul class="text-xs font-normal leading-5 text-[#6C7A93]">
                            <li class="mb-4 flex">
                                
                                <span class="flex relative">
                                    <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span><img class=" h-5 w-5" src="@/assets/img/social/facebook.svg" alt=""> </span><a href="#" class=" ml-2">Facebook</a>
                              
                            </li>
                            <li class="mb-4  flex">
                                <img class="blob infinity rounded-full h-5 w-5" src="@/assets/img/social/twitter.svg" alt=""> <a href="#" class=" ml-2">Twitter</a>
                            </li>
                            <li class="mb-4  flex">
                                <span class="flex relative">
                                    <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span><img class="h-5 w-5" src="@/assets/img/social/instagram.svg" alt=""></span> <a href="#"
                                    class=" ml-2">Instagram</a>
                            </li>
                            <li class="mb-4  flex">
                                <img class="blob infinity rounded-full h-5 w-5" src="@/assets/img/social/youtube.svg" alt=""> <a href="#" class=" ml-2">YouTube</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <hr class="my-6 border-gray-200 sm:mx-auto lg:my-8" />
            <div class="sm:flex sm:items-center sm:justify-between">
                <span class="font-semibold text-[#2B313B] sm:text-center">© 2023 aanbieding24.nl All rights reserved
                </span>
            </div>
        </div>
    </footer>
    <!-- footer- end -->
    <!-- go to top -->
    <div class="progress-bar" />
<button class="back-to-top hide" @click="goToTop" >
  <svg xmlns="http://www.w3.org/2000/svg" class="back-to-top-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 11l5-5m0 0l5 5m-5-5v12" />
  </svg>
</button>
<div class="progress-bar" />
 <!-- go to top end -->
</template>