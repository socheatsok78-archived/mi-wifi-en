import Vue from 'vue'
import UIkit from 'uikit'
import Icons from 'uikit/dist/js/uikit-icons'

// loads the Icon plugin
UIkit.use(Icons)

/**
 * Register Vue component
 */
const popup = new Vue({
  el: '#app',
  components: {
    'mi-header': require('./vue/header.vue'),
    'mi-popup': require('./vue/popup.vue')
  }
})

console.log(popup)
