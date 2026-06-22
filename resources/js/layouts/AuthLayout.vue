<script setup lang="ts">

// default auth layout
// import AuthLayout from '@/layouts/auth/AuthSimpleLayout.vue';
import AuthLayout from '@/layouts/auth/AuthCardLayout.vue';

const { title = '', description = '' } = defineProps<{
  title?: string;
  description?: string;
}>();
</script>

<template>
  <AuthLayout :title="title" :description="description">
    <slot />
  </AuthLayout>
</template>
