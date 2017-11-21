<template>
  <div>
    <v-select v-model="pruefungsort" label="name" :options="standorte"></v-select>
  </div>
</template>

<script>
import vSelect from 'vue-select'


export default {
  components: {
    vSelect,
    
  },

  data () {
    return {
      standorte: [],
      pruefungsort: '',
      
    }
  },

  created: function () {
    this.$http.get('https://jsonplaceholder.typicode.com/comments')
      .then(function (response) {
        this.standorte = response.data
      })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
