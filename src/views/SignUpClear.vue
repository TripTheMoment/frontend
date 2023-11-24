<script setup>
import router from "@/router";

const moveLogin = () => {
  router.push({ name: "login" });
};
</script>

<template>
  <div class="clear-box">
    <div class="edit-title">회원 가입 완료</div>
    <div style="text-align: center; margin-top: 50px">
      이메일 인증 후 계정이 활성화 됩니다.
    </div>
    <div style="padding-top: 50px"></div>
    <v-btn class="goHome" type="submit" @click="moveLogin">로그인으로</v-btn>
  </div>
</template>

<style scoped>
.clear-box {
  display: flex;
  flex-direction: column;
  text-align: center;
}
.edit-title {
  margin-top: 150px;
  text-align: center;
  font-size: 25px;
  font-weight: 600;
}
.edit-container {
  margin-top: 40px;
}
.goHome {
  width: 100px;
  margin-left: 900px;
}
</style>
