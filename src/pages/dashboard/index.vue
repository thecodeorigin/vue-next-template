<template>
  <div class="dashboard-page">
    Heheh
    <my-auth :allow="['SEE_STUFF']">
      <h1>This is an dashboard page</h1>
    </my-auth>
  </div>
</template>
<script>
import { defineComponent } from 'vue'
import { useHead } from '@plugins/meta'
export default defineComponent({
  name: 'DashboardPage',
  setup() {
    useHead()
  },
})
</script>
