<template>
  <div class="about">
    <h1>This is an {{ name }} page number {{ number }}</h1>
  </div>
</template>

<style>

</style>
<script lang="ts">
import  { defineComponent } from 'vue';

export default defineComponent({
  data(){
    return {
      name  : 'about' ,
      number : '1' as string | undefined ,
    }
  }
})
</script>