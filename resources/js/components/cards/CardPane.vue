<script setup lang="ts">

import { Link } from '@inertiajs/vue3';
import { show } from '@/routes/cards';
import type { Card } from '@/types/cards/card';
import { CreditCard } from '@lucide/vue';

import moment from 'moment';

type Props = {
  card: Card;
};

const props = withDefaults(defineProps<Props>(), {});

</script>

<template>

  <div class="border p-4">

    <Link :href="show(card.id)">

      <div class="p-2">

        <CreditCard class="block mb-1" />

        <h2 class="mb-1">

          {{ card.Card_number.replace(/(.{4})/g, "$1 ") }}

        </h2>

        <h3>

          Expires {{ moment(card.Expiration_date).fromNow() }}

        </h3>

      </div>

    </Link>

  </div>

</template>