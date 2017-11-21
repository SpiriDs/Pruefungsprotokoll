<template>
  <div>
    
<input type="text" id="pruefer" v-model="pruefer">
<input type="text" id="date" v-model="date">

   
  </div>
</template>

<script>



export default {
    props: {
        pruefer: {
            type: String,
            required: true,
        },
        beisitzer: {
            type: String,
            required: true,
        },
        date: {
            type: String,
            required: true,
        }
    },

    data () {
    return {
      pruefer: '',
      beisitzer: '',
      date: '',
      
      
    }
  },
 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
input {
    display: none;
}
</style>
