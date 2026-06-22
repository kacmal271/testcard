<script setup lang="ts">

import logo from '@graphics/app_logo_icon.svg';

import type { HTMLAttributes } from 'vue';

defineOptions({
  inheritAttrs: false,
});

type Props = {
  className?: HTMLAttributes['class'];
};

defineProps<Props>();



</script>

<template>

  <!-- {{ :src = "logo" }} -->
  <!-- {{ mark "src" attribute to be processed by Vue }} -->

  <img :src="logo" />

</template>
