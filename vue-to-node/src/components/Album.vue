<template>
    <div>
        <h1 class="text-center font-mono font-bold text-5xl my-4">Albums: </h1>
        <table class="border-collapse text-sm table-auto">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                    Artist
                </th>
                <th scope="col" class="px-6 py-3">
                    Album
                </th>
                <!-- <th scope="col" class="px-6 py-3">
                    Date Released
                </th>
                <th scope="col" class="px-6 py-3">
                    Date Updated
                </th> -->
                <th scope="col" class="px-6 py-3">
                    Action
                </th>
            </tr>
          </thead>
          <tbody class="bg-white dark:bg-slate-800">
            <tr>
                <td class="px-2 py-1"><input type="text" v-model="artist" name="artist" id="artist" class="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Artist Name"></td>
                <td class="px-2 py-1"><input type="text" v-model="album" name="album" id="album" class="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Album Name"></td>
                <!-- <td class="px-2 py-1"><input type="text" v-model="dateReleased" name="dateReleased" id="dateReleased" class="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Date Released"></td>
                <td class="px-2 py-1"><input type="text" v-model="dateModified" name="dateModified" id="dateModified" class="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Date Modified"></td> -->
                <!-- <td class="px-2 py-1"><input type="text" name="" id="" class="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Artist Name"></td> -->
                <td class="px-2 py-1"><button type="button" class="w-full hover:bg-purple-500 px-4 py-2 my-2 font-semibold text-sm bg-white text-slate-700 border border-slate-300 rounded-md shadow-sm ring-2 ring-offset-4 ring-offset-slate-50 ring-purple-500 dark:bg-slate-700 dark:text-slate-200 dark:border-transparent dark:ring-offset-slate-900" @click="storeAlbums">SAVE</button></td>
            </tr>
            <tr v-for="album in albums" v-bind:key="album.Artist"> 
              <th class="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400" scope="row">{{album.artist}}</th>
              <td class="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400">{{album.album}}</td>
              <!-- <td class="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400">{{album['Date Released']}}</td>
              <td class="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400">{{album['Last Update']}}</td> -->
              <td class="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400 grid grid-cols-2 gap-4">
                <button type="button" @click="getAlbumByID(album.id)" class="hover:bg-green-500 px-4 py-2 font-semibold text-sm bg-white text-slate-700 border border-slate-300 rounded-md shadow-sm ring-2 ring-offset-4 ring-offset-slate-50 ring-green-500 dark:bg-slate-700 dark:text-slate-200 dark:border-transparent dark:ring-offset-slate-900">EDIT</button>
                <button type="button" @click="getAlbumByID(album.id)" class="hover:bg-red-500 px-4 py-2 font-semibold text-sm bg-white text-slate-700 border border-slate-300 rounded-md shadow-sm ring-2 ring-offset-4 ring-offset-slate-50 ring-red-500 dark:bg-slate-700 dark:text-slate-200 dark:border-transparent dark:ring-offset-slate-900">DELETE</button>
              </td>
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
                albums: null,
                albumById: null,
                artist: '', // Add this line
                album: '', // Add this line
                dateReleased: '', // Add this line
                dateModified: '' // Add this line
            };
        },
        created: function() {
            this.fetchAlbums();
        },  
        methods: {
            async fetchAlbums(){
                try {
                    axios
                    // .get('http://jsonplaceholder.typicode.com/users')
                    .get('http://localhost:8080/album/getAlbums')
                    .then(res => {
                        this.albums = res.data;
                    })
                } catch (error) {
                    console.error('Error fetching albums:', error);
                }
            },
            async storeAlbums(){
                try {
                    // axios({
                    //     method: 'post',
                    //     url: 'http://localhost:8080/album/storeAlbum',
                    //     data: {
                    //         artist: this.artist,
                    //         album: this.album
                    //     }
                    // }).then((res) => {
                    //     this.fetchAlbums();
                    // });
                    axios
                        .post('http://localhost:8080/album/storeAlbum', {artist: this.artist, album: this.album})
                        .then((res) => {
                            this.fetchAlbums();
                        })
                } catch (error) {
                    console.error('Error storing album:', error);
                }
            },
            // async getAlbumByID(id){
            //     try {
            //         axios
            //             .get(`http://localhost:8080/album/getAlbumById/${id}`)
            //             // .then(res => {
            //             //     this.albumById = res.data;
            //             // })
            //     } catch (error) {
            //         console.error('Error fetching album:', error);
            //     }
            // }
            async getAlbumByID(id) {
                try {
                    const response = await axios.get(`http://localhost:8080/album/getAlbumById/${id}`);
                    this.albumById = response.data;
                } catch (error) {
                    console.error('Error fetching album:', error);
                }
            }
        }
    }
</script>

<style>
    h3 {
        margin-bottom: 5%;
    }
</style>