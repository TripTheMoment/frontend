<template>
  <div class="swipe" :style="{ backgroundColor: theme.backgroundcolor }">
    <div class="content-section" id="backg">
      <div class="inputBox">
        <div class="input-start">
          반갑습니다!<br />
          <strong>목적지를 설정해볼까요?</strong>
        </div>
        <v-text-field
          class="text-field rounded-pill"
          label="어디로 갈까요?"
          variant="outlined"
          bg-color="white"
        ></v-text-field>
        <v-select
          class="select"
          label="지역"
          :items="['전체', '서울', '강원', '대전', '대구', '부산', '제주']"
          variant="outlined"
          bg-color="white"
        ></v-select>
        <v-select
          class="select"
          label="관광지 타입"
          :items="['전체', '맛집', '축제', '산', '유적지', '부산', '제주']"
          variant="outlined"
          bg-color="white"
        ></v-select>
        <button class="search">검색</button>
      </div>
    </div>

    <div class="carousel">
      <v-carousel hide-delimiters>
        <template v-slot:prev="{ props }">
          <a href="#" @click="[props.onClick(), changeColorLeft()]"
            ><img src="/src/assets/left_arrow.svg" width="30"
          /></a>
        </template>
        <template v-slot:next="{ props }">
          <a href="#" @click="[props.onClick(), changeColorRight()]"
            ><img src="/src/assets/right_arrow.svg" width="30"
          /></a>
        </template>

        <v-carousel-item
          v-for="(item, i) in items"
          :key="i"
          :src="item.src"
          cover
          @click="click()"
        ></v-carousel-item>
      </v-carousel>
    </div>
  </div>
  <div class="sub-main">
    <div class="recommend_title">
      <h2><strong>어디로 갈지 고민이라면! 여기 어때?🎈</strong></h2>
    </div>
    <div class="item-wrap">
      <div class="item hover12">
        <figure>
          <img
            class="item-img hover1"
            src="/src/assets/img/gangneung.PNG"
            alt="pbook1"
          />
        </figure>
        <div class="item-title">강릉</div>
        <div>
          서울과 비슷한 위도에 위치한 영동 지방 최대 도시이다. 서쪽으로
          태백산맥이 뻗어 있고, 동쪽으로 동해가 펼쳐져 있으며, 해안선 길이는
          73.72km이다
        </div>
      </div>
      <div class="item hover12">
        <figure>
          <img
            class="item-img hover1"
            src="/src/assets/img/busan.PNG"
            alt="pbook2"
          />
        </figure>
        <div class="item-title">부산</div>
        <div>
          우리나라 제2의 수도 부산광역시. 부산 대표 관광지로 손꼽히는 해운대는
          밤에는 마린시티의 야경이 더해져 더욱 화려한 해변이 된다.
          감천문화마을은 사진 찍기에 일품이다.
        </div>
      </div>
      <div class="item hover12">
        <figure>
          <img
            class="item-img hover1"
            src="/src/assets/img/yeosu.PNG"
            alt="pbook3"
          />
        </figure>
        <div class="item-title">여수</div>
        <div>
          해상 케이블카를 타면 마치 바다 위를 걷는 듯한 느낌이 들며 탁 트인 바다
          전망을 감상할 수 있다. 공식 밥도둑 게장백반과 돌산 갓김치, 갈치조림 등
          풍부한 먹거리까지 갖춘 인기 만점 관광지!
        </div>
      </div>
      <div class="item hover12">
        <figure>
          <img
            class="item-img hover1"
            src="/src/assets/img/jeonju.PNG"
            alt="pbook4"
          />
        </figure>
        <div class="item-title">전주</div>
        <div>
          한국의 멋이 살아있는 전주. 도심 한복판에 자리한 한옥마을에 들어서면
          시대를 거슬러가는 기분이다. '경사스러운 터에 지어진 궁궐'이란 의미의
          경기전에 들어서면 대나무가 서로 부대끼며 내는 소리에 귀 기울이게 된다.
        </div>
      </div>
    </div>
  </div>

  <div style="padding: 20px"> </div>
  <div class="mini-board-container">
    <div class="mini-board" style="float: left; width: 33%; padding: 10px">
      <h2>여행 뉴스</h2>
      <div style="padding: 10px"> </div>
      <div
        v-ripple="{ center: true }"
        class="text-xs-center elevation-2 pa-5 headline"
      >
        여행 뉴스 1
      </div>
      <div
        v-ripple="{ center: true }"
        class="text-xs-center elevation-2 pa-5 headline"
      >
        여행 뉴스 2
      </div>
      <div
        v-ripple="{ center: true }"
        class="text-xs-center elevation-2 pa-5 headline"
      >
        여행 뉴스3
      </div>
    </div>
    <div class="mini-board" style="float: left; width: 33%; padding: 10px">
      <h2 style="cursor: pointer" @click="moveBoard">여행 게시판</h2>
      <div style="padding: 10px"> </div>
      <div
        v-ripple="{ center: true }"
        class="text-xs-center elevation-2 pa-5 headline"
      >
        여행 게시판 1
      </div>
      <div
        v-ripple="{ center: true }"
        class="text-xs-center elevation-2 pa-5 headline"
      >
        여행 게시판 2
      </div>
      <div
        v-ripple="{ center: true }"
        class="text-xs-center elevation-2 pa-5 headline"
      >
        여행 게시판 3
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import router from "@/router";

