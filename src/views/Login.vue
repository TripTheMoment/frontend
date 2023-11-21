<script setup>
import router from "@/router";
import { ref } from "vue";
import { useAuthStore } from "@/store/auth";
const authStore = useAuthStore();

const moveSignUp = () => {
  router.push({ name: "signup" });
};

const loginForm = ref({
  email: "",
  password: "",
});

const login = async () => {
  try {
    await authStore.login(loginForm.value);
    router.push("/");
  } catch (error) {
    console.log("로그인 실패 에러:", error);
    alert("아이디 또는 비밀번호가 일치하지 않습니다.");
  }
};
</script>

<template>
  <body>
    <div class="form">
      <div style="padding: 2px"> </div>
      <p style="font-size: 25px">로그인</p>
      <div style="padding: 5px"> </div>
      <form @submit.prevent="login" type="post">
        <input
          type="text"
          name="email"
          placeholder="이메일"
          v-model="loginForm.email"
        />
        <input
          type="password"
          name="password"
          placeholder="비밀번호"
          v-model="loginForm.password"
        />
        <button type="submit">로그인</button>
        <p class="message">
          Not registered?
          <a style="cursor: pointer" @click="moveSignUp()">Create an account</a>
        </p>
      </form>
    </div>
  </body>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap");

* {
  font-family: "Noto Sans KR", "NanumSquare", sans-serif !important;
}
body {
  padding: 0;
  margin: 0;
  /* background: url(background.jpg) no-repeat;
  background-size: cover; */
}

/*login form css*/
.form {
  font-family: "Roboto", sans-serif;
  position: relative;
  z-index: 1;
  background: #ffffff;
  opacity: 99%;
  max-width: 400px;
  margin: 200px auto 100px;
  padding: 10px 45px 30px 45px;
  text-align: center;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
  border-radius: 10px;
}
.form p {
  font-size: 15px;
  padding: 1px;
  text-align: center;
}
.form input {
  outline: 0;
  border-radius: 10px;
  background: #f2f2f2;
  width: 100%;
  border: 0;
  margin: 0 0 15px;
  padding: 15px;
  box-sizing: border-box;
  font-size: 14px;
}
.form input:hover {
  background-color: #d3f8f9;
  transition: all 1s ease 0s;
}
.form input:focus {
  background-color: #d3f8f9;
  transition: all 1s ease 0s;
}
.form button {
  text-transform: uppercase;
  outline: 0;
  border-radius: 10px;
  background: #1adbe5;
  width: 100%;
  border: 0;
  padding: 15px;
  color: #ffffff;
  font-size: 14px;
  cursor: pointer;
}
.form button:hover,
.form button:active,
.form button:focus {
  background-color: #06c5cf;
  transition: all 1s ease 0s;
}
.form .message {
  margin: 15px 0 0;
  color: #b3b3b3;
  font-size: 12px;
}
.form .message a {
  color: #06c5cf;
  text-decoration: none;
}
</style>
