<script setup>
import router from "@/router";
import { ref } from "vue";
import { useAuthStore } from "@/store/auth";

const authStore = useAuthStore();
const userName = ref("정연우");
const password = ref("");

function moveEditPage() {
  authStore.checkPassword(password.value);
}
</script>

<template>
  <div class="edit-title">비밀번호 확인</div>
  <div style="text-align: center; margin-top: 30px">
    본인 확인을 위해 비밀번호를 입력해주세요.
  </div>
  <div class="edit-container">
    <v-sheet width="300" class="mx-auto">
      <v-form @submit.prevent="moveEditPage">
        <v-text-field
          @click:append-inner="click"
          variant="outlined"
          type="password"
          v-model="password"
        ></v-text-field>

        <v-btn type="submit" block class="mt-2">확인</v-btn>
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
  margin-top: 40px;
}
</style>
