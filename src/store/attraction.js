import { ref } from "vue";
import { defineStore } from "pinia";
import axios from "@/utils/boardAxios";

export const useAttractionStore = defineStore("board", () => {
  /* ======목록 Start============== */
  const articles = ref([]);
  const totalPageCount = ref(0);
  const getArticles = async (params) => {
    const { data } = await axios.get(`/api/board`, {
      params,
    });
    console.log("getArticles의 응답 데이터 : ", data);

    articles.value = data.articles;
    totalPageCount.value = data.totalPageCount;
  };
  /* ======목록 End================ */

  /* ======상세 Start============== */
  const article = ref({});
  const getArticle = async (articleNo) => {
    const { data } = await axios.get(`/api/board/${articleNo}`);
    console.log(`getArticle(${articleNo})의 응답 데이터 : `, data);

    article.value = data;
  };
  /* ======상세 End============== */

  return {
    articles,
    totalPageCount,
    getArticles,
    article,
    getArticle,
  };
});
