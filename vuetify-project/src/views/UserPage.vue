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
    goBack() {
      router.go(-1);
    },
  },
};
</script>

<template>
  <div class="mypage_container">
    <div class="avatar">
      <v-avatar
        image="https://cdn.class101.net/images/5afa6586-1ca7-4f6a-a9ba-be5fad43ab51"
        size="100"
        color="info"
      >
      </v-avatar>
      <span style="margin-left: 20px"
        ><div class="user_name">이름</div>

        <div style="padding-top: 20px"></div>
        <div class="user_num" style="margin-left: 10px">
          <span
            ><div style="padding-left: 13px">12</div>
            팔로워</span
          >
          <span style="padding-left: 20px"></span>
          <span @click=""
            ><div style="padding-left: 13px">12</div>
            팔로잉</span
          >
        </div>
      </span>

      <div class="user_edit">
        <v-col cols="auto">
          <div v-if="true">
            <v-row justify="center">
              <v-dialog v-model="dialog" persistent width="auto">
                <template v-slot:activator="{ props }">
                  <v-btn v-bind="props"> 팔로우 </v-btn>
                </template>
                <v-card>
                  <v-card-text class="text-h7">
                    팔로우 하시겠습니까?
                  </v-card-text>

                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                      color="gray-darken-1"
                      variant="text"
                      @click="dialog = false"
                    >
                      아니요
                    </v-btn>
                    <v-btn
                      color="blue-darken-1"
                      variant="text"
                      @click="dialog = false"
                    >
                      네
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </v-row>
          </div>
          <div v-if="false">
            <v-row justify="center">
              <v-dialog v-model="dialog" persistent width="auto">
                <template v-slot:activator="{ props }">
                  <v-btn v-bind="props"> 팔로우 취소 </v-btn>
                </template>
                <v-card>
                  <v-card-text class="text-h7">
                    팔로우를 취소 하시겠습니까?
                  </v-card-text>

                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                      color="gray-darken-1"
                      variant="text"
                      @click="dialog = false"
                    >
                      아니요
                    </v-btn>
                    <v-btn
                      color="blue-darken-1"
                      variant="text"
                      @click="dialog = false"
                    >
                      네
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </v-row>
          </div>
        </v-col>
      </div>
    </div>
    <div style="padding-top: 100px"></div>
    <div class="gray_box" v-if="true">
      <v-card variant="flat" class="tab_card">
        <v-tabs v-model="tab">
          <div style="padding-left: 20%"></div>
          <v-tab value="one">북마크</v-tab>
        </v-tabs>

        <v-card-text class="card_content">
          <v-window v-model="tab">
            <v-window-item value="one">
              <v-row style="margin-left: 25%; margin-right: 25%">
                <v-col cols="4" v-for="item in 6">
                  <div class="boardlist_container">
                    <div class="user_dcard" @click="movedetail">
                      <div
                        class="user_paracard"
                        style="
                          background-image: url(https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Ft1.daumcdn.net%2Fcfile%2Ftistory%2F99A114335A021DBE30);
                        "
                      ></div>
                    </div>
                  </div>
                  <div style="padding-top: 10px"></div>
                  <h3>순천만 습지</h3>
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
