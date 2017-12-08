/* eslint-disable */
<template>
  <div>
    <flat-pickr style="background-color: white;" placeholder="Prüfungsdatum" input-class="form-control custom-input-class" :config="config" v-model="datum">
    </flat-pickr>
    <div class="input-group-btn">
      <!--button class="btn btn-default" type="button" title="Toggle" data-toggle>
        <i>class="fa fa-calendar">
          <span aria-hidden="true" class="sr-only">Toggle</span>
        </i>
      </button-->
      <p>{{ date }}</p>
    </div>
    
  </div>
</template>
/* eslint-disable */
<script>
  import flatPickr from 'vue-flatpickr-component'
  import 'flatpickr/dist/flatpickr.css'
  import 'flatpickr/dist/themes/material_blue.css'
  // import {Russian} from 'flatpickr/dist/l10n/ru.js'
  import {German} from 'flatpickr/dist/l10n/de.js'
  // eslint-disable-next-line
  flatpickr.localize(German)

  // import collector from './collector.vue'
  // eslint-disable-next-line
  const configFlatPickr = {
    dateFormat: 'd-m-Y'
  }
  
  export default {
    components: {
      flatPickr
      // collector
    },

    props: ['protokoll'],
    data () {
      return {
        date: new Date(),
        datum: '',
  
        config: {
          wrap: true, // set wrap to true when using 'input-group'
          altFormat: 'd. M Y',
          altInput: true,
          dateFormat: 'd-m-Y'
  
        }
      }
    }
  }
</script>


