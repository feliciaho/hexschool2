$(document).ready(function(){
    $(".send").on("click", signUp);

    function signUp(){
        var account = $(".accountStr").val();
        var password = $(".passwordStr").val();
        var sendData = {
            "account": account,
            "password": password
        };

        $.ajax({
            type: 'POST',
            url: "https://hexschool-tutorial.herokuapp.com/api/signup",
            data: JSON.stringify(sendData),  
            // 接收是json格式
            dataType: "json",
            // 傳出格式是json
            contentType: "application/json",
            success: function(response){
                console.log(response);
                if(response.message ==="帳號註冊成功"){
                    alert("註冊成功");
                }else{
                    alert("註冊失敗");
                }
            },
        });
    }
});
