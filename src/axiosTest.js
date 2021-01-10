import axios from 'axios';

axios.get(`https://jsonplaceholder.typicode.com/users`)
    .then(res => {
        const datat = res.data;
        cosole.log(datat);
    })