require('./bootstrap');

window.Vue = require('vue');
window.axios = require('axios');


Vue.component('example-component', require('./components/ExampleComponent.vue'));
Vue.component('users', require('./components/Users.vue'));
Vue.component('add-user', require('./components/AddUser.vue'));
Vue.component('edit-user', require('./components/EditUser.vue'));


const app = new Vue({
    el: '#app'
});
