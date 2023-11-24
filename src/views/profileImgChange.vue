<script setup>
import router from "@/router";
import { ref } from "vue";
import { useAuthStore } from "@/store/auth";

const authStore = useAuthStore();

const file = ref();
function moveEditPage() {
  authStore.checkPassword(password.value);
}
const chanageImg = async () => {
  try {
    
    await authStore.changeImg( file.value);
    router.push({ name: "mypage" });
  } catch (error) {
    //등록 시 에러 발생
    console.log("등록 에러 내용:", error);
    alert("등록 실패");
  }
};
</script>

<template>
  <div class="edit-title">프로필 사진 변경</div>
  <div style="text-align: center; margin-top: 50px">
   
  </div>
  <div class="edit-container">
    <v-sheet width="300" class="mx-auto">
      <v-form @submit.prevent="chanageImg">
        <v-file-input
            label="프로필 사진 변경"
            variant="outlined"
            prepend-icon="mdi-camera"
            v-model="file"
  ></v-file-input>
  <div style="text-align: center; margin-top: 50px">
   
</div>
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
