<script lang="ts" setup>
defineProps({
    title: {
        type: String,
        required: true
    },
decription: {
        type: String,
        required: true
    },
    path: {
        type: String,
        required: false
    }
});
</script>
<template>
    <div class="p-3 bg-gray-500 rounded-lg">
            <div class="w-full bg-gray-400 px-4">
                <img src="" alt="hinh anh bai viet" />
            </div>
            <div>
                <h1 class="font-bold">{{title}}</h1>
                <span>{{ decription }}</span>
            </div>
            <div class="p-3"></div>
            <NuxtLink class=" w-24 text-center p-2 text-sm bg-blue-500 block space-y-3" to="/posts/my-first-post">Đọc thêm</NuxtLink>

        </div>
</template>