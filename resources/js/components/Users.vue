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
                <td><button
                        type="button"
                        class="btn btn-danger"
                        @click="showModal(user.id)"
                >
                    Delete</button>
                </td>



            </tr>
            </tbody>


        </table>

        <div class="pagination">
            <button class="btn btn-light" v-on:click="paginationUser(pagination.prev_page_url)"
                    :disabled="!pagination.prev_page_url">
                <i class="fas fa-chevron-left"></i>
            </button>
            <button class="btn btn-light" v-on:click="paginationUser(pagination.first_page_url)"
                    :disabled="!pagination.prev_page_url">
               1
            </button>

           <span class="btn btn-light">{{pagination.current_page}}</span>
            <button class="btn btn-light" v-on:click="paginationUser(pagination.last_page_url)"
                    :disabled="!pagination.next_page_url">
            {{pagination.last_page}}
        </button>
            <button class="btn btn-light" v-on:click="paginationUser(pagination.next_page_url)"
                    :disabled="!pagination.next_page_url">
                <i class="fas fa-chevron-right"></i>
            </button>
        </div>





        <!-- use the modal component, pass in the prop -->
        <modal :userID="deletedUserID" v-show="isModalVisible"   @close="closeModal">
            <h3 slot="header">custom header</h3>

        </modal>
    </div>
</template>

<script>
    import modal from './modal.vue';
    export default {
        components: {
            modal,
        },
        data() {
            return {
                users: [],
                user: {
                    id: 0,
                    name: '',
                    email: '',
                },
                deletedUserID:5,
                url: '/api/users',
                pagination: [],
                isModalVisible:false
            }


        },
        mounted() {

            this.getUsers();

        },
        methods: {
            getUsers() {
                let $this = this;
                axios.get(this.url).then(response => {

                    this.users = response.data.data;
                    $this.makePagination(response.data);
                })
            },

            makePagination(data) {
                let pagination = {
                    current_page: data.current_page,
                    last_page: data.last_page,
                    first_page: data.first_page,
                    last_page_url:data.last_page_url,
                    first_page_url:data.first_page_url,
                    next_page_url: data.next_page_url,
                    prev_page_url: data.prev_page_url,

                };
                this.pagination = pagination;

            },
            paginationUser(url) {
                this.url = url;
                this.getUsers()
            },
            showModal(id) {

               this.deletedUserID=id;

                this.isModalVisible = true;
            },
            closeModal() {
                this.isModalVisible = false;
            }

        }
    }
</script>