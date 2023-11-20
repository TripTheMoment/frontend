<script>
import router from "@/router";
export default {
  data: () => ({
    tab: null,
    dialog: false,
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
  }),
  methods: {
    moveFollower: function () {
      router.push({ name: "follower" });
    },
    moveFollowing: function () {
      router.push({ name: "following" });
    },
    moveBeforeEdit: function () {
      router.push({ name: "beforeedit" });
    },
    goBack() {
      router.go(-1);
    },
  },
  // methods: function () {
  //   return {
  //     todoItems: ["dfdfd", "dfdfdf", "dfdfdfd"],
  //   };
  // },
  created: function () {
    // if (localStorage.length > 0) {
    //   for (var i = 0; i < localStorage.length; i++) {
    //     if (localStorage.key(i) !== "loglevel:webpack-dev-server") {
    //       this.todoItems.push(localStorage.key(i));
    //     }
    //   }
    // }
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
        ><div class="user_name">이름</div>

        <div style="padding-top: 20px"></div>
        <div class="user_num" style="margin-left: 10px">
          <span
            ><div
              style="padding-left: 13px; cursor: pointer"
              @click="moveFollower"
            >
              12
            </div>
            팔로워</span
          >
          <span style="padding-left: 20px"></span>
          <span @click=""
            ><div
              style="padding-left: 13px; cursor: pointer"
              @click="moveFollowing"
            >
              12
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
          <v-tab value="one">내가 쓴 글</v-tab>
          <v-tab value="two">내 북마크</v-tab>
        </v-tabs>

        <v-card-text class="card_content">
          <v-window v-model="tab">
            <v-window-item value="one">
              <div class="user_articlelist">
                <ul>
                  <li v-for="article in articlelist" v-bind:key="article">
                    {{ article.subject
                    }}<span class="mypage_article">{{ article.date }}</span>
                  </li>
                </ul>
              </div>
              <div style="padding-top: 50px"></div>
              <v-pagination :length="2"></v-pagination>
            </v-window-item>

            <v-window-item value="two">
              <v-row style="margin-left: 25%; margin-right: 25%">
                <v-col cols="4" v-for="item in 6">
                  <div class="boardlist_container">
                    <div class="user_dcard" @click="movedetail">
                      <div
                        class="user_paracard"
                        style="
                          background-image: url(https://res.klook.com/image/upload/fl_lossy.progressive,w_800,c_fill,q_85/Mobile/City/g9ynzkjz1nsrvhrjml4j.jpg);
                        "
                      ></div>
                    </div>
                  </div>
                  <div style="padding-top: 10px"></div>
                  <h3>광안대교</h3>
                  <div style="padding-bottom: 10px"></div>
                </v-col>
              </v-row>
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
  height: 60vh;
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
}
.col-md-12,
.col-md-4 {
  margin-bottom: 30px;
}

.col-md-12 .user_dcard {
  perspective: 3000px;
}
</style>
