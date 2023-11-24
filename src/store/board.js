import { ref, computed } from "vue";
import { defineStore } from "pinia";
import axios from "@/utils/boardAxios";

export const useBoardStore = defineStore("board", () => {
  /* ======목록 Start============== */
  const articles = ref([]);

  const totalPageCount = ref(0);
  const getArticles = async (params) => {
    const { data } = await axios.post(
      `http://localhost/attractions?page=${params.pgno-1}`,
      params
    );
    console.log(`http://localhost/attractions?page=${params.pgno}`);
    console.log("getArticles의 응답 데이터 : ", data.data);
    articles.value = data.data.content;
    totalPageCount.value = data.data.totalPages;
  };
  /* ======목록 End================ */

  /* ======상세 Start============== */
  const article = ref({});

  const getArticle = async (articleNo) => {
    console.log("getArticle 시작!!");
    const { data } = await axios.get(
      `http://localhost/attractions/${articleNo}`
    );
    console.log(`getArticle(${articleNo})의 응답 데이터 : `, data.data);
    article.value = data.data;
  };
  /* ======상세 End============== */

  /* ======등록 Start================ */
  const writeArticle = async (article) => {
    console.log("registArticle() 요청, 등록데이터 : ", article);
    return await axios.post(`/api/board`, article);
  };
  /* ======등록 End================ */

  /* ======수정 Start================ */
  const modifyArticle = async (article) => {
    console.log("modifyArticle() 요청, 수정데이터 : ", article);
    return await axios.put(`/api/board`, article);
  };

  /* ======수정 End================ */

  /* ======삭제 Start================ */
  const deleteArticle = async (articleNo) => {
    console.log("삭제 요청 보냄 삭제 글번호:", articleNo);
    return await axios.delete(`/api/board/${articleNo}`);
  };
  /* ======삭제 End================ */

  return {
    articles,
    totalPageCount,
    getArticles,
    article,
    getArticle,
    writeArticle,
    modifyArticle,
    deleteArticle,
  };
});
