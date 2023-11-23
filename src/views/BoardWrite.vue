<script setup>
import router from "@/router";
import { ref } from "vue";
import { useAuthStore } from "@/store/auth";
const authStore = useAuthStore();

const writeForm = ref({
  title: "",
  content: "",
});
const file = ref();
const titleRules = [
  (v) => !!v || "제목을 입력해주세요",
  (v) => (v && v.length <= 10) || "제목은 10글자를 넘길 수 없습니다",
];
const contentRules = [(v) => !!v || "내용을 입력해주세요"];

function goBack() {
  this.$router.go(-1);
}
const registArticle = async () => {
  try {
    if (!confirm("이대로 등록하시겠습니까?")) return;
    await authStore.writeArticle(writeForm.value, file.value);
    router.push({ name: "boardlist" });
    alert("등록 성공");
  } catch (error) {
    //등록 시 에러 발생
    console.log("등록 에러 내용:", error);
    alert("등록 실패");
  }
};
</script>

<template>
  <div class="write_container">
    <div class="write_tab">
      <v-icon
        color="gray"
        size="40"
        icon="mdi-arrow-left"
        @click="goBack"
      ></v-icon>
      <span style="padding-left: 20px"></span>
      글 작성
    </div>
    <hr size="1" color="lightgray" width="100%" />
    <div class="write_form">
      <v-form @submit.prevent="registArticle" enctype="multipart/form-data">
        <v-text-field
          label="제목"
          v-model="writeForm.title"
          :rules="titleRules"
          variant="outlined"
        ></v-text-field>
        <div style="padding-top: 20px"></div>
        <v-textarea
          label="내용"
          variant="outlined"
          v-model="writeForm.content"
          :rules="contentRules"
          rows="10"
        ></v-textarea>
        <div style="padding-top: 20px"></div>
        <v-file-input
          label="사진 넣기"
          variant="filled"
          prepend-icon="mdi-camera"
          v-model="file"
        ></v-file-input>
        <div style="padding-top: 20px"></div>
        <v-btn class="me-4" color="blue" type="submit"> 저장 </v-btn>

        <v-btn @click="moveBoardList"> 취소 </v-btn>
      </v-form>
    </div>
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap");

* {
  font-family: "Noto Sans KR", "NanumSquare", sans-serif !important;
}
.write_container {
  height: 800px;
  margin-top: 80px;
  margin-left: 20%;
  margin-right: 20%;
}
.write_tab {
  height: 50px;
  font-size: 25px;
  font-weight: 500;
  color: rgb(158, 157, 157);
}
.write_form {
  margin-top: 50px;
}
</style>
