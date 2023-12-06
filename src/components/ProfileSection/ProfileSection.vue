<template>
  <div class="header-wrapper">
    <kinesis-container
        :active="isParallaxActive"
        :class="parallaxClasses"
    >
      <div class="profile-container">
        <kinesis-element
            class="parallax-element img-container__blue-part"
            :strength="10"
            type="depth"
        >
          <img class="img__blue-part" src="../../assets/blue_part.png">
        </kinesis-element>
        <kinesis-element
            class="parallax-element img-container__pink-circle"
            :strength="35"
            :originX="100"
        >
          <img class="img-element" src="../../assets/pink_circle.png">
        </kinesis-element>
        <kinesis-element
            class="parallax-element photo-container"
            :strength="0">
          <div class="photo-scale-box">
            <div class="photo image-part"></div>
            <div :class="eyebrowClasses"></div>
          </div>
        </kinesis-element>
        <img class="parallax-element pink-line" src="../../assets/line1.png">
      </div>
      <div class="contact-container">
        <h2 class="name">Alyona Kolgasheva</h2>
        <p class="work-position">Frontend Developer</p>
        <ul class="contacts-list">
          <li class="contacts-item">
            <img class="contacts-icon" src="../../assets/icons/group3.png">
            <a class="contacts-text contacts-link" href="tel:+380500817552">+380500817552</a>
          </li>
          <li class="contacts-item">
            <img class="contacts-icon" src="../../assets/icons/group4.png">
            <a class="contacts-text contacts-link" href="mailto:kolgasheva065@gmail.com">kolgasheva065@gmail.com</a>
          </li>
          <li class="contacts-item">
            <img class="contacts-icon" src="../../assets/icons/group5.png">
            <span class="contacts-text">Kyiv, Ukraine</span>
          </li>
          <li class="contacts-item">
            <span class="contacts-icon contacts-icon__in">in</span>
            <span class="contacts-text"></span>
          </li>
        </ul>
      </div>
      <kinesis-element
          class="parallax-element img-container__rose-circle"
          :strength="-30"
          :originX="80"
          :originY="80"
      >
        <img class="img-element" src="../../assets/pink_circle_2.png">
      </kinesis-element>
      <kinesis-element
          class="parallax-element img-container__points"
          :strength="5"
          type="depth">
        <svg class="svg-points" height="182" viewBox="0 0 72 182" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
              d="M71.5366 270.998L44.5566 262.34L44.4535 234.005L27.882 256.989L0.902018 248.331L17.6403 271.194L1.06872 294.178L27.985 285.324L44.7233 308.187L44.6202 279.852L71.5366 270.998Z"
              fill="#305585"/>
          <path
              d="M51.3149 210.071C48.0012 210.083 45.3247 212.779 45.3368 216.093C45.3488 219.407 48.0448 222.083 51.3585 222.071C54.6722 222.059 57.3487 219.363 57.3367 216.049C57.3246 212.736 54.6286 210.059 51.3149 210.071Z"
              fill="#305585"/>
          <path
              d="M21.3224 212.18C18.0087 212.192 15.3322 214.889 15.3442 218.202C15.3563 221.516 18.0523 224.192 21.366 224.18C24.6797 224.168 27.3562 221.472 27.3441 218.159C27.3321 214.845 24.6361 212.168 21.3224 212.18Z"
              fill="#305585"/>
          <path
              d="M51.2058 180.072C47.8921 180.084 45.2156 182.78 45.2277 186.093C45.2397 189.407 47.9358 192.084 51.2494 192.071C54.5631 192.059 57.2396 189.363 57.2276 186.05C57.2155 182.736 54.5195 180.059 51.2058 180.072Z"
              fill="#305585"/>
          <path
              d="M21.2133 182.181C17.8996 182.193 15.2231 184.889 15.2351 188.202C15.2472 191.516 17.9432 194.193 21.2569 194.181C24.5706 194.168 27.2471 191.472 27.2351 188.159C27.223 184.845 24.527 182.169 21.2133 182.181Z"
              fill="#305585"/>
          <path
              d="M51.0967 150.072C47.783 150.084 45.1065 152.78 45.1186 156.094C45.1306 159.407 47.8267 162.084 51.1404 162.072C54.4541 162.06 57.1306 159.364 57.1185 156.05C57.1065 152.736 54.4104 150.06 51.0967 150.072Z"
              fill="#305585"/>
          <path
              d="M21.1042 152.181C17.7905 152.193 15.114 154.889 15.1261 158.203C15.1381 161.516 17.8341 164.193 21.1478 164.181C24.4615 164.169 27.138 161.473 27.126 158.159C27.1139 154.845 24.4179 152.169 21.1042 152.181Z"
              fill="#305585"/>
          <path
              d="M50.9876 120.072C47.674 120.084 44.9975 122.78 45.0095 126.094C45.0216 129.407 47.7176 132.084 51.0313 132.072C54.345 132.06 57.0215 129.364 57.0094 126.05C56.9974 122.736 54.3013 120.06 50.9876 120.072Z"
              fill="#305585"/>
          <path
              d="M20.9951 122.181C17.6814 122.193 15.0049 124.889 15.017 128.203C15.029 131.516 17.7251 134.193 21.0388 134.181C24.3524 134.169 27.0289 131.473 27.0169 128.159C27.0048 124.845 24.3088 122.169 20.9951 122.181Z"
              fill="#305585"/>
          <path
              d="M50.8786 90.0721C47.5649 90.0842 44.8884 92.7802 44.9004 96.0939C44.9125 99.4076 47.6085 102.084 50.9222 102.072C54.2359 102.06 56.9124 99.364 56.9003 96.0503C56.8883 92.7366 54.1923 90.0601 50.8786 90.0721Z"
              fill="#305585"/>
          <path
              d="M20.886 92.1812C17.5723 92.1933 14.8958 94.8893 14.9079 98.203C14.9199 101.517 17.616 104.193 20.9297 104.181C24.2434 104.169 26.9199 101.473 26.9078 98.1593C26.8958 94.8457 24.1997 92.1692 20.886 92.1812Z"
              fill="#305585"/>
          <path
              d="M50.7695 60.0723C47.4558 60.0844 44.7793 62.7804 44.7913 66.0941C44.8034 69.4078 47.4994 72.0843 50.8131 72.0723C54.1268 72.0602 56.8033 69.3642 56.7913 66.0505C56.7792 62.7368 54.0832 60.0603 50.7695 60.0723Z"
              fill="#305585"/>
          <path
              d="M20.7769 62.1814C17.4633 62.1935 14.7868 64.8895 14.7988 68.2032C14.8109 71.5169 17.5069 74.1934 20.8206 74.1813C24.1343 74.1693 26.8108 71.4732 26.7987 68.1595C26.7867 64.8459 24.0906 62.1694 20.7769 62.1814Z"
              fill="#305585"/>
          <path
              d="M50.6604 30.0725C47.3467 30.0846 44.6702 32.7806 44.6823 36.0943C44.6943 39.408 47.3903 42.0845 50.704 42.0724C54.0177 42.0604 56.6942 39.3644 56.6822 36.0507C56.6701 32.737 53.9741 30.0605 50.6604 30.0725Z"
              fill="#305585"/>
          <path
              d="M20.6679 32.1816C17.3542 32.1936 14.6777 34.8897 14.6897 38.2034C14.7018 41.5171 17.3978 44.1936 20.7115 44.1815C24.0252 44.1695 26.7017 41.4734 26.6896 38.1597C26.6776 34.846 23.9816 32.1695 20.6679 32.1816Z"
              fill="#305585"/>
          <path
              d="M50.5513 0.072712C47.2376 0.0847611 44.5611 2.78079 44.5732 6.09449C44.5852 9.40819 47.2813 12.0847 50.5949 12.0726C53.9086 12.0606 56.5851 9.36455 56.5731 6.05086C56.561 2.73716 53.865 0.0606629 50.5513 0.072712Z"
              fill="#305585"/>
          <path
              d="M20.5588 2.18178C17.2451 2.19383 14.5686 4.88986 14.5806 8.20356C14.5927 11.5173 17.2887 14.1938 20.6024 14.1817C23.9161 14.1697 26.5926 11.4736 26.5806 8.15993C26.5685 4.84623 23.8725 2.16973 20.5588 2.18178Z"
              fill="#305585"/>
        </svg>
      </kinesis-element>
      <img class="parallax-element line" src="../../assets/line1.png">
      <kinesis-element
          class="parallax-element img-container__green-circle"
          :strength="30"
          :originX="100"
          :originY="100"
      >
        <img class="img-element" src="../../assets/green_circle.png">
      </kinesis-element>
      <kinesis-element
          class="parallax-element img-container__stars"
          :strength="5"
          type="depth"
      >
        <img class="img-element" src="../../assets/stars.png">
      </kinesis-element>
    </kinesis-container>

  </div>
