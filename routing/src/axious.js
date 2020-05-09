import axious from 'axios';

const instance = axious.create({       //copy of axious
    baseURL: 'https://jsonplaceholder.typicode.com'
}); 

//override
instance.defaults.headers.common['Authorization'] =  'AUTH TOKEN FROM INSTANCE';

//you can also use interceptors here

export default instance;


//imported in blog.js