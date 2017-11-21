<template>
  <div >
    <div class="container-fluid">
      <h1>Gedächtnisprotokoll</h1>
      <div class="row">
<!-- Datum -->
        <div class="from-group col-md-4 mb-3">
          <label class="control-label requiredField" for="datum">Prüfungsdatum</label>
          <span class="asteriskField">*</span>
          <Datepicker v-model="date"></Datepicker>
          
        </div>
<!-- Prüfer -->
        <div class="form-group col-md-4 mb-3">
          <label class="control-label " for="pruefer">Prüfer</label>
          <input class="form-control" id="pruefer" name="pruefer" data-vv-as="Prüfer" type="text"   placeholder="Prüfer" v-bind="pruefer" v-model="pruefer"/>
        </div>
      </div>
<!-- Beisitzer -->
      <div class="row">
        <div class="form-group col-md-4 mb-3 ">
          <label class="control-label " for="beisitzer">Beisitzer</label>
          <input class="form-control" id="beisitzer" name="beisitzer" placeholder="Beisitzer" type="text"       v-bind="beisitzer" v-model="beisitzer"/>
        </div>
<!-- Prüfungsort -->
        <div class="form-group col-md-4 mb-3 ">
          <label class="control-label requiredField" for="prüfungsort">Prüfungsort</label>
          <span class="asteriskField">*</span>
          <Pruefungsorte v-model="pruefungsort"></Pruefungsorte>
        </div>
      </div>
    </div> 
    
    
  </div>
</template>

<script>
  import Datepicker from './Datepicker'
  import Pruefungsorte from './Pruefungsorte'
  import collector from './collector.vue'
  export default {
    name: 'Gedaechtnisprotokoll',

    components: {
      Datepicker,
      Pruefungsorte,
      collector
    },
    data () {
      return {
        msg: 'Welcome to Yoursdsddd Vue.js App',
        
          pruefer: '',
          beisitzer: '',
          date: '',
          pruefungsort: ''
        
      }
    },
    
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
