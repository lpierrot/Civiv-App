<template>
  <div class="home">
    <div class="header float">
      <p>
        Enter your zipcode to find and contact your federal, state, and local representatives.
        I have replaced pictures with icons, since the source of these pictures
        <a
          href="http://bioguide.congress.gov/biosearch/biosearch.asp"
          target="_blank"
        >Congressional Bioguide Directory</a> website is not HTTPS encrypted. Data from the
        <a
          href="https://developers.google.com/civic-information/"
          target="_blank"
        >Google Civic Information API</a>,<i>may not have
        100% coverageof all representatives</i> .
      </p>
    </div>
    <div class="formbox">
      <strong>Enter your zipcode</strong>
      <form v-on:submit.prevent="findRepresentative">
        <input type="text" v-model="zipcode" placeholder="Enter zipcode" />
        <button type="submit">Search</button>
      </form>
    </div>
    <results :officials="officials" :errors="errors" />
  </div>
</template>

<script>
import { API } from "@/common/api";
import axios from "axios";
import Results from "@/components/Results";
export default {
  name: "Home",
  data() {
    return {
      errors: null,
      zipcode: "",
      officials: null
    };
  },
  components: {
    results: Results
  },
  methods: {
    findRepresentative: function() {
      if (this.zipcode.length === 0) return;
      API.get("", {
        params: {
          address: this.zipcode
        }
      })
        .then(response => {
          this.results = response.data;
          if (this.results.officials) {
            this.officials = this.results.officials;
            this.zipcode = "";
          }
          console.log("officials", this.officials);
        })
        .catch(error => {
          if (!this.errors) {
            this.errors = [];
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
  display: flex;
  flex-flow: row wrap;
  margin: auto;
  padding-top: 60px;
  width: 85%;
}
.formbox {
  padding-top: 50px;
}
input[type="text"] {
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 1px solid #333;
  width: 300px;
  font-size: 1rem;
  color: #2c3e50;
  font-weight: 100px;
  background: rgba(14, 1, 1, 0.075);
  padding: 0.5rem;
}
button {
  background: #333;
  padding: 0.5rem;
  font-weight: 300px;
  color: #fff;
  border: none;
  cursor: pointer;
  font-size: 1rem;
}
</style>
