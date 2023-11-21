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
    });
    const accessToken = ref(""); //jwt 토큰 정보W
    const refreshToken = ref(""); //jwt 토큰 정보W
    const login = async (loginForm) => {
      const { headers } = await axios.post(
        "http://localhost/auth/login",
        loginForm
      );
      console.log("로그인 요청 후 응답 데이터:", headers);

      accessToken.value = headers.authorization;
      refreshToken.value = headers.refreshtoken;

      console.log("accessToken :", accessToken.value);
      console.log("refreshToken :", refreshToken.value);
      // const decoded = jwtDecode(data.token); //토큰에서 유저정보 추출하여 유저정보 저장
      // console.log("디코딩된 토큰 정보 :", decoded);
      // user.value.userEmail = decoded.userId;
      // user.value.userName = decoded.userName;
      // user.value.role = decoded.role;
    };

    const logout = () => {
      clearUser();
    };

    const clearUser = () => {
      user.value.userEmail = "";
      user.value.userName = "";
      token.value = "";
    };

    return { user, accessToken, refreshToken, login, logout, clearUser };
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
