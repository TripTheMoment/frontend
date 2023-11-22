import { ref } from "vue";
import { defineStore } from "pinia";
import axios from "axios";
import { jwtDecode } from "jwt-decode";

export const useAuthStore = defineStore(
  "auth",
  () => {
    //login User의 정보
    const user = ref({
      userEmail: "",
      userName: "",
      bookmarks: [],
      followerCnt: "",
      followingCnt: "",
      profileImg: "",
    });
    const otherUser = ref({
      userName: "",
      bookmarks: [],
      articles: [],
      followerCnt: "",
      followingCnt: "",
      profileImg: "",
    });
    const follows = ref({
      followers: "",
      followings: "",
    });

    const accessToken = ref(""); //jwt 토큰 정보W
    const refreshToken = ref(""); //jwt 토큰 정보W

    const login = async (loginForm) => {
      const { headers } = await axios.post(
        "http://localhost/auth/login",
        loginForm
      );

      // const { headers } = await axios.post(
      //   "http://localhost/auth/login",
      //   loginForm
      // );

      console.log("로그인 요청 후 응답 데이터:", headers);

      accessToken.value = headers.authorization;
      refreshToken.value = headers.refreshtoken;

      console.log("accessToken :", accessToken.value);
      console.log("refreshToken :", refreshToken.value);

      // const decoded = jwtDecode(accessToken.value); //토큰에서 유저정보 추출하여 유저정보 저장
      // console.log("디코딩된 토큰 정보 :", decoded);
      // console.log(Date.now() / 1000);
      userDetail();
    };

    const logout = () => {
      clearUser();
    };

    const clearUser = () => {
      user.value.userEmail = "";
      user.value.userName = "";
      user.value.bookmarks = [];
      user.value.followerCnt = "";
      user.value.followingCnt = "";
      user.value.profileImg = "";
      accessToken.value = "";
      refreshToken.value = "";
    };
    const getMyrBookmarks = async (memberId) => {
      const { data } = await axios.get(
        `http://localhost/members/${memberId}/bookmarks`,
        {
          headers: {
            Authorization: accessToken.value,
            RefreshToken: refreshToken.value,
          },
        }
      );

      user.value.bookmarks = data.data.content;
    };
    const userDetail = async () => {
      const { data } = await axios.get("http://localhost/members/detail", {
        headers: {
          Authorization: accessToken.value,
          RefreshToken: refreshToken.value,
        },
      });
      console.log("유저 상제 정보 조회 : ", data.data);
      user.value.userEmail = data.data.email;
      user.value.userName = data.data.name;
      user.value.bookmarks = data.data.bookmarks;
      user.value.followerCnt = data.data.followerCnt;
      user.value.followingCnt = data.data.followingCnt;
      user.value.profileImg = data.data.profileImgUrl;
      console.log("유저 상제 정보 조회 : ", user);
      getMyrBookmarks(data.data.id);
    };

    const userFollowers = async () => {
      const { data } = await axios.get(
        "http://localhost/members/follows/followers",
        {
          headers: {
            Authorization: accessToken.value,
            RefreshToken: refreshToken.value,
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
            RefreshToken: refreshToken.value,
          },
        }
      );
      console.log("유저 팔로잉 조회 : ", data.data);
      follows.value.followings = data.data;
    };

    const getUserBookmarks = async (memberId) => {
      const { data } = await axios.get(
        `http://localhost/members/${memberId}/bookmarks`,
        {
          headers: {
            Authorization: accessToken.value,
            RefreshToken: refreshToken.value,
          },
        }
      );
      console.log("다른 사용자 조회 : ", data.data);

      otherUser.value.bookmarks = data.data.content;
    };

    const getUserInfo = async (memberId) => {
      const { data } = await axios.get(`http://localhost/members/${memberId}`, {
        headers: {
          Authorization: accessToken.value,
          RefreshToken: refreshToken.value,
        },
      });
      console.log("다른 사용자 조회 : ", data.data);
      otherUser.value.userName = data.data.name;
      otherUser.value.bookmarks = data.data.bookmarks;
      otherUser.value.followerCnt = data.data.followerCnt;
      otherUser.value.followingCnt = data.data.followingCnt;
      otherUser.value.profileImg = data.data.profileImgUrl;
      getUserBookmarks(memberId);
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
      getUserInfo,
      otherUser,
      login,
      logout,
      clearUser,
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
