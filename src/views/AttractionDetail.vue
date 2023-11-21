<script setup>
import { ref } from "vue";

import { useRoute, useRouter } from "vue-router";
import { computed } from "vue";
import { useBoardStore } from "@/store/board";
import KakaoMap from "@/components/KakaoMap.vue";

const boardStore = useBoardStore();
const article = computed(() => boardStore.article); //store 데이터를 반응형으로 가져오기
const router = useRouter();
const route = useRoute();

boardStore.getArticle(route.params.id);

const url = article.value;
console.log(url);
//boardStore.getArticle(route.params.articleNo);

const rating = ref(3.5);
function goBack() {
  router.go(-1);
}
</script>

<template>
  <div class="container">
    <div class="attraction-tab">
      <v-icon
        color="gray"
        size="40"
        icon="mdi-arrow-left"
        @click="goBack"
      ></v-icon>
      <span style="padding-left: 20px"></span>
      관광지 목록
    </div>

    <div class="inner-container">
      <div class="att_image">
        <img
          class="att_img"
          :src="article.firstImage"
          onerror="this.src='https://www.shutterstock.com/image-vector/default-ui-image-placeholder-wireframes-600nw-1037719192.jpg'"
        />
        <div class="bookmark">
          <v-icon icon="mdi-bookmark-outline" @click=""></v-icon>
        </div>
      </div>
      <div class="att_description">
        <hr size="5" color="black" width="100%" />
        <div style="padding: 10px"></div>
        <div class="att_name">{{ article.title }}</div>
        <div style="padding: 5px"></div>
        <div class="att_address">{{ article.addr1 }}</div>
        <div style="padding: 30px"></div>
        <div class="att_box">
          <div class="att_content">
            {{ article.description }}
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="att_location">
    <v-icon icon="mdi-map"></v-icon>위치
    <div class="map-box">
      <KakaoMap :latitude="article.latitude" :longitude="article.longitude" />
    </div>
  </div>
  <div class="att_review">
    <v-icon icon="mdi-lead-pencil"></v-icon>리뷰
    <div class="att_rating">
      <div>
        <v-rating v-model="rating" hover></v-rating>
      </div>
      <div class="att_textarea">
        <v-textarea label="리뷰를 남겨주세요" variant="outlined"></v-textarea>
        <v-btn class="att_btn"> 등록 </v-btn>
      </div>
      <div class="att_commentbox">
        <v-col v-for="item in 12">
          <div class="att_comment">
            <v-avatar color="surface-variant"></v-avatar>
            <span style="padding-left: 10px"></span>
            <span style="font-size: smaller">이름</span>
            <span style="padding-left: 20px"></span>

            <v-rating
              readonly
              :length="5"
              :size="22"
              :model-value="2.5"
              color="yellow-darken-3"
              rounded
            />
            <div style="padding-top: 20px"></div>
            <div>경치도 좋고 분위기도 좋아요.</div>
            <div style="padding-top: 50px"></div>
            <hr size="1" color="lightgray" width="100%" />
          </div>
        </v-col>
      </div>
    </div>
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap");

* {
  font-family: "Noto Sans KR", "NanumSquare", sans-serif !important;
}

.container {
  background-color: white;
  width: 100%;
  height: 500px;
}
.attraction-tab {
  margin-top: 100px;
  margin-left: 20%;
  height: 50px;
  font-size: 25px;
  font-weight: 500;
  color: rgb(0, 0, 0);
}
.inner-container {
  margin-top: 30px;
  display: flex;
  flex-direction: row;
}
.att_image {
  width: 600px;
  height: 400px;
  margin-right: 100px;
  margin-left: 350px;
  /*overflow: hidden;*/
}
.att_img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  box-shadow: 7.272px 10px 30px 0px rgba(0, 0, 0, 0.15);
}

.att_description {
  width: 500px;

  display: flex;
  flex-direction: column;
}
.att_name {
  font-size: 40px;
  font-weight: 600;
}
.att_address {
  color: gray;
}
.att_box {
  background-color: rgb(238, 237, 237);
  height: 220px;
  border-radius: 10px;
  overflow-y: scroll;
}
.att_box::-webkit-scrollbar {
  width: 5px; /* 스크롤바의 너비 */
}

.att_box::-webkit-scrollbar-thumb {
  height: 30%; /* 스크롤바의 길이 */
  background: #afcaef; /* 스크롤바의 색상 */

  border-radius: 10px;
}

.att_box::-webkit-scrollbar-track {
  background: rgba(33, 122, 244, 0.1); /*스크롤바 뒷 배경 색상*/
}
.att_content {
  padding-top: 20px;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 20px;
}
.att_location {
  margin-top: 80px;
  margin-left: 350px;
  margin-right: 350px;
  font-size: 20px;
}
.map-box {
  margin-top: 30px;
  border: 1.2px solid black;
  height: 600px;
}
.att_review {
  margin-top: 50px;
  margin-left: 350px;
  margin-right: 350px;
  font-size: 20px;
}
.att_textarea {
  width: 80%;
  display: flex;
  flex-direction: row;
}
.att_btn {
  margin-top: 110px;
  margin-left: 20px;
}
.att_comment {
  padding-top: 50px;
}
</style>
