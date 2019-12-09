<template>
  <div class="urls">
    <!-- {{officials}} -->
    <ul class="urls" v-if="urls && urls.length > 0">
      <li class="item" v-for="(item,index) of urls" :key="index">
        <p>
          <a :href="item" target="_blank">Website</a> 
        </p>
        
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "Urls",
  props: {
    urls: Array,
    
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
  padding: 0;
}
.results li {
  list-style-type: none;
}
</style>>

