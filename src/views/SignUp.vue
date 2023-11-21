<script setup>
const emailRules = [
  (v) => !!v || "이름을 입력해주세요",
  (v) => (v && v.length <= 6) || "이름은 6글자를 넘을 수 없습니다",
];

const alert = () => {
  console.log("dfdf");
};
</script>

<template>
  <body>
    <div class="form">
      <div style="padding: 2px"> </div>
      <p style="font-size: 25px">회원가입</p>
      <div style="padding: 5px"> </div>
      <form>
        <input
          type="text"
          name="email"
          :rules="emailRules"
          placeholder="이메일"
          @blur="alert"
        />

        <input type="password" name="password" placeholder="비밀번호" />
        <input
          type="password"
          name="passwordCheck"
          placeholder="비밀번호 확인"
        />
        <input type="text" name="username" placeholder="이름" />
        <button type="submit">가입하기</button>
      </form>
      <div style="padding: 3px"></div>
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

/*이메일 형식 체크 시작*/

/*이메일 형식 체크 끝*/
</style>
