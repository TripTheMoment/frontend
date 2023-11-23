<script setup>
import { useRouter, useRoute } from "vue-router";
import { useArticleStore } from "@/store/article";
import { ref, computed, watch } from "vue";

const router = useRouter();

const articleStore = useArticleStore();
const articles = computed(() => articleStore.articles);
const totalPageCount = computed(() => articleStore.totalPageCount);
const input_title = ref("");
const page = ref(0);

watch(page, () => {
  console.log("페이지 변경");
  boardStore.getArticles(params.value);
});

const params = ref({
  title: input_title,
  pgno: page,
});

const search = () => {
  boardStore.getArticles(params.value);
};

const movewrite = () => {
  router.push({ name: "boardwrite" });
};

const moveDetail = async (articleNo) => {
  console.log(articleNo);
  await articleStore.getArticle(articleNo);
  router.push({ name: "boarddetail", params: { articleNo } });
};

articleStore.getArticles(params.value);
</script>

<template>
  <div style="padding: 5px"></div>
  <div class="boardtitle">여행 게시판</div>
  <div style="padding: 3px"></div>
  <v-row justify="end">
    <v-col>
      <v-btn class="write" size="large" @click="movewrite">글쓰기</v-btn>
    </v-col>
    <v-col cols="auto">
      <v-text-field
        class="titlesearch"
        label="제목으로 검색"
        append-inner-icon="mdi-magnify"
        @click:append-inner="moveDetail"
        variant="outlined"
      ></v-text-field>
    </v-col>
  </v-row>

  <div style="padding: 3px"> </div>
  <v-row style="margin-left: 8%; margin-right: 8%">
    <v-col cols="3" v-for="item in articles">
      <div class="boardlist_container">
        <div class="dcard" @click="moveDetail(item.id)">
          <div class="trigger"></div>
          <div class="trigger"></div>
          <div class="trigger"></div>
          <div class="trigger"></div>
          <div class="trigger"></div>
          <div class="trigger"></div>
          <div class="trigger"></div>
          <div class="trigger"></div>
          <div class="trigger"></div>

          <div
            class="paracard"
            :style="{ backgroundImage: `url(${item.imgUrl})` }"
          >
            <div class="frame">
              <h2 class="article-subject">{{ item.title }}</h2>
            </div>
          </div>
        </div>
      </div>
    </v-col>
  </v-row>
  <div style="padding-top: 100px"></div>
  <v-pagination :length="2"></v-pagination>
</template>

<style lang="scss">
.write {
  margin-left: 10%;
}
.titlesearch {
  margin-right: 40px;
  width: 300px;
}
.boardtitle {
  text-align: center;
  font-size: 30px;
  font-family: "Noto Sans KR", "NanumSquare", sans-serif !important;
  font-weight: 800;
}

* {
  transition: all 0.7s cubic-bezier(0.25, 0.8, 0.25, 1);
  font-family: "Noto Sans KR", "NanumSquare", sans-serif !important;
}

h1 {
  display: block;
  width: 100%;
  color: #fff;
  text-align: center;
}

.intro p {
  color: #fff;
  text-align: center;
  display: block;
  width: 100%;
}
.intro a {
  color: #88bcf5;
  border-bottom: 2px solid transparent;
  &:hover {
    text-decoration: none;
    border-bottom: 2px solid #88bcf5;
  }
}

.paracard {
  width: 100%;
  display: block;
  padding-top: 66.66666%;
  transform-style: preserve-3d;
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.25);
  border: 0px;
  background-size: 110% 110%;
  background-position: center center;
}

.dcard {
  position: relative;
  display: block;
  perspective: 500px;
  border-radius: 12px;
}
.col-md-12,
.col-md-4 {
  margin-bottom: 30px;
}

.col-md-12 .dcard {
  perspective: 3000px;
}

.frame {
  background: rgba(0, 0, 0, 0.2);
  display: block;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;

  &:after {
    width: calc(100% - 40px);
    border: 2px solid rgba(255, 255, 255, 0.5);
    height: calc(100% - 40px);
    content: "";
    display: block;
    left: 20px;
    top: 20px;
    position: absolute;
    transform: translateZ(30px);
  }
}

.dcard:hover .paracard .frame {
  background: rgba(0, 0, 0, 0);

  &:after {
    border: 2px solid rgba(255, 255, 255, 0.8);
  }
}

.article-subject {
  color: #fff;
  position: absolute;
  bottom: 10%;
  left: 10%;
  transform: translateZ(50px);
  text-align: center;
  font-size: 24px;
  text-shadow: 0px 0px 5px rgba(0, 0, 0, 1);
}

.trigger {
  position: absolute;
  height: 33.333333%;
  width: 33.333333%;
  display: block;
  z-index: 2;

  &:nth-child(1) {
    left: 0%;
    top: 0%;
    &:hover ~ .paracard {
      transform: rotateY(8deg) rotateX(-5deg);
      background-position: top left;
    }
  }
  &:nth-child(2) {
    left: 33.333333%;
    top: 0%;
    &:hover ~ .paracard {
      transform: rotateY(0deg) rotateX(-5deg);
      background-position: top center;
    }
  }
  &:nth-child(3) {
    left: 66.666666%;
    top: 0%;
    &:hover ~ .paracard {
      transform: rotateY(-8deg) rotateX(-5deg);
      background-position: top right;
    }
  }
  &:nth-child(4) {
    left: 0%;
    top: 33.333333%;
    &:hover ~ .paracard {
      transform: rotateY(8deg);
      background-position: center left;
    }
  }
  &:nth-child(5) {
    left: 33.333333%;
    top: 33.333333%;
    &:hover ~ .paracard {
      transform: rotateY(0deg) rotateX(0deg);
      background-position: center center;
    }
  }
  &:nth-child(6) {
    left: 66.666666%;
    top: 33.333333%;
    &:hover ~ .paracard {
      transform: rotateY(-8deg) rotateX(0deg);
      background-position: center right;
    }
  }
  &:nth-child(7) {
    left: 0%;
    top: 66.666666%;
    &:hover ~ .paracard {
      transform: rotateY(8deg) rotateX(5deg);
      background-position: bottom left;
    }
  }
  &:nth-child(8) {
    left: 33.333333%;
    top: 66.666666%;
    &:hover ~ .paracard {
      transform: rotateY(0deg) rotateX(5deg);
      background-position: bottom center;
    }
  }
  &:nth-child(9) {
    left: 66.666666%;
    top: 66.666666%;
    &:hover ~ .paracard {
      transform: rotateY(-8deg) rotateX(5deg);
      background-position: bottom right;
    }
  }
}
.buttons {
  width: 100%;
}
.buttons a {
  color: #88bcf5;
  border-bottom: 2px solid transparent;
  margin: 10px 20px;
  &:hover {
    text-decoration: none;
    border-bottom: 2px solid #88bcf5;
  }
}
</style>
