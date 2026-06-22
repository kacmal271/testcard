<script setup lang="ts">

import DeleteButton from '@/components/cards/DeleteButton.vue';
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

const pin = props.card.pin;
const cardNumber = props.card.card_number.replace(/(.{4})/g, "$1 ");
const activationDate = moment(props.card.activation_date).format('YYYY MM DD');
const expirationDate = moment(props.card.expiration_date).format('YYYY MM DD hh:mm:ss A');
const balance = props.card.balance;

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

    <div class="mb-4 grid w-full max-w-sm items-center gap-1.5">

      <Label for="balance">Balance</Label>

      <Input
        style="box-shadow: none;"
        id="balance"
        type="text"
        v-model="balance" />

    </div>

    <div class="inline-block space-x-2">

      <Link
        :href="edit(card.id)"
        >

        <Button class="cursor-pointer">
          
          Edit card
        
        </Button>

      </Link>

      <DeleteButton :id="card.id" />

    </div>

  </div>

</template>