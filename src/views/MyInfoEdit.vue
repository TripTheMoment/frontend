<script setup>
import router from "@/router";
import { ref } from "vue";
const userName = ref("이름");

function moveMyPage() {
  router.push({ name: "mypage" });
}
const nameRules = [
  (v) => !!v || "이름을 입력해주세요",
  (v) => (v && v.length <= 6) || "이름은 6글자를 넘을 수 없습니다",
];
</script>

<template>
  <div class="edit-title">내 정보 수정</div>
  <div class="edit-container">
    <v-sheet width="300" class="mx-auto">
      <v-form fast-fail @submit.prevent>
        <v-text-field
          label="이메일"
          model-value="yoanwoo@naver.com"
          variant="solo"
          disabled=""
        ></v-text-field>
        <v-text-field
          label="이름"
          :model-value="userName"
          variant="solo"
          :rules="nameRules"
        ></v-text-field>

        <v-btn type="submit" block class="mt-2" @click="moveMyPage">수정</v-btn>
      </v-form>
    </v-sheet>
  </div>
</template>

<style scoped>
.edit-title {
  margin-top: 150px;
  text-align: center;
  font-size: 25px;
  font-weight: 600;
}
.edit-container {
  margin-top: 60px;
}
</style>
