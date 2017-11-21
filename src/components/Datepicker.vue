<template>
  <div>
    <flat-pickr style="background-color: white;" placeholder="Prüfungsdatum" input-class="form-control custom-input-class" :config="config">
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

<script>
  import flatPickr from 'vue-flatpickr-component'
  import 'flatpickr/dist/flatpickr.css'
  import 'flatpickr/dist/themes/material_blue.css'
  import {Russian} from 'flatpickr/dist/l10n/ru.js'
  import {German} from 'flatpickr/dist/l10n/de.js'
  flatpickr.localize(German)

  import collector from './collector.vue'
  
  const configFlatPickr = {
    dateFormat: 'd-m-Y'
  }
  
  export default {
    components: {
      flatPickr,
      collector
    },
    data () {
      return {
        date: new Date(),
        date: '',
  
        config: {
          wrap: true, // set wrap to true when using 'input-group'
          altFormat: 'd. M Y',
          altInput: true,
          dateFormat: 'd-m-Y'
  
        }
      }
    },
  }
</script>


