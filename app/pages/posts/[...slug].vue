<script lang="ts" setup>
const route = useRoute();
// const { data: page } = await useAsyncData(route.path, () => {
//   return queryCollection('blog').path(route.path).first()
// })

</script>
<template>
<Header title="detial page"/>
<h1>chua co bai viet nao</h1>
<NuxtLink to="/">Go to Home</NuxtLink>
</template>
