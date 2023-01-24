import request from "/js/lib/request.js"

const frm = document.querySelector("#loginfrm")

const submitHandler = async (e) => {
    try {
        e.preventDefault()
        const { userid, userpw } = e.target
        console.log(userid.value)
        const response = await request.post("/check/auth", {
            userid: userid.value,
            userpw: userpw.value,
        })
        console.log(response)
        if (response.status === 200) {
            document.cookie = `token=${response.data.token};`
            location.href = "/"
        }
    } catch (e) {
        alert("아이디와 패스워드가 일치하지 않는다.")
    }
}

frm.addEventListener("submit", submitHandler)
