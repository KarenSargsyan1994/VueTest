<template>
    <div>
        <h2>Users List</h2>
        <a href="users/create" class="btn btn-warning pull-right">addUser</a>
        <table class="table table-bordered">

            <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Edit</th>
                <th>Delete</th>

            </tr>
            </thead>
            <tbody>

            <tr v-for="user in users">
                <td>{{user.id}}</td>
                <td>{{user.name}}</td>
                <td>{{user.email}}</td>
                <td><a :href="'/users/'+user.id+'/edit'" class="btn btn-success">Edit</a></td>
                <td><a href="javascript:;" class="btn btn-danger" v-on:click="deleteUser(user.id)">Delete</a></td>


            </tr>
            </tbody>


        </table>

    </div>
</template>

<script>
    export default {
        data() {
            return {
                users: [],
                user: {
                    id: 0,
                    name: '',
                    email: '',
                }
            }


        },
        mounted() {

            this.getUsers();

        },
        methods: {
            getUsers() {

                axios.get('/api/users').then(response => {
                    this.users = response.data
                })
            },
            deleteUser(id) {
                axios.delete('/api/users/' + id).then(response => {
                    window.location.href = '/users';


                }).catch(error => {
                    console.log(error);
                })
            }

        }
    }
</script>