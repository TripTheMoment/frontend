<script setup>
import { useRouter } from "vue-router";
import { useBoardStore } from "@/store/board";
import { ref, computed } from "vue";

const boardStore = useBoardStore();
const articles = computed(() => boardStore.articles);
const totalPageCount = computed(() => boardStore.totalPageCount);
const router = useRouter();
const params = ref({
  key: "", //조건 검색 시 컬럼명
  word: "", //해당 컬럼에 일치하는 데이터
  pgno: 1, //조회할 페이지 번호
  spp: 20, //한번에 얻어올 게시글 개수
});

boardStore.getArticles(params.value);

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
const click = () => {
  console.log(location);
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
          item-value="location"
        ></v-select>
        <div style="padding-left: 10px"></div>
        <v-select
          class="type_select"
          label="관광지 타입"
          :items="['전체', '맛집', '축제', '산', 'Texas', 'Wyoming']"
          variant="outlined"
          item-value="type"
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
      <v-col cols="3" v-for="article in articles" :key="article.id">
        <v-card class="mx-auto" max-width="400" @click="moveDetail(article.id)">
          <v-img
            :src="article.firstImage"
            onerror="this.src='https://www.shutterstock.com/image-vector/default-ui-image-placeholder-wireframes-600nw-1037719192.jpg'"
            height="200px"
            cover
          ></v-img>

          <v-card-title> {{ article.title }} </v-card-title>

          <v-card-subtitle>{{ article.addr1 }} </v-card-subtitle>
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
