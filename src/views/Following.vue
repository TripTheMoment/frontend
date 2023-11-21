<script setup>
import router from "@/router";
function goBack() {
  router.go(-1);
}
</script>

<template>
  <div class="follower-tab">
    <v-icon
      color="gray"
      size="40"
      icon="mdi-arrow-left"
      @click="goBack"
    ></v-icon>
    <span style="padding-left: 20px"></span>
    마이페이지
  </div>
  <div class="follower-container">
    <div class="follower-title">팔로잉</div>
    <div class="follower-box" style="height: 80%">
      <v-row style="padding-left: 10%">
        <v-col cols="3" v-for="item in 12">
          <div style="width: 100px; height: 100px">
            <v-avatar
              image="https://scontent-ssn1-1.xx.fbcdn.net/v/t1.6435-9/38770636_1833872913393032_3119054745558319104_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=7a1959&_nc_ohc=qnQTYJczRKAAX8jYY-H&_nc_ht=scontent-ssn1-1.xx&oh=00_AfBUgRTqJb9jpjfNPztB5vGI0UAiGU5ueELfuw-FO2p81A&oe=657E96EE"
              size="80"
            ></v-avatar>

            <div style="padding-left: 25px">이름</div>
          </div>
        </v-col>
      </v-row>
    </div>
    <v-pagination :length="2"></v-pagination>
  </div>
</template>

<style scoped>
.follower-container {
  margin-left: 25%;
  margin-right: 25%;
  height: 100%;
  background-color: rgb(231, 239, 246);
  border-radius: 20px;
}
.follower-tab {
  margin-left: 25%;
  margin-right: 25%;
  height: 50px;
  font-size: 20px;
  font-weight: 500;
  margin-top: 40px;
  padding-left: 20px;
  margin-bottom: 10px;
  color: rgb(158, 157, 157);
}
.follower-title {
  padding-top: 20px;
  text-align: center;
  font-size: 20px;
  font-weight: 600;
}
.follower-box {
  display: flex;
  justify-content: center;
  padding-top: 40px;
}
</style>