const index = ref(0);
const items = [
  {
    src: "./src/assets/img/main1.jpg",
  },
  {
    src: "./src/assets/img/main2.png",
  },
  {
    src: "./src/assets/img/main3.jpg",
  },
  {
    src: "./src/assets/img/main4.jpg",
  },
];

const colors = ["#EDEEF0", "#97c1a9", "#CCE2CB", "#FFC5BF"];
function changeColorLeft() {
  index.value = index.value - 1;
  if (index.value < 0) index.value = 3;
  theme.backgroundcolor = colors[index.value];
}
function changeColorRight() {
  index.value = index.value + 1;
  if (index.value > 3) index.value = 0;
  theme.backgroundcolor = colors[index.value];
}
function moveBoard() {
  router.push({ name: "boardlist" });
}

const theme = {
  backgroundcolor: colors[0],
};
</script>
<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Black+Han+Sans&family=Noto+Sans+KR:wght@800&display=swap");
* {
  font-family: "Noto Sans KR", "NanumSquare", sans-serif !important;
}
.swipe {
  height: 700px;
}
.content {
  min-width: 1500px;
  height: 1200px;
  margin: 0 auto;
}

/* 검색창 시작*/
.content-section {
  float: left;
  width: 500px;
  margin-top: 130px;
  margin-left: 15%;
  display: flex;
  align-items: center;
}
.input-start {
  border-bottom: black solid 0.7px;
  margin: 0 0 20px 0;
  font-size: large;
  padding-bottom: 8px;
}
.text-field {
  width: 300px;
}

.search {
  width: 300px;
  height: 60px;
  border-radius: 5px;
  background-color: #064b23;
  text-align: center;
  color: white;
  border: none;
  font-size: 18px;
  border-radius: 5px;
}

/* 검색창 끝*/

/* 사진 슬라이드 시작*/
.carousel {
  float: right;
  margin-top: 90px;
  margin-right: 15%;
  width: 700px;
  box-shadow: 7.272px 10px 30px 0px rgba(0, 0, 0, 0.15);
}
.mini-board-container {
  display: flex;
  justify-content: center;
}
.mini-board {
  text-align: center;
}
.v-btn__content {
  size: 100px;
}
#no-background-hover::before {
  background-color: transparent !important;
}
/* 사진 슬라이드 끝*/

/* sub-main 시작*/
.sub-main {
  width: 1300px;
  margin: 60px 300px;
  /* position: relative; */
}

.recommend_title {
  margin: 30px 0 45px;
}

.item-wrap {
  display: flex;
  justify-content: space-between;
  flex-direction: row;
}

.item {
  display: inline-block;
  width: 282px;
}

.item-title {
  font-weight: bold;
  margin: 10px 0;
  font-size: 20px;
}

.item figure {
  z-index: 10;
  width: 282px;
  height: 210px;
}

.item-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  cursor: pointer;

  box-shadow: rgb(120, 118, 118, 0.3) 5px 5px 5px;
}

/* .item-img {
  -webkit-transform: scale(1);
  transform: scale(1);
  -webkit-transition: 0.3s ease-in-out;
  transition: 0.3s ease-in-out;
} */

.hover12 figure {
  position: relative;
}
.hover12 figure::before {
  position: absolute;
  top: 0;
  left: -25%;
  z-index: 2;
  display: block;
  content: "";
  width: 50%;
  height: 100%;
  background: -webkit-linear-gradient(
    left,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 0.3) 100%
  );
  background: linear-gradient(
    to right,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 0.3) 100%
  );
  -webkit-transform: skewX(-25deg);
  transform: skewX(-25deg);
  opacity: 0;
}
.hover12 figure:hover::before {
  -webkit-animation: shine 1.25s;
  animation: shine 1.25s;
}
@-webkit-keyframes shine {
  0% {
    opacity: 1;
  }
  40% {
    opacity: 1;
  }
  100% {
    left: 60%;
    opacity: 0;
  }
}
@keyframes shine {
  0% {
    opacity: 1;
  }
  40% {
    opacity: 1;
  }
  100% {
    left: 60%;
    opacity: 0;
  }
}
/*sub-main 끝*/
</style>
