

function btn() {
    var user = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (user === "") {
        document.getElementById("name").innerHTML = "请输入邮箱或用户名！";
        return false;
    }
    if (password ==="") {
        document.getElementById("pwd").innerHTML = "请输入密码！";
        return false;
    }
    var ee = /^\w{6,12}$/;
    if (!ee.test(password)) {
        alert('密码必须是6-12位字母、数字、下划线');
        return false;
    }
}


