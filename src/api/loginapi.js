var axios = require('axios');

export default function checkLogin(username,password){
    debugger;
    var data = { "EmailID": username, "Password": password };

    var config = {
        method: 'post',
        url: 'https://dfd.zoifintech.com/Login',
        headers: {
            'Content-Type': 'application/json'
        },
        data: data
    };
    return axios(config)
        .then(function (response) {
            return response.data
        })
        .catch(function (error) {
            console.log(error);
        });
}
