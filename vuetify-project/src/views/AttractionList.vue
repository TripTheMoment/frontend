<script setup>
import router from "@/router";
const click = () => {
  router.push({ name: "attractiondetail" });
};

const tags = ["서울", "강원", "대전", "대구", "부산", "제주"];
</script>

<template>
  <div style="padding: 5px"> </div>
  <div class="title">관광지 목록</div>
  <div style="padding: 3px"> </div>
  <div class="searchbar" style="width: 800px">
    <v-form>
      <v-container class="searchbar_box" style="height: 80px">
        <v-select
          class="location_select"
          label="지역"
          :items="['전체', '서울', '강원', '대전', '대구', '부산']"
          variant="outlined"
        ></v-select>
        <div style="padding-left: 10px"></div>
        <v-select
          class="location_select"
          label="관광지 타입"
          :items="['전체', '맛집', '축제', '산', 'Texas', 'Wyoming']"
          variant="outlined"
        ></v-select>
        <div style="padding-left: 20px"></div>
        <v-text-field
          label="관광지를 검색하세요"
          append-inner-icon="mdi-magnify"
          @click:append-inner="click"
          variant="outlined"
        >
        </v-text-field>
      </v-container>
    </v-form>
  </div>
  <div style="padding: 20px"> </div>
  <div class="card">
    <v-row>
      <v-col cols="3" v-for="item in 12">
        <v-card class="mx-auto" max-width="400" @click="click()">
          <v-img
            src="https://www.expedia.co.kr/stories/wp-content/uploads/2022/07/o-5BoDBNeIkxXi7ylqMHtTZ3Duk.jpeg"
            height="200px"
            cover
          ></v-img>

          <v-card-title> 삼포해수욕장 </v-card-title>

          <v-card-subtitle>강원 고성군 죽왕면 삼포리 </v-card-subtitle>
          <div style="padding: 10px"> </div>
        </v-card>
      </v-col>
    </v-row>
    <div style="padding-top: 100px"></div>
    <v-pagination :length="10"></v-pagination>
  </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Black+Han+Sans&family=Noto+Sans+KR:wght@800&display=swap");

.title {
  text-align: center;
  font-size: 30px;
  font-family: "Noto Sans KR", "NanumSquare", sans-serif !important;
  font-weight: 800;
}
.card {
  font-family: "Noto Sans KR", "NanumSquare", sans-serif !important;
}
.searchbar {
  margin: 0 auto;
  font-family: "Noto Sans KR", "NanumSquare", sans-serif !important;
}
.searchbar_box {
  display: flex;
  flex-direction: row;
}
.location_select {
  max-width: 150px;
}
</style>
