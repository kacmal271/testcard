<script setup lang="ts">

import { Link } from '@inertiajs/vue3';
import { show } from '@/routes/cards';
import type { Card } from '@/types/cards/card';
import { CreditCard } from '@lucide/vue';

import DeleteButton from '@/components/cards/DeleteButton.vue';
import moment from 'moment';

type Props = {
  card: Card;
};

const props = withDefaults(defineProps<Props>(), {});

</script>

<template>

  <div class="relative border p-4">

    <Link :href="show(card.id)">

      <div class="p-2">

        <CreditCard class="block mb-1" />

        <h2 class="mb-1">

          {{ card.card_number.replace(/(.{4})/g, "$1 ") }}

        </h2>

        <h3>

          Balance: {{ card.balance }}

        </h3>

        <h4>

          Expires {{ moment(card.expiration_date).fromNow() }}

        </h4>

      </div>

    </Link>

    <DeleteButton class="text-xs absolute bottom-4 right-4" :id="card.id" />

  </div>

</template>