const loginfrm = document.querySelector("#loginfrm");

const loginHandler = async (e) => {
  try {
    e.preventDefault();
    console.log(request);
    const { userid, userpw } = e.target;
    // console.log(e.target);
    const response = await request.post("/auth", {
      userid: userid.value,
      userpw: userpw.value,
    });

    if (response.status === 200) {
      document.cookie = `token=${response.data.token};`;
      location.href = "/";
      // console.log(document.cookie);
    }
  } catch (e) {
    alert("아이디 혹은 비밀번호를 확인하세요");
  }
};

loginfrm.addEventListener("submit", loginHandler);

// 백 서버랑 연동해봐야 될듯,,,,,,
