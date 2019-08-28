<template>
  <div class="home">
    <h2>Civic App</h2>
    
  <form v-on:submit.prevent="findRepresentative">
      <p>
        Find Representative 
        <input type="text" v-model="zipcode" placeholder="Enter Zipcode"> 
        <button type="submit">Search</button>
      </p>
    </form>
    
    <ul class="results" v-if="officials && officials.length > 0">
      <li class="item" v-for="(item,index) of officials" :key='index'>
        <p>
          <strong>{{item.name}}</strong>
        </p>
        <p>{{item.party}}</p>
        <p v-if="item.photoUrl && item.photoUrl.indexOf('https') >-1">
          <img :src="item.photoUrl" height="100" width="100" :alt="item.name">
        </p>
        <p v-else><i class="icon far fa-surprise"></i></p>
      </li>
    </ul>
    <div class="no-results" v-else-if="officials && officials.length==0">
    </div>
    <!-- <h2>No results</h2>
    <p>Please adjust your search.</p> -->
    <ul class="errors" v-if="errors && errors.length > 0">
      <li v-for='(error,index) of errors' :key='index'>{{error.message}}</li>
    </ul>
  </div>
</template>

<script>
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.rhymesaurus {
  font-size: 1.4rem;
}
input[type="text"]{
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 1px solid #333;
  width: 300px;
  font-size: 1.4rem;
  color: #2c3e50;
  font-weight: 300;
  background: rgba(0,0,0,0.02);
  padding: 0.5rem;
}
button{
  background: #333;
  padding: 0.5rem;
  font-weight: 300;
  color: #fff;
  border: none;
  cursor: pointer;
  font-size: 1.4rem;
}
h1, h2 {
  font-weight: normal;
}
ul.results {
  list-style-type: none;
  padding: 0;
}
.results li {
  display: inline-block;
  margin: 10px;
  border: solid 1px #333;
  padding: 0.5rem;
  width: 200px;
  min-height: 100px;
  color: #fff;
  background: rgba(0,0,0,0.7);
}
ul.errors {
  list-style-type: none;
}
.errors li {
  border: 1px solid red;
  color: red;
  padding: 0.5rem;
  margin: 10px 0;
}
a {
  color: #42b983;
}
.no-image {
  display: inline-block;
  height: 100px;
  width: 100px;
}
.icon {
  font-size: 5rem;
}
</style>
