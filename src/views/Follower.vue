<script>
import router from "@/router";
import { useAuthStore } from "@/store/auth";
import { computed } from "vue";
const authStore = useAuthStore();

export default {
  data: () => ({
    followers: computed(() => authStore.follows.followers),
  }),
  methods: {
    goBack() {
      router.go(-1);
    },
    moveUserPage(memberId) {
      authStore.getUserInfo(memberId);
      router.push({ name: "userpage" });
    },
  },
};
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
    <div class="follower-title">팔로워</div>
    <div class="follower-box" style="height: 80%">
      <v-row style="padding-left: 10%">
        <v-col cols="3" v-for="item in followers">
          <div style="width: 100px; height: 100px">
            <v-avatar
            :image="item.member.profileImgUrl"
              size="80"
              @click="moveUserPage(item.member.id)"
              style="cursor: pointer"
            ></v-avatar>

            <div style="padding-left: 25px">{{ item.member.name }}</div>
          </div>
        </v-col>
      </v-row>
    </div>
    <!-- <v-pagination :length="2"></v-pagination> -->
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
