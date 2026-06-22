<script setup lang="ts">

import { create } from '@/routes/cards';
import { Link } from '@inertiajs/vue3';
import { Button } from '@/components/ui/button'
import { Head } from '@inertiajs/vue3';
import { usePage } from '@inertiajs/vue3';
import { ref } from 'vue';
import { watch } from 'vue';

import Alert from '@/components/cards/Alert.vue';
import CardsPane from '@/components/cards/CardsPane.vue';

import type { CardsPaginator } from '@/types/cards/cards_paginator';

type Props = {
  cards: CardsPaginator;
};

const props = withDefaults(defineProps<Props>(), {});

const page = usePage();

const successMessage = ref<string | null>(null);

console.log("Index.vue :: success");
console.log(page.props.flash?.success);

watch(
  () => page.props.flash?.success,
  (value) => {
    if (value) {
      successMessage.value = value;

      setTimeout(() => {
        successMessage.value = null;
      }, 5000);
    }
  },
  { immediate: true }
);

</script>

<template>

  <!-- {{ page title }} -->

  <Head title="Cards" />

  <div class="mt-4">

    <Link
      :href="create()"
      >

      <Button class="cursor-pointer">
        
        Create card
      
      </Button>
      
    </Link>


  </div>

  <!-- {{ debug code }} -->
  {{ console.log("Index.vue") }}
  {{ console.log(cards) }}

  <CardsPane :cards="cards" />

  <Alert
    v-if="successMessage"
    :alert-title="successMessage" />

</template>
