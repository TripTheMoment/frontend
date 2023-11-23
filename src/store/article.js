import { ref } from "vue";
import { defineStore } from "pinia";
import axios from "@/utils/boardAxios";

export const useArticleStore = defineStore("article", () => {
  /* ======목록 Start============== */
  const articles = ref([]);
  const totalPageCount = ref(0);
  const getArticles = async (params) => {
    const { data } = await axios.get(
      `http://localhost/articles?page=${params.pgno}&title=${params.title}`,
      params
    );
    console.log(
      `http://localhost/articles?page=${params.pgno}&title=${params.title}`
    );
    console.log("getArticles의 응답 데이터 : ", data.data);
    articles.value = data.data.content;
    totalPageCount.value = data.data.totalPages;
  };
  /* ======목록 End================ */

  /* ======상세 Start============== */
  const article = ref({});

  const getArticle = async (articleNo) => {
    console.log("getArticle 시작!!");
    const { data } = await axios.get(`http://localhost/articles/${articleNo}`);
    console.log(`getArticle(${articleNo})의 응답 데이터 : `, data.data);
    article.value = data.data;
  };
  /* ======상세 End============== */
  /* ======등록 Start================ */
  // const writeArticle = async (article) => {
  //   console.log("registArticle() 요청, 등록데이터 : ", article);
  //   return await axios.post("http://localhost/articles", article, {
  //     headers: authStore.accessToken.value,
  //   });
  // };
  /* ======등록 End================ */
  return {
    articles,
    totalPageCount,
    getArticles,
    article,
    getArticle,
  };
});
