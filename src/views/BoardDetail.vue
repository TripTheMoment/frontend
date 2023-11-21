<script>
import router from "@/router";
export default {
  methods: {
    moveBoardList: function () {
      router.push({ name: "boardlist" });
    },
    goBack() {
      router.go(-1);
    },
  },
};
</script>

<template>
  <div class="board_container">
    <div class="tab">
      <v-icon
        color="gray"
        size="30"
        icon="mdi-arrow-left"
        @click="goBack"
      ></v-icon>
      <span style="padding-left: 20px"></span>
      여행 게시판
    </div>
    <hr size="1" color="black" width="100%" />
    <div class="article_title">글 제목</div>
    <div style="padding-top: 20px"></div>
    <div class="article_user">
      <v-avatar color="surface-variant"></v-avatar>
      <span style="padding-left: 20px"></span>
      <span>이름</span>
      <span style="padding-left: 30px"></span>
      <span style="color: gray">2023-11-15 16:33:25</span>
    </div>
    <div style="padding-top: 20px"></div>
    <div class="content-box">
      <img
        class="article_image"
        src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Ft1.daumcdn.net%2Fcfile%2Ftistory%2F264CC83C5858832B31"
      />
      <div class="article_content">
        <div>
          Baby, got me looking so crazy 빠져버리는 daydream Got me feeling you
          너도 말해줄래 누가 내게 뭐라든 남들과는 달라 넌 Maybe you could be the
          one 날 믿어봐 한번 I'm not looking for just fun Maybe I could be the
          one Oh baby 예민하대 나 lately 너 없이는 매일 매일이 yeah 재미없어
          어쩌지 I just want you Call my phone right now I just wanna hear
          you're mine 'Cause I know what you like boy You're my chemical hype
          boy 내 지난날들은 눈 뜨면 잊는 꿈 Hype boy 너만 원해 Hype boy 내가
          전해 And we can go high 말해봐 yeah 느껴봐 mm mm Take him to the sky
          You know I hype you boy 눈을 감아 말해봐 yeah 느껴봐 mm mm Take him to
          the sky You know I hype you boy 잠에 들려고 잠에 들려 해도 네 생각에
          또 새벽 세 시 uh-oh 알려줄 거야 they can't have you no more 봐봐 여기
          내 이름 써있다고 누가 내게 뭐라든 남들과는 달라 넌 Maybe you could be
          the one 날 믿어봐 한번 I'm not looking for just fun Maybe I could be
          the one Oh baby 예민하대 나 lately 너 없이는 매일 매일이 yeah 재미없어
          어쩌지 I just want you Call my phone right now I just wanna hear
          you're mine 'Cause I know what you like boy You're my chemical hype
          boy 내 지난날들은 눈 뜨면 잊는 꿈 Hype boy 너만 원해 Hype boy 내가
          전해 And we can go high 말해봐 yeah 느껴봐 mm mm Take him to the sky
          You know I hype you boy 눈을 감아 말해봐 yeah 느껴봐 mm mm Take him to
          the sky You know I hype you boy
        </div>
      </div>
      <div style="padding-top: 50px"></div>
      <div class="article_review">
        <div style="font-size: 20px">
          <v-icon icon="mdi-pencil"></v-icon>댓글
        </div>
        <div style="padding-top: 20px"></div>
        <div class="article_rating">
          <div class="textarea">
            <v-textarea
              label="댓글을 남겨주세요"
              variant="outlined"
            ></v-textarea>
            <v-btn class="review_btn"> 등록 </v-btn>
          </div>
          <div class="commentbox">
            <v-col v-for="item in 12">
              <div class="comment">
                <v-avatar color="surface-variant"></v-avatar>
                <span style="padding-left: 10px"></span>
                <span style="font-size: smaller">이름</span>
                <span style="padding-left: 20px"></span>

                <div style="padding-top: 20px"></div>
                <div>경치도 좋고 분위기도 좋아요.</div>
                <div style="padding-top: 50px"></div>
                <hr size="1" color="lightgray" width="100%" />
              </div>
            </v-col>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap");

* {
  font-family: "Noto Sans KR", "NanumSquare", sans-serif !important;
}
.board_container {
  height: 100%;
  margin-top: 80px;
  margin-left: 20%;
  margin-right: 20%;
}
.tab {
  height: 50px;
  font-size: 20px;
  font-weight: 500;
  color: rgb(0, 0, 0);
}
.article_title {
  margin-top: 30px;
  font-size: 35px;
  font-weight: 600;
}
.content-box {
  margin-top: 30px;
  margin-left: 30px;
}
.article_image {
  overflow: hidden;
  width: 600px;
  height: 400px;
}
.article_content {
  margin-top: 30px;
  font-size: 18px;
  margin-right: 20%;
}

.textarea {
  width: 80%;
  display: flex;
  flex-direction: row;
}
.review_btn {
  margin-top: 110px;
  margin-left: 20px;
}
.article_comment {
  padding-top: 50px;
}
</style>
