/* eslint-disable */
<template>
  <div>
    <flat-pickr style="background-color: white;" placeholder="Prüfungsdatum" input-class="form-control custom-input-class" :config="config" v-model="datum">
    </flat-pickr>
    <div class="input-group-btn">
      <p>{{ date }}</p>
    </div>
  </div>
</template>

<script>
  import flatPickr from 'vue-flatpickr-component'
  import 'flatpickr/dist/flatpickr.css'
  import 'flatpickr/dist/themes/material_blue.css'
  // import {Russian} from 'flatpickr/dist/l10n/ru.js'
  import {
    German
  } from 'flatpickr/dist/l10n/de.js'
  
  flatpickr.localize(German)
  
  
  const configFlatPickr = {
    dateFormat: 'd-m-Y'
  }
  
  export default {
    components: {
      flatPickr
      // collector
    },
  
    props: ['pruefungsDatum'],
  
    data() {
      return {
        date: new Date(),
        datum: '',
        isDate: this.pruefungsDatum,
  
  
  
        config: {
          wrap: true, // set wrap to true when using 'input-group'
          altFormat: 'd. M Y',
          altInput: true,
          dateFormat: 'd-m-Y'
  
        }
      }
    },
  
    watch: {
      datum: function(value) {
        this.isDate = value;
        this.$emit('dateChanged', this.isDate)
      }
    }
  
  }
</script>


