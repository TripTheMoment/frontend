<template>
  <v-app-bar :elevation="1">
    <v-app-bar-title style="cursor: pointer" @click="moveHome()">
      <v-icon icon="mdi-circle-slice-6" />
      Trip, the Moment
    </v-app-bar-title>
    <v-btn variant="text" @click="moveAttractionList()">관광지 목록</v-btn>
    <v-btn variant="text" @click="moveBoardList()">여행 게시판</v-btn>
    <v-btn v-if="!isLogin" variant="text" @click="moveLogin()">로그인</v-btn>
    <template v-else>
      <li>{{ userName }}님 환영합니다!</li>
      <span style="padding-left: 20px"></span>
      <li><button @click="logout">로그아웃</button></li>
      <span style="padding-right: 20px"></span>
    </template>
  </v-app-bar>
</template>

<script setup>
import router from "@/router";
import { computed } from "vue";
import { useAuthStore } from "@/store/auth";

const authStore = useAuthStore();
const isLogin = computed(() => !!authStore.token);
const userName = computed(() => authStore.user.userName);
const moveHome = () => {
  router.push({ name: "Home" });
};

const moveLogin = () => {
  router.push({ name: "login" });
};

const moveAttractionList = () => {
  router.push({ name: "attractionlist" });
};
const moveBoardList = () => {
  router.push({ name: "boardlist" });
};

const logout = () => {
  if (!confirm("로그아웃 하시겠습니까?")) return;
  authStore.logout();
};
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap");

.v-btn {
  font-family: "Noto Sans KR", "NanumSquare", sans-serif !important;
}
li {
  list-style-type: none;
}
</style>
