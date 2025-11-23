<script lang="ts" setup>
const route = useRoute().params.slug;
// const { data: page } = await useAsyncData(route.path, () => {
//   return queryCollection('docs').path(route.path).first()
// })

</script>
<template>

<NuxtLink to="/">Go to Home</NuxtLink>
</template>
