<template>
  <div>
    <div class="container-fluid">
      <h1>Gedächtnisprotokoll</h1>
      <div class="row">
        <!-- Datum -->
        <div class="from-group col-md-4 mb-3">
          <label class="control-label requiredField" for="datum">Prüfungsdatum</label>
          <span class="asteriskField">*</span>
          <Datepicker :pruefungsDatum="protokoll.pruefungsdatum" @dateChanged="protokoll.pruefungsdatum = $event"></Datepicker>
        </div>
        <!-- Prüfer -->
        <div class="form-group col-md-4 mb-3">
          <label class="control-label " for="pruefer">Prüfer</label>
          <input class="form-control" id="pruefer" name="pruefer" data-vv-as="Prüfer" type="text" placeholder="Prüfer" v-model="protokoll.pruefer"
          />
        </div>
      </div>
      <!-- Beisitzer -->
      <div class="row">
        <div class="form-group col-md-4 mb-3 ">
          <label class="control-label " for="beisitzer">Beisitzer</label>
          <input class="form-control" id="beisitzer" name="beisitzer" placeholder="Beisitzer" type="text" v-model="protokoll.beisitzer"
          />
        </div>
        <!-- Prüfungsort -->
        <div class="form-group col-md-4 mb-3 ">
          <label class="control-label requiredField" for="prüfungsort">Prüfungsort</label>
          <span class="asteriskField">*</span>
          <Pruefungsorte :Ort="protokoll.pruefungsort" @OrtChanged="protokoll.pruefungsort = $event"></Pruefungsorte>
        </div>
      </div>
      <!-- Prüfungsfragen -->
      <div class="row">
        <div class="form-group col-md-4 mb-3">
          <label class="control-label requiredField" for="pruefungsfragen">Prüfungsfragen</label>
          <span class="asteriskField">*</span>
          <textarea class="form-control" cols="40" id="pruefungsfragen" name="pruefungsfragen" placeholder="Prüfungsfragen" rows="10"
            v-model="protokoll.pruefungsfragen"></textarea>
        </div>
        <!-- Persönliche Eindrücke -->
        <div class="form-group col-md-4 mb-3">
          <label class="control-label requiredField" for="persoenlicheEindruecke">Persönliche Eindrücke</label>
          <span class="asteriskField">*</span>
          <textarea class="form-control" id="persoenlicheEindruecke" name="persoenlicheEindruecke" cols="40" placeholder="Persönliche Eindrücke"
            rows="10" v-model="protokoll.persoenlicheEindruecke"></textarea>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Datepicker from "./Datepicker";
import Pruefungsorte from "./Pruefungsorte";
import collector from "./collector.vue";
export default {
  name: "Gedaechtnisprotokoll",

  components: {
    Datepicker,
    Pruefungsorte,
    collector
  },

  data() {
    return {
      protokoll: {}
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
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
