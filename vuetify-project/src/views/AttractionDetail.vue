<script setup>
import { ref } from "vue";
import router from "@/router";
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
          src="https://www.expedia.co.kr/stories/wp-content/uploads/2022/07/o-5BoDBNeIkxXi7ylqMHtTZ3Duk.jpeg"
        />
        <div class="bookmark">
          <v-icon icon="mdi-bookmark-outline" @click=""></v-icon>
        </div>
      </div>
      <div class="att_description">
        <hr size="5" color="black" width="100%" />
        <div style="padding: 10px"></div>
        <div class="att_name">삼포해수욕장</div>
        <div style="padding: 5px"></div>
        <div class="att_address">강원 고성군 죽왕면 삼포리</div>
        <div style="padding: 30px"></div>
        <div class="att_box">
          <div class="att_content">
            1977년 삼포해수욕장으로 개장하였으며 속초에서 북쪽으로 12km 떨어진
            곳에 있다. 백사장은 길이 800m, 너비 75m, 경사 2~3˚이며, 수심은
            1~2m이다. 해변을 붉게 수놓는 해당화와 울창한 소나무 숲의 빼어난
            경관으로 유명한 곳이다. 바다가 깊지 않아 가족 단위 피서지로
            적합하며, 해변에는 바닷말이 무성하게 자라고 있다.
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="att_location">
    <v-icon icon="mdi-map"></v-icon>위치
    <div class="map"></div>
  </div>
  <div class="att_review">
    <v-icon icon="mdi-lead-pencil"></v-icon>리뷰
    <div class="att_rating">
      <div>
        <v-rating v-model="rating" hover half-increments></v-rating>
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
              half-increments
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
  color: rgb(158, 157, 157);
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
}
.att_content {
  padding-top: 20px;
  padding-left: 20px;
  padding-right: 20px;
}
.att_location {
  margin-top: 80px;
  margin-left: 350px;
  margin-right: 350px;
  font-size: 20px;
}
.map {
  margin-top: 30px;
  background-color: lightcyan;
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
