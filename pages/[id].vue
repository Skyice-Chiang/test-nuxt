<script setup>
  const route = useRoute();
  console.log(route)
</script>

<template>
  <div class="dynamic-pages">
    <h1>動態網址 : {{ route.href }}</h1> 
  </div>
</template>