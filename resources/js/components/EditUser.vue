<template>
    <div>
        <h2>Edit User</h2>
        <form class="form-horizontal" action="/users" method="post">
            <div class="form-group">
                <label class="control-label col-sm-2" for="name">Name</label>
                <div>
                    <input type="text " class="form-control" id="name" name="name" placeholder="User Name"
                           v-model="name">
                </div>
            </div>
            <div class="form-group">
                <label class="control-label col-sm-2" for="email">Email</label>
                <div>
                    <input type="text " class="form-control" id="email" name="email" placeholder="User Email"
                           v-model="email">
                </div>
            </div>
            <div class="form-group">

                <div class="col-sm-offset-2 col-sm-10">
                    <button type="button" class="btn btn-dark" v-on:click="editUser">Save</button>
                </div>

            </div>
        </form>
    </div>
</template>
<script>

    export default {
        props: ['id'],
        data() {
            return {
                name: '',
                email: '',

            }
        },
        mounted() {
            axios.get('/api/users/' + this.id).then(response => {
                this.name = response.data.name;
                this.email = response.data.email;


            }).catch(error => {
                console.log(error);
            })
        },
        methods: {
            editUser() {
                axios.put('/api/users/' + this.id, {
                    name: this.name,
                    email: this.email,
                }).then(response => {
                    window.location.href = '/users';

                }).catch(error => {
                    console.log(error)
                })

            }
        }
    }
</script>