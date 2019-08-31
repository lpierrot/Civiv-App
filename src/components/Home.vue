<template>

  <div class="home">
  <div class="header">
      <p>This tool is designed to help you find elected officials by zipcode. Currently in production.
      </p>
  </div>
  <div class="formbox">
  <form v-on:submit.prevent="findRepresentative">
      <p>
        Find Representative 
        <input type="text" v-model="zipcode" placeholder="Enter zipcode"> 
        <button type="submit">Search</button>
      </p>
  </form>
  </div>
  <results :officials="officials" :errors="errors"/>
  </div>
</template>

<script>
import {API} from '@/common/api';
import axios from "axios";
import Results from '@/components/Results'
export default {
  name: "Home",
  data() {
    return {
      errors: null,
      zipcode: '',
      officials: null
    }
  },
components: {
  'results': Results
},
  methods: {
    findRepresentative: function () {
      if (this.zipcode.length === 0)
      return 
      API.get('', {
        params: {
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
          if (!this.errors) {
            this.errors=[]
          } 
          this.errors.push(error.message);
        });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home {
  font-size: 1.2rem;
  
}
.header {
  padding-top: 60px;
}
.formbox {
  padding-top: 100px;
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
</style>
