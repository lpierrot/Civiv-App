<template>
  <div class="phones">
    <!-- {{officials}} -->
    <ul class="phones" v-if="phones && phones.length > 0">
      <li class="item" v-for="(item,index) of phones" :key="index">
        <p>
          <strong>{{item}}</strong>
        </p>
        
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "Phones",
  props: {
    phones: Array,
    
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

