<template>

  <div class="home">
    <div class="header">
      <h1></h1>
      <br>
      <p>This tool is designed to help you find elected officials by zipcode. Currently in production.
      </p>
      <br>
      <br>
    </div>
  <form v-on:submit.prevent="findRepresentative">
      <p>
        Find Representative 
        <input type="text" v-model="zipcode" placeholder="Enter zipcode"> 
        <button type="submit">Search</button>
      </p>
    </form>

  </div>
</template>

<script>
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home {
  font-size: 1.2rem;
  height: 100vh;
  padding-top: 60px;
}
input[type="text"]{
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 1px solid #333;
  width: 300px;
  font-size: 1rem;
  color: #2c3e50;
  font-weight: 100px;
  background: rgba(0,0,0,0.02);
  padding: 0.5rem;
}
button{
  background: #333;
  padding: 0.5rem;
  font-weight: 300px;
  color: #fff;
  border: none;
  cursor: pointer;
  font-size: 1rem;
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
