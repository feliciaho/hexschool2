var xhr = new XMLHttpRequest();
xhr.open("post","https://hex-escape-room.herokuapp.com/api/user/signup",true)
xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded")
xhr.send("email=abcdexx@gmail.com&password=12345678")