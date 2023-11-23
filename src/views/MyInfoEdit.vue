<script setup>
import router from "@/router";
import { ref, computed } from "vue";
import { useAuthStore } from "@/store/auth";
const authStore = useAuthStore();

function moveMyPage() {
  router.push({ name: "mypage" });
}
const nameRules = [
  (v) => !!v || "이름을 입력해주세요",
  (v) => (v && v.length <= 6) || "이름은 6글자를 넘을 수 없습니다",
];
const passwordRules = [
  (v) => !!v || "비밀번호를 입력해주세요",
  (v) =>
    (v && v.length >= 8) || "비밀번호는 8글자 이상 16글자 이하여야 합니다.",
  (v) =>
    (v && v.length <= 16) || "비밀번호는 8글자 이상 16글자 이하여야 합니다.",
  (v) => /^[a-zA-Z0-9]*$/.test(v) || "비밀번호는 영문+숫자만 입력 가능합니다.",
];
const userName = ref("");
const userEmail = computed(() => authStore.user.userEmail);

const userPassword = ref("");
const checkPassword = ref("");

function editInfo() {
  console.log(userPassword.value, checkPassword.value, userName.value);
  if (userPassword.value !== checkPassword.value) {
    alert("비밀번호를 확인해주세요");
  } else if (userPassword.value.length < 8 || userPassword.value.length > 16) {
    alert("비밀번호를 확인해주세요");
  } else {
    authStore.editInfo(userName.value, userPassword.value);
    alert("수정되었습니다!");
    router.push({ name: "mypage" });
  }
}
</script>

<template>
  <div class="edit-title">내 정보 수정</div>
  <div class="edit-container">
    <v-sheet width="300" class="mx-auto">
      <v-form @submit.prevent="editInfo">
        <v-text-field
          label="이메일"
          :model-value="userEmail"
          variant="solo"
          disabled=""
        ></v-text-field>
        <v-text-field
          label="이름"
          v-model="userName"
          variant="solo"
          :rules="nameRules"
        ></v-text-field>
        <v-text-field
          label="새 비밀번호"
          variant="solo"
          type="password"
          v-model="userPassword"
          :rules="passwordRules"
        ></v-text-field>
        <v-text-field
          label="새 비밀번호 확인"
          variant="solo"
          type="password"
          v-model="checkPassword"
          :rules="passwordRules"
        ></v-text-field>

        <v-btn type="submit" block class="mt-2">수정</v-btn>
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
