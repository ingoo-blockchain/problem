const request = axios.create({
    baseURL: "http://127.0.0.1:3000",
    withCredentials: true,
})
const checkId = document.querySelector("#checkId")
const checkNick = document.querySelector("#checkNick")
const userid = document.querySelector("#userid")
const nickname = document.querySelector("#nickname")

const IDcheckHandler = async (e) => {
    // if (e.target.id == userid) {
    //     vari = userid
    // } else if (e.target.id == nickname) {
    //     vari = nickname
    // }
    let vari = e.target.id
    console.log(vari)
    const response = await request.get(`/check/?${vari}=${e.target.value}`)
    console.log(response.data)
    const { duplicate } = response.data
    if (vari === "userid" && duplicate) {
        checkId.style.color = "red"
        checkId.innerHTML = "X"
    } else {
        checkId.style.color = "green"
        checkId.innerHTML = "√"
    }
}
const checkHandler = async (e) => {
    let vari = e.target.id
    console.log(vari)
    const response = await request.get(`/check/?${vari}=${e.target.value}`)
    console.log(response.data)
    const { duplicate } = response.data
    if (vari === "nickname" && duplicate) {
        checkNick.style.color = "red"
        checkNick.innerHTML = "X"
    } else {
        checkNick.style.color = "green"
        checkNick.innerHTML = "√"
    }
}
userid.addEventListener("input", IDcheckHandler)
nickname.addEventListener("input", checkHandler)
