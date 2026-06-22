<script setup lang="ts">

import type { Card } from '@/types/cards/card';

import CardPaneFull from '@/components/cards/CardPaneFull.vue';

type Props = {
  card: Card;
};

const props = withDefaults(defineProps<Props>(), {});

</script>

<template>

  <CardPaneFull :card="card" />

</template>