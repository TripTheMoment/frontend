<script>
import router from "@/router";
import RoroDialog from "/src/components/RoroDialog";

export default {
  name: "app",

  data: () => ({
    title: "",
    titlerules: [
      (value) => {
        if (value) return true;

        return "제목을 입력해주세요";
      },
    ],
    content: "",
    contentrules: [
      (value) => {
        if (value) return true;

        return "내용을 입력해주세요";
      },
    ],
  }),
  methods: {
    moveBoardList: function () {
      router.push({ name: "boardlist" });
    },
    goBack() {
      this.$router.go(-1);
    },
  },
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
      <v-form>
        <v-text-field
          label="제목"
          v-model="title"
          :rules="titlerules"
          variant="outlined"
        ></v-text-field>
        <div style="padding-top: 20px"></div>
        <v-textarea
          label="내용"
          variant="outlined"
          v-model="content"
          :rules="contentrules"
          rows="10"
        ></v-textarea>
        <div style="padding-top: 20px"></div>
        <v-file-input
          label="사진 넣기"
          variant="filled"
          prepend-icon="mdi-camera"
        ></v-file-input>
        <div style="padding-top: 20px"></div>
        <v-btn class="me-4" type="submit" color="blue" @click=""> 저장 </v-btn>

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
