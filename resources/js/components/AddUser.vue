<template>
    <div>
        <h2>Add User</h2>
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
                <label class="control-label col-sm-2" for="pass">Password</label>
                <div>
                    <input type="password" class="form-control" id="pass" name="password" placeholder="Password"
                           v-model="password">
                </div>

            </div>
            <div class="form-group">

                <div class="col-sm-offset-2 col-sm-10">
                    <button type="button" class="btn btn-dark" v-on:click="addUser">Save</button>
                </div>

            </div>
        </form>
    </div>

</template>

<script>

    export default {
        data() {
            return {
                name: '',
                email: '',
                password: ''
            }
        },
        methods: {
            addUser() {
                axios.post('/api/users', {
                    name: this.name,
                    email: this.email,
                    password: this.password,
                }).then(response => {
                    if (response.data = 'success') {
                        this.name = '';
                        this.email = '';
                        this.password = '';
                        window.location.href = '/users';
                    }
                }).catch(error => {
                    console.log(error)
                })
            }

        }
    }

</script>