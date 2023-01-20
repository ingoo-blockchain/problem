const axios = require("axios");

const request = axios.create({
  baseURL: "http://127.0.0.1:3000",
  withCredentials: true,
});

exports.signup = async (userInfo) => {
  /*console.log({ ...userInfo });
  {
    userId: 'asdf',
    userPw: 'asdf',
    userName: 'asdf',
    userBirth: '2023-01-04',
    userGender: '남자',
    userPhone: '010-4444-4444',
    userAddress: 'asdf',
    snsId: [ 'none', '' ]
  } */
  const response = await request.post("/users", { ...userInfo });
};
