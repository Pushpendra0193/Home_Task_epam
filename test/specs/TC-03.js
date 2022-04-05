const axios = require('axios');
const data ={
    name: "EPAM",
    job: "tester"
}

axios.post('https://reqres.in/api/users',data).then(res =>{
    console.log(`Status code:${res.status}`);
    console.log(`Body:${JSON.stringify(res.data)}`);
}).catch(err =>{
    console.log(err)
})