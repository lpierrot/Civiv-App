<template>
  <div class="results">
    <ul class="results" v-if="officials && officials.length > 0">
      <li class="item" v-for="(item,index) of officials" :key="index">
        <p>
          <strong>{{item.name}}</strong>
        </p>
        <p>{{item.party}}</p>
        <phones :phones="item.phones" />
        <urls :urls="item.urls" />
        <p v-if="item.photoUrl && item.photoUrl.indexOf('https') >-1">
          <img :src="item.photoUrl" height="150" width="150" :alt="item.name" />
        </p>
        <p v-else>
          <i class="icon far fa-surprise"></i>
        </p>
      </li>
    </ul>
    <div class="no-results" v-else-if="officials && officials.length==0">
      <b>No results found, Please adjust your search.</b>
      {{errors}}
      <ul class="errors" v-if="errors && errors.length > 0">
        <li v-for="(error,index) of errors" :key="index">{{error.message}}</li>
      </ul>
    </div>
  </div>
</template>
<script>
import Phones from '@/components/Phones'
import Urls from '@/components/Urls'
export default {
  name: "Results",
  props: {
    officials: Array,
    errors: Array
  },
  components: {
  'phones': Phones,
  'urls': Urls
},
  data() {
    return {
      
    };
  }
};
</script>


<style scoped>

ul.results {
  list-style-type: none;
  padding: 60px;
}
.results li {
  display: inline-block;
  margin: 10px;
  border-radius: 30px;
  padding: 15px;
  width: 250px;
  min-height: 200px;
  color: #000000;
  background: rgba(7, 7, 7, 0.137);
}

.icon {
  font-size: 4rem;
  padding-top: 23px;
  padding-bottom: 64px;
}
</style>>

