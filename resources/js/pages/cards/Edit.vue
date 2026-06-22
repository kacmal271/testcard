<script setup lang="ts">

import type { Card } from '@/types/cards/card';

import CardPaneForm from '@/components/cards/CardPaneForm.vue';

type Props = {
  card: Card;
};

const props = withDefaults(defineProps<Props>(), {});

console.log("Edit.vue");
console.log(props.card);

</script>

<template>

  <CardPaneForm :card="card" />

</template>