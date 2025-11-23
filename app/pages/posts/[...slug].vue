<script lang="ts" setup>
const route = useRoute().params.slug;
</script>
<template>
{{ route }}
<NuxtLink to="/">Go to Home</NuxtLink>
</template>