</template>


<script setup>
import {computed, onMounted, ref} from "vue";


const isMobile = computed(() => {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
})

let isMounted = ref(false)
let isParallaxActive = ref(false)
let isEyebrowAnimActive = ref(false)
const parallaxClasses = computed(() => {
  const classes = ['parallax-wrapper']

  if (!isParallaxActive.value) {
    classes.push('disabled')
  }

  if (isMounted.value) {
    classes.push('init')
  }

  return classes
})

const eyebrowClasses = computed(() => {
  const classes = ['eyebrow image-part']

  if (isEyebrowAnimActive.value) {
    classes.push('init')
  }


  return classes
})




function toggleParallax() {
  isParallaxActive.value = !isParallaxActive.value
}

const handleMouseMove = () => {
  isEyebrowAnimActive.value = true;

  setTimeout(() => {
    isEyebrowAnimActive.value = false;
  }, 600);
}

onMounted(() => {
  isMounted.value = true

  setTimeout(() => {
    isEyebrowAnimActive.value = true;

    setTimeout(() => {
      isEyebrowAnimActive.value = false;
    }, 600);

  }, 1500);

  setTimeout(() => {
    isParallaxActive.value = true
  }, 2000)

  window.addEventListener('mousemove', handleMouseMove);

})
</script>

<style lang="scss" scoped src="./style.scss"></style>
