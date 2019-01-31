
// var cards = document.getElementById("window");
// var range = 40;
// var calcValue = function calcValue(a, b) {return (a / b * range - range / 2).toFixed(1);};
// var timeout = void 0;
// document.addEventListener('mousemove', function (_ref) {var x = _ref.x,y = _ref.y;
//     if (timeout) {
//         window.cancelAnimationFrame(timeout);
//     }
//
//     timeout = window.requestAnimationFrame(function () {
//         var yValue = calcValue(y, window.innerHeight);
//         var xValue = calcValue(x, window.innerWidth);
//         console.log(xValue, yValue);
//         cards.style.transform = "rotateX(" + yValue + "deg) rotateY(" + xValue + "deg)";
//     });
// }, false);
//
// function check_userName() {
//     var userName = document.getElementById("username").value;
//     var regName = /[a-zA-Z]\w{4,16}/;
//     if (userName === "" || userName.trim() === "") {
//         document.getElementById("err_name").innerHTML = "请输入用户名!";
//         return false;
//     } else if (!regName.test(userName)) {
//         document.getElementById("err_name").innerHTML = "由英文字母和数字组成的4-16位字符!";
//         return false;
//     } else {
//         document.getElementById("err_name").innerHTML = "ok!";
//         return true;
//     }
// }
// //验证邮箱
// function check_email() {
//     var email = document.getElementById("email").value;
//     var regEmail = /^\w+@\w+((\.\w+)+)$/;
//     if (email === "" || email.trim() === "") {
//         document.getElementById("err_email").innerHTML = "请输入邮箱!";
//         return false;
//     } else if (!regEmail.test(email)) {
//         document.getElementById("err_email").innerHTML = "邮箱账号@域名!";
//         return false;
//     } else {
//         document.getElementById("err_email").innerHTML = "ok!";
//         return true;
//     }
// }
// //验证密码
// function check_pwd() {
//     var pwd = document.getElementById("password").value;
//     var regPwd = /^\w{4,10}$/;
//     if (pwd === "" || pwd.trim() === "") {
//         document.getElementById("err_pwd").innerHTML = "请输入密码!";
//         return false;
//     } else if (!regPwd.test(pwd)) {
//         document.getElementById("err_pwd").innerHTML = "格式错误!";
//         return false;
//     } else {
//         document.getElementById("err_pwd").innerHTML = "ok!";
//         return true;
//     }
// }
// //确认密码
// function check_pwd2() {
//     var pwd = document.getElementById("password").value;
//     var pwd2 = document.getElementById("password1").value;
//     if (pwd2 === "" || pwd2.trim() === "") {
//         document.getElementById("err_pwd2").innerHTML = "请输入密码!";
//         return false;
//     } else if (pwd2!==pwd) {
//         document.getElementById("err_pwd2").innerHTML = "两次输入密码不一致!";
//         return false;
//     } else {
//         document.getElementById("err_pwd2").innerHTML = "ok!";
//         return true;
//     }
// }

function btn(){
    var email= document.getElementById("email").value;
    var user = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var password1 = document.getElementById("password1").value;
    if (email === "") {
        document.getElementById("mail").innerHTML = "请输入正确的邮箱！";
        return false;
    }
    if (user ==="") {
        document.getElementById("name").innerHTML = "请输入正确的用户名！";
        return false;
    }
    if (password ==="") {
        document.getElementById("pwd").innerHTML = "密码不能为空！";
        return false;
    }

    var ee = /^\w{6,12}$/;
    if (!ee.test(password)) {
        alert('密码必须是6-12位字母、数字、下划线');
        return false;
    }
    if (password !== password1) {
        document.getElementById("pwd1").innerHTML = "两次密码不同！";
        return false;
    } else {
        alert('注册成功！');
    }

}
