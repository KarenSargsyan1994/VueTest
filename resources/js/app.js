require('./bootstrap');

window.Vue = require('vue');
window.axios = require('axios');


var ComponentExample=(require('./components/ExampleComponent.vue'));
var ComponentUsers=(require('./components/Users.vue'));
var ComponentAddUser=(require('./components/AddUser.vue'));
var ComponentEditUser=(require('./components/EditUser.vue'));


const app = new Vue({
    el: '#app',
    components:{
        'example-component':ComponentExample,
        'users':ComponentUsers,
        'add-user':ComponentAddUser,
        'edit-user':ComponentEditUser,
    }
});
