<script setup lang="ts">

import { ref } from 'vue';
import { TailwindPagination } from 'laravel-vue-pagination';
import { router } from '@inertiajs/vue3';

import CardPane from '@/components/cards/CardPane.vue';

import type { CardsPaginator } from '@/types/cards/cards_paginator';

type Props = {
  cards: CardsPaginator;
};

const props = withDefaults(defineProps<Props>(), {});

const laravelData = ref({});

console.log("CardsPane.vue");
console.log(props.cards);

const getResults = (page = 1) => {
  router.get(props.cards.path, { page }, {
    preserveState: true,
    preserveScroll: true
  });
};

getResults();

</script>

<template>

  <div class="mb-4">

    <!-- {{ https://tailwindcss.com/docs/columns }} -->
    <div class="mb-4 md:grid grid-cols-3 gap-4 h-full overflow-x-auto rounded-xl">

      <!-- {{ loop fro each card }} -->
      <CardPane v-for="card in cards.data" :card="card" />

    </div>

    <div class="text-center">

      <TailwindPagination
        :data="cards"
        @pagination-change-page="getResults" />

    </div>


  </div>

</template>