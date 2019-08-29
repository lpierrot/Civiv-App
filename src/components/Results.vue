<template>
  <div class="results">
    <ul class="results" v-if="officials && officials.length > 0">
      <li class="item" v-for="(item,index) of officials" :key="index">
        <p>
          <strong>{{item.name}}</strong>
        </p>
        <!-- <p>{{item.address}}</p>
        <p>{{item.phones}}</p> -->
        <p>{{item.party}}</p>
        <p v-if="item.photoUrl && item.photoUrl.indexOf('https') >-1">
          <img :src="item.photoUrl" height="100" width="100" :alt="item.name" />
        </p>
        <p v-else>
          <i class="icon far fa-surprise"></i>
        </p>
      </li>
    </ul>

    <div class="no-results" v-else-if="officials && officials.length==0">
      <b>No results found, Please adjust your search.</b>
      <ul class="errors" v-if="errors && errors.length > 0">
        <li v-for="(error,index) of errors" :key="index">{{error.message}}</li>
      </ul>
    </div>
  </div>
</template>
<script>
import Home from "@/components/Home";
import {API} from '@/common/api';
import axios from "axios";
export default {
  name: "Home",
  data() {
    return {
      results: null,
      errors: [],
      zipcode: '',
      officials: []
    }
  },
  methods: {
    // findRepresentative: function () {
    //   API.get('', {
    //     params: {
    //         address: this.zipcode
    //     }
    //   })

    findRepresentative: function() {
      this.officials = []
      axios
        .get("https://www.googleapis.com/civicinfo/v2/representatives", {
          params: {
            key: 'AIzaSyC2qhfHJqJDSsQ9B9wjLjN6FtW8-jDeI8k',
            address: this.zipcode
          }
        })
        .then(response => {
          this.results = response.data;
          if (this.results.officials) {
            this.officials = this.results.officials
            this.zipcode = ''
          }
          console.log ('officials',this.officials)
        })
        .catch(error => {
          this.errors.push(error);
        });
    }
  }
};
</script>


<style scoped>
</style>>

