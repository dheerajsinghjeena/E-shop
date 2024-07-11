

$(document).on('click','#button1',function(){
    let username=$('#username').val()
    let password=$('#password').val()
console.log(username,'username')
console.log(password,'password')



$.ajax({
    url: '/login',
    method: 'POST',
    data: {
        username: username,
        password: password
    },
    success: function(response) {

        alert('login')
    },
    error: function(xhr, status, error) {
        console.error('An error occurred:', error);
    }
});


})