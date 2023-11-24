import { ref } from "vue";
import { defineStore } from "pinia";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import router from "@/router";

export const useAuthStore = defineStore(
  "auth",
  () => {
    //login User의 정보
    const user = ref({
      userEmail: "",
      userName: "",
      bookmarks: [],
      articles: [],
      followerCnt: "",
      followingCnt: "",
      profileImg: "",
      userId: "",
    });
    const otherUser = ref({
      userName: "",
      bookmarks: [],
      articles: [],
      followerCnt: "",
      followingCnt: "",
      profileImg: "",
      userId: "",
      followYn: "",
    });
    const follows = ref({
      followers: "",
      followings: "",
    });

    const accessToken = ref(""); //jwt 토큰 정보W
    const refreshToken = ref(""); //jwt 토큰 정보W
    const bookmarkTotalPageCount = ref(0);
    const articlesTotalPageCount = ref(0);
    const otherbookmarkTotalPageCount = ref(0);

    const login = async (loginForm) => {
      console.log("로그인 form : ", loginForm);

      const response = await axios.post(
        "http://localhost/auth/login",
        loginForm
      );
      if (response.data.success === false) {
        throw error;
      } else {
        accessToken.value = response.headers.authorization;
        refreshToken.value = response.headers.refreshtoken;

        console.log("accessToken :", accessToken.value);
        console.log("refreshToken :", refreshToken.value);
      }

      // const decoded = jwtDecode(accessToken.value); //토큰에서 유저정보 추출하여 유저정보 저장
      // console.log("디코딩된 토큰 정보 :", decoded);
      // console.log(Date.now() / 1000);
      userDetail();
    };

    const logout = () => {
      clearUser();
    };
    const checkPassword = async (password) => {
      const form = { password: password };
      console.log(form);

      const { data } = await axios.post(
        `http://localhost/members/password`,
        form,
        {
          headers: {
            Authorization: accessToken.value,
          },
        }
      );
      console.log(data.success);
      if (data.success) {
        router.push({ name: "myinfoedit" });
      } else {
        alert("비밀번호가 틀렸습니다!");
      }
    };

    const clearUser = () => {
      user.value.userEmail = "";
      user.value.userName = "";
      user.value.bookmarks = [];
      user.value.followerCnt = "";
      user.value.followingCnt = "";
      user.value.profileImg = "";
      user.value.userId = "";
      accessToken.value = "";
      refreshToken.value = "";
    };

    const signUp = async (signUpForm) => {
      console.log("signUp() 요청, 등록데이터 : ", signUpForm);
      const form = {
        email: signUpForm.email,
        password: signUpForm.password,
        name: signUpForm.name,
      };
      await axios.post("http://localhost/members/", form);
    };

    const editInfo = async (name, password) => {
      const form = {
        name: name,
        password: password,
      };
      console.log(form);
      await axios.patch("http://localhost/members/detail", form, {
        headers: {
          Authorization: accessToken.value,
        },
      });
    };
    const getMyrBookmarks = async (memberId, pgno) => {
      const { data } = await axios.get(
        `http://localhost/members/${memberId}/bookmarks?page=${pgno - 1}`,
        {
          headers: {
            Authorization: accessToken.value,
          },
        }
      );
      bookmarkTotalPageCount.value = data.data.totalPages;
      user.value.bookmarks = data.data.content;
    };
    const userDetail = async () => {
      const { data } = await axios.get("http://localhost/members/detail", {
        headers: {
          Authorization: accessToken.value,
        },
      });
      console.log("유저 상제 정보 조회 : ", data.data);
      user.value.userEmail = data.data.email;
      user.value.userName = data.data.name;
      user.value.bookmarks = data.data.bookmarks;
      user.value.followerCnt = data.data.followerCnt;
      user.value.followingCnt = data.data.followingCnt;
      user.value.profileImg = data.data.profileImgUrl;
      user.value.userId = data.data.id;
      console.log("유저 상제 정보 조회 : ", user);
      getMyrBookmarks(data.data.id, 1);
      getUserArticles(data.data.id, 1);
    };

    const userFollowers = async () => {
      const { data } = await axios.get(
        "http://localhost/members/follows/followers",
        {
          headers: {
            Authorization: accessToken.value,
          },
        }
      );

      follows.value.followers = data.data;
      console.log("유저 팔로워 조회 : ", follows.value.followers);
    };

    const userFollowings = async () => {
      const { data } = await axios.get(
        "http://localhost/members/follows/followings",
        {
          headers: {
            Authorization: accessToken.value,
          },
        }
      );
      console.log("유저 팔로잉 조회 : ", data.data);
      follows.value.followings = data.data;
    };

    const getUserBookmarks = async (memberId, pgno) => {
      const { data } = await axios.get(
        `http://localhost/members/${memberId}/bookmarks?page=${pgno - 1}`,
        {
          headers: {
            Authorization: accessToken.value,
          },
        }
      );
      console.log("다른 사용자 조회 : ", data.data);

      otherUser.value.bookmarks = data.data.content;
      otherbookmarkTotalPageCount.value = data.data.totalPages;
    };

    const getUserInfo = async (memberId) => {
      const { data } = await axios.get(`http://localhost/members/${memberId}`, {
        headers: {
          Authorization: accessToken.value,
        },
      });
      console.log("다른 사용자 조회 : ", data.data);
      otherUser.value.userName = data.data.name;
      otherUser.value.bookmarks = data.data.bookmarks;
      otherUser.value.followerCnt = data.data.followerCnt;
      otherUser.value.followingCnt = data.data.followingCnt;
      otherUser.value.profileImg = data.data.profileImgUrl;
      otherUser.value.userId = data.data.id;
      otherUser.value.followYn = data.data.followYn;

      getUserBookmarks(memberId, 1);
    };

    const writeArticle = async (writeForm, file) => {
      console.log("registArticle() 요청, 등록데이터 : ", writeForm, file);
      var form = new FormData();

      // form.append("file", file);
      Array.from(file).forEach((el) => {
        form.append("file", el);
      });
      form.append(
        "form",
        new Blob([JSON.stringify(writeForm)], { type: "application/json" })
      );
      console.log("registArticle() 요청, 등록데이터 : ", writeForm);
      console.log("registArticle() 요청, 등록데이터 : ", file);
      await axios.post("http://localhost/articles", form, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: accessToken.value,
        },
      });
    };

    const registReview = async (writeForm, articleNo) => {
      console.log("registReview() 요청, 등록데이터 : ", writeForm, articleNo);
      const form = { score: writeForm.score, content: writeForm.content };
      console.log("form : ", form);
      await axios.post(
        `http://localhost/attractions/${articleNo}/reviews`,
        form,
        {
          headers: {
            Authorization: accessToken.value,
          },
        }
      );
    };

    const registComment = async (writeForm, articleNo) => {
      console.log("registComment() 요청, 등록데이터 : ", writeForm, articleNo);
      const form = { content: writeForm.content };
      console.log("form : ", form);
      await axios.post(`http://localhost/articles/${articleNo}/replies`, form, {
        headers: {
          Authorization: accessToken.value,
        },
      });
    };
    const registBookmark = async (attractionNo) => {
      console.log(
        "registBookmark() 요청 : ",
        `http://localhost/attractions/${attractionNo}/bookmarks`
      );
      console.log(accessToken.value);
      await axios.get(
        `http://localhost/attractions/${attractionNo}/bookmarks`,
        {
          headers: {
            Authorization: accessToken.value,
          },
        }
      );
    };

    const getUserArticles = async (memberId, pgno) => {
      const { data } = await axios.get(
        `http://localhost/members/${memberId}/articles?page=${pgno - 1}`,
        {
          headers: {
            Authorization: accessToken.value,
          },
        }
      );
      articlesTotalPageCount.value = data.data.totalPages;
      user.value.articles = data.data.content;
    };
    const followUser = async (memberId) => {
      const { data } = await axios.get(
        `http://localhost/members/follows/${memberId}`,
        {
          headers: {
            Authorization: accessToken.value,
          },
        }
      );
    };
    const cancelFollow = async (memberId) => {
      const { data } = await axios.delete(
        `http://localhost/members/follows/${memberId}`,
        {
          headers: {
            Authorization: accessToken.value,
          },
        }
      );
    };
    const changeImg = async (file) => {
      console.log("changeImg() 요청, 등록데이터 : ", file);
      var form = new FormData();

      Array.from(file).forEach((el) => {
        form.append("file", el);
      });

      await axios.patch("http://localhost/members/profile", form, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: accessToken.value,
        },
      });
    };
    const deleteArticle = async (articleNo) => {
      console.log("deleteArticle() 요청, 번호 : ", articleNo);

      await axios.delete(`http://localhost/articles/${articleNo}`, {
        headers: {
          Authorization: accessToken.value,
        },
      });
    };
    return {
      user,
      follows,
      userDetail,
      userFollowers,
      userFollowings,
      accessToken,
      refreshToken,
      getUserBookmarks,
      getMyrBookmarks,
      bookmarkTotalPageCount,
      getUserInfo,
      otherUser,
      login,
      logout,
      signUp,
      clearUser,
      writeArticle,
      registReview,
      registComment,
      checkPassword,
      editInfo,
      registBookmark,
      getUserArticles,
      followUser,
      cancelFollow,
      changeImg,
      deleteArticle,
    };
  },

  //새로고침시 데이터 유지를 위한 설정(localStorage에 저장해서 불러오는 방식)
  {
    persist: true,
  }
  //sessionStorage 사용하고 싶은 경우
  // {
  //   persist: {
  //     storage: sessionStorage,
  //   },
  // }
);
