<script setup>
import { useRouter, useRoute } from "vue-router";
import { useBoardStore } from "@/store/board";
import { ref, computed, watch } from "vue";

const boardStore = useBoardStore();
const articles = computed(() => boardStore.articles);
const totalPageCount = computed(() => boardStore.totalPageCount);
const router = useRouter();

const location_tag = [
  { name: "전국", value: 0 },
  { name: "서울", value: 1 },
  { name: "인천", value: 2 },
  { name: "대전", value: 3 },
  { name: "대구", value: 4 },
  { name: "광주", value: 5 },
  { name: "부산", value: 6 },
  { name: "울산", value: 7 },
  { name: "세종", value: 8 },
  { name: "경기도", value: 31 },
  { name: "강원도", value: 32 },
  { name: "충청북도", value: 33 },
  { name: "충청남도", value: 34 },
  { name: "경상북도", value: 35 },
  { name: "경상남도", value: 36 },
  { name: "전라북도", value: 37 },
  { name: "전라남도", value: 38 },
  { name: "제주도", value: 39 },
];
const type_tag = [
  { name: "관광지", value: 12 },
  { name: "문화시설", value: 14 },
  { name: "행사/공연/축제", value: 15 },
  { name: "여행코스", value: 25 },
  { name: "레포츠", value: 28 },
  { name: "숙박", value: 32 },
  { name: "쇼핑", value: 38 },
  { name: "음식점", value: 39 },
];

const location_select = ref();
const type_select = ref();
const input_title = ref("");
const page = ref(1);

watch(page, () => {
  console.log("페이지 변경");
  boardStore.getArticles(params.value);
});

const params = ref({
  sido: location_select,
  type: type_select,
  title: input_title,
  pgno: page,
});

// const params = ref({
//   key: "", //조건 검색 시 컬럼명
//   word: "", //해당 컬럼에 일치하는 데이터
//   pgno: 1, //조회할 페이지 번호
//   spp: 20, //한번에 얻어올 게시글 개수
// });

const changePage = async (pageNum) => {
  // console.log("페이지 변경 , 페이지 번호:", pageNum);
  params.value.pgno = pageNum;
  await boardStore.getArticles(params.value);
  articles.value[0] = {};
};

const getSearchArticles = (searchKeyword) => {
  // console.log("BoardList의 조건 검색 메소드 호출:", searchKeyword);
  params.value.key = searchKeyword.key;
  params.value.word = searchKeyword.word;
  params.value.pgno = 1;

  boardStore.getArticles(params.value);
};

const moveDetail = (id) => {
  console.log(id);
  router.push({ name: "attractiondetail", params: { id } });
};

const search = () => {
  params.value.pgno = 1;
  boardStore.getArticles(params.value);
};
</script>

<template>
  <div style="padding: 5px"></div>
  <div class="title">관광지 목록</div>
  <div style="padding: 3px"></div>
  <div class="searchbar" style="width: 800px">
    <v-form>
      <v-container class="searchbar_box" style="height: 80px">
        <v-select
          class="location_select"
          label="지역"
          :items="location_tag"
          item-title="name"
          item-value="value"
          variant="outlined"
          v-model="location_select"
        ></v-select>
        <div style="padding-left: 10px"></div>
        <v-select
          class="type_select"
          label="관광지 분류"
          :items="type_tag"
          variant="outlined"
          item-title="name"
          item-value="value"
          v-model="type_select"
        ></v-select>
        <div style="padding-left: 20px"></div>
        <v-text-field
          label="관광지를 검색하세요"
          append-inner-icon="mdi-magnify"
          @click:append-inner="search"
          variant="outlined"
          v-model="input_title"
        >
        </v-text-field>
      </v-container>
    </v-form>
  </div>
  <div style="padding: 20px"></div>
  <div class="card">
    <v-row>
      <v-col cols="3" v-for="article in articles" :key="article.id">
        <v-card class="mx-auto" max-width="350" @click="moveDetail(article.id)">
          <img
            :src="article.firstImage"
            alt=""
            class="list-img"
            onerror="this.src='https://www.shutterstock.com/image-vector/default-ui-image-placeholder-wireframes-600nw-1037719192.jpg'"
          />
          <!-- <v-img
            :src="article.firstImage"
            :error="replaceImg"
            height="200px"
            cover
          ></v-img> -->

          <v-card-title> {{ article.title }} </v-card-title>

          <v-card-subtitle>{{ article.addr1 }} </v-card-subtitle>
          <div style="padding: 10px"> </div>
        </v-card>
      </v-col>
    </v-row>
    <div style="padding-top: 100px"></div>

    <v-pagination
      v-model="page"
      :length="totalPageCount - 1"
      :total-visible="7"
    ></v-pagination>
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
  margin-left: 100px;
  margin-right: 100px;
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
.list-img {
  height: 200px;
  width: 100%;
  object-fit: cover;
}
</style>
