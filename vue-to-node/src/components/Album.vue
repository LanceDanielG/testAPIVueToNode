<template>
    <div class="container">
        <h3> Albums: </h3>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">City</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="user in users" v-bind:key="user.Artist"> 
              <th scope="row">{{user.Artist}}</th>
              <td>{{user.Album}}</td>
              <td>{{user['Date Released']}}</td>
              <td>{{user['Last Update']}}</td>
            </tr>
          </tbody>
        </table> 
    </div>
</template>
  
<script>
    import axios from 'axios';
    
    export default {
        name: 'Albums',
        data() {
            return {
                users: null,
            };
        },
        created: function() {
        axios
            // .get('http://jsonplaceholder.typicode.com/users')
            .get('http://localhost:8080/album/getAlbums')
            .then(res => {
            this.users = res.data;
            })
        }
    }
</script>

<style>
    h3 {
        margin-bottom: 5%;
    }
</style>