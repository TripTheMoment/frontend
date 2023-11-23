<script>
import router from "@/router";
import { computed } from "vue";
import { useAuthStore } from "@/store/auth";
const authStore = useAuthStore();
export default {
  data: () => ({
    tab: null,
    dialog: false,
    bookmark_page: 1,
    article_page: 1,
    articlelist: [
      {
        subject: "내가 쓴 글1",
        date: "2023-11-17",
      },
      {
        subject: "내가 쓴 글2",
        date: "2023-11-16",
      },
      {
        subject: "내가 쓴 글3",
        date: "2023-11-15",
      },
      {
        subject: "내가 쓴 글4",
        date: "2023-11-15",
      },
    ],
    userName: computed(() => authStore.user.userName),
    followerCnt: computed(() => authStore.user.followerCnt),
    followingCnt: computed(() => authStore.user.followingCnt),
    bookmarks: computed(() => authStore.user.bookmarks),
  }),
  methods: {
    moveFollower: async function () {
      await authStore.userFollowers();
      router.push({ name: "follower" });
    },
    moveFollowing: async function () {
      await authStore.userFollowings();
      router.push({ name: "following" });
    },
    moveBeforeEdit: function () {
      router.push({ name: "beforeedit" });
    },
    goBack() {
      router.go(-1);
    },
    moveDetail(id) {
      console.log(id);

      router.push({ name: "attractiondetail", params: { id } });
    },
  },

  created: function () {
    authStore.userDetail();
  },
};
</script>

<template>
  <div class="mypage_container">
    <div class="avatar">
      <v-avatar
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQA2RCfzWnxwzFf3zunQh6YTplZB30IqL6kmw&usqp=CAU"
        size="100"
        color="info"
      >
      </v-avatar>
      <span style="margin-left: 20px"
        ><div class="user_name">{{ userName }}</div>

        <div style="padding-top: 20px"></div>
        <div class="user_num" style="margin-left: 10px">
          <span
            ><div
              style="padding-left: 13px; cursor: pointer"
              @click="moveFollower"
            >
              {{ followerCnt }}
            </div>
            팔로워</span
          >
          <span style="padding-left: 20px"></span>
          <span @click=""
            ><div
              style="padding-left: 13px; cursor: pointer"
              @click="moveFollowing"
            >
              {{ followingCnt }}
            </div>
            팔로잉</span
          >
        </div>
      </span>

      <div class="user_edit">
        <v-col cols="auto">
          <v-btn v-if="true" variant="outlined" @click="moveBeforeEdit"
            >내 정보 수정</v-btn
          >
        </v-col>
      </div>
    </div>
    <div style="padding-top: 100px"></div>
    <div class="gray_box">
      <v-card variant="flat" class="tab_card">
        <v-tabs v-model="tab">
          <div style="padding-left: 20%"></div>
          <v-tab value="one">내 북마크</v-tab>
          <v-tab value="two">내가 쓴 글</v-tab>
        </v-tabs>

        <v-card-text class="card_content">
          <v-window v-model="tab">
            <v-window-item value="one">
              <v-row style="margin-left: 25%; margin-right: 25%">
                <v-col cols="4" v-for="item in bookmarks">
                  <div class="boardlist_container">
                    <div class="user_dcard" @click="moveDetail(item.info.id)">
                      <img
                        :src="item.info.firstImage"
                        class="user_dcard"
                        onerror="this.src='https://www.shutterstock.com/image-vector/default-ui-image-placeholder-wireframes-600nw-1037719192.jpg'"
                      />
                    </div>
                  </div>
                  <div style="padding-top: 10px"></div>
                  <h3>{{ item.info.title }}</h3>
                  <div style="padding-bottom: 30px"></div>
                </v-col>
              </v-row>
              <v-pagination
                v-model="bookmark_page"
                :length="3"
                :total-visible="5"
              ></v-pagination>
            </v-window-item>
            <v-window-item value="two">
              <div class="user_articlelist">
                <ul>
                  <li v-for="article in articlelist" v-bind:key="article">
                    {{ article.subject
                    }}<span class="mypage_article">{{ article.date }}</span>
                  </li>
                </ul>
              </div>
              <div style="padding-top: 100px"></div>
              <v-pagination :length="2"></v-pagination>
            </v-window-item>
          </v-window>
        </v-card-text>
      </v-card>
    </div>
  </div>
</template>

<style scoped>
* {
  font-family: "Noto Sans KR", "NanumSquare", sans-serif !important;
}

.avatar {
  margin-left: 30%;
  margin-top: 100px;
  display: flex;
  flex-direction: row;
}
.user_name {
  font-size: 20px;
  font-weight: 700;
}
.user_num {
  display: flex;
  flex-direction: row;
  font-size: 15px;
  font-weight: 500;
  color: gray;
}
.user_edit {
  padding-left: 400px;
  padding-top: 20px;
}
.gray_box {
  background-color: lightgray;
  height: 60vh;
}

.card_content {
  height: 65vh;
  background-color: rgb(231, 239, 246);
}
.user_articlelist {
  margin-left: 25%;
  margin-right: 25%;
}
ul {
  list-style-type: none;
  padding-left: 0;
  margin-top: 0;
  text-align: left;
}
li {
  display: flex;
  min-height: 50px;
  height: 50px;
  line-height: 50px;
  margin: 0.5rem 0;
  padding: 0 0.9rem;
  background: white;
  border-radius: 5px;
  font-size: 18px;
  font-weight: 500;
}
.mypage_article {
  font-size: 15px;
  margin-left: 30px;
  font-weight: 400;
  color: gray;
}
.user_paracard {
  width: 100%;
  display: block;
  padding-top: 66.66666%;
  transform-style: preserve-3d;
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.25);
  border: 0px;
  background-size: 110% 110%;
  background-position: center center;
}

.user_dcard {
  position: relative;
  display: block;
  perspective: 500px;
  border-radius: 12px;
  width: 100%;
}
.col-md-12,
.col-md-4 {
  margin-bottom: 30px;
}

.col-md-12 .user_dcard {
  perspective: 3000px;
}
</style>
