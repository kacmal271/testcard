<script setup lang="ts">

import moment from 'moment';

import { edit } from '@/routes/cards';
import { Button } from '@/components/ui/button'
import { Link } from '@inertiajs/vue3';
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

import type { Card } from '@/types/cards/card';

type Props = {
  card: Card;
};

const props = withDefaults(defineProps<Props>(), {});

const pin = props.card.PIN;
const cardNumber = props.card.Card_number.replace(/(.{4})/g, "$1 ");
const activationDate = moment(props.card.Activation_date).format('YYYY MM DD');
const expirationDate = moment(props.card.Expiration_date).format('YYYY MM DD hh:mm:ss A');

</script>

<template>

  <div class="border p-4 mt-4">

    <div class="mb-4 grid w-full max-w-sm items-center gap-1.5">

      <Label for="card_number">Card Number</Label>

      <Input
        style="box-shadow: none;"
        id="card_number"
        type="text"
        v-model="cardNumber" />

    </div>

    <div class="mb-4 grid w-full max-w-sm items-center gap-1.5">

      <Label for="pin">PIN</Label>

      <Input
        style="box-shadow: none;"
        id="pin"
        type="text"
        v-model="pin" />

    </div>

    <div class="mb-4 grid w-full max-w-sm items-center gap-1.5">

      <Label for="activation_date">Activation Date</Label>

      <Input
        style="box-shadow: none;"
        id="activation_date"
        type="text"
        v-model="activationDate" />

    </div>

    <div class="mb-4 grid w-full max-w-sm items-center gap-1.5">

      <Label for="expiration_date">Expiration Date</Label>

      <Input
        style="box-shadow: none;"
        id="expiration_date"
        type="text"
        v-model="expirationDate" />

    </div>

    <div>

      <Link
        :href="edit(card.id)"
        >

        <Button class="cursor-pointer">
          
          Edit card
        
        </Button>

      </Link>

    </div>

  </div>

</template>