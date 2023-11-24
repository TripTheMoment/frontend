<script setup>
import { useArticleStore } from "@/store/article";
import { computed, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useAuthStore } from "@/store/auth";

const authStore = useAuthStore();
const router = useRouter();
const route = useRoute();
const articleStore = useArticleStore();
const commentForm = ref({
  content: "",
});

console.log(route.params.articleNo);
articleStore.getArticle(route.params.articleNo);
const article = computed(() => articleStore.article);
const userId = computed(() => authStore.user.userId);
const goBack = () => {
  router.push({ name: "boardlist" });
};
const moveUserPage = (memberId) => {
  authStore.getUserInfo(memberId);
  router.push({ name: "userpage" });
};
const registComment = async () => {
  try {
    if (!confirm("등록하시겠습니까?")) return;

    await authStore.registComment(commentForm.value, article.value.id);

    alert("등록 성공");
    articleStore.getArticle(route.params.articleNo);
  } catch (error) {
    //등록 시 에러 발생
    console.log("등록 에러 내용:", error);
    alert("등록 실패");
  }
};
const deleteArticle = async (articleNo) => {
  try {
    if (!confirm("삭제하시겠습니까?")) return;

    await authStore.deleteArticle(articleNo);

    alert("삭제 성공");
    router.push({ name: "boardlist" });
  } catch (error) {
    //등록 시 에러 발생
    console.log("등록 에러 내용:", error);
    alert("등록 실패");
  }
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
    <div class="article_title">{{ article.title }}</div>
    <div style="padding-top: 20px"></div>
    <div class="article_user">
      <v-avatar
        :image="article.member.profileImgUrl"
        color="info"
        @click="moveUserPage(article.member.id)"
      ></v-avatar>
      <span style="padding-left: 20px"></span>
      <span>{{ article.member.name }}</span>
      <span style="padding-left: 30px"></span>
      <span style="color: gray">{{ article.createdAt }}</span>
      <span style="padding-left: 70%"></span>
      <v-btn
        v-if="article.member.id == userId"
        @click="deleteArticle(article.id)"
        >글 삭제
      </v-btn>
    </div>
    <div style="padding-top: 20px"></div>
    <div class="content-box">
      <img class="article_image" :src="article.imgUrl" />
      <div class="article_content">
        <div>
          {{ article.content }}
        </div>
      </div>
      <div style="padding-top: 50px"></div>
      <div class="article_review">
        <div style="font-size: 20px">
          <v-icon icon="mdi-pencil"></v-icon>댓글
        </div>
        <div style="padding-top: 20px"></div>
        <div class="article_rating">
          <form @submit.prevent="registComment">
            <div class="textarea">
              <v-textarea
                v-model="commentForm.content"
                label="댓글을 남겨주세요"
                variant="outlined"
              ></v-textarea>
              <v-btn class="review_btn" type="submit"> 등록 </v-btn>
            </div>
          </form>

          <div class="commentbox">
            <v-col v-for="item in article.replies">
              <div class="comment">
                <v-avatar
                  :image="item.member.profileImgUrl"
                  color="surface-variant"
                  @click="moveUserPage(item.member.id)"
                ></v-avatar>
                <span style="padding-left: 10px"></span>
                <span style="font-size: smaller">{{ item.member.name }}</span>

                <span style="padding-left: 20px"></span>

                <div style="padding-top: 20px"></div>
                <div>{{ item.content }}</div>
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
