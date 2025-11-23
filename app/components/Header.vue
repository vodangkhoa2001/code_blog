<script setup lang="ts">
    defineProps({
        title: {
            type: String,
            required: true
        }
    });
</script>
<template>
    <div>
        <h1 class="text-4xl font-black bg-red-500 p-4 max-w-40">{{ title }}</h1>
    </div>
</template>