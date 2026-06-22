<script setup lang="ts">

import { useForm } from '@inertiajs/vue3';
import { parseDate } from '@internationalized/date';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

import moment from 'moment';

import DatePicker from './DatePicker.vue';

import type { Card } from '@/types/cards/card';


type Props = {
  card: Card | null;
};


const props = defineProps<Props>();


const isUpdate = !!props.card;


const form = useForm({

  card_number: props.card
    ? props.card.card_number.replace(/(.{4})/g, "$1 ")
    : '',

  pin: props.card?.pin ?? '',


  activation_date: props.card?.activation_date
    ? parseDate(
        moment(props.card.activation_date).format('YYYY-MM-DD')
      )
    : undefined,

  activation_time: props.card?.activation_date
    ? moment(props.card.activation_date).format('HH:mm')
    : '',


  expiration_date: props.card?.expiration_date
    ? parseDate(
        moment(props.card.expiration_date).format('YYYY-MM-DD')
      )
    : undefined,

  // we need to call it "Balance"
  // Laravel will use Setter "Balance" -> database
  balance: props.card?.balance ?? 0,

});



const handleSubmit = () => {

  console.log("handleSubmit called");

  form.transform((data) => ({

    card_number: data.card_number?.replace(/\s+/g, ''),

    pin: data.pin,

    activation_date:
      `${data.activation_date?.toString()} ${data.activation_time}:00`,

    expiration_date:
      `${data.expiration_date?.toString()}`,

    // balance after user modifications
    balance: data.balance,

  }));


  if (isUpdate) {

    form.put(`/cards/${props.card?.id}`);

  } else {

    form.post('/cards');

  }

};


</script>

<template>

  <div class="border p-4 mt-4">

    <form @submit.prevent="handleSubmit">

      <div class="mb-4 grid w-full max-w-sm items-center gap-1.5">

        <Label for="card_number">Card Number</Label>

        <Input
          placeholder="1234 5678 9012 3456 7890"
          id="card_number"
          type="text"
          v-model="form.card_number"
          required />
        
        <div class="text-(--destructive) bg-(--destructive-foreground)" v-if="form.errors.card_number">{{ form.errors.card_number }}</div>

      </div>

      <div class="mb-4 grid w-full max-w-sm items-center gap-1.5">

        <Label for="pin">PIN</Label>

        <Input
          placeholder="1234"
          id="pin"
          type="text"
          v-model="form.pin"
          required />
        
        <div class="text-(--destructive) bg-(--destructive-foreground)" v-if="form.errors.pin">{{ form.errors.pin }}</div>

      </div>

      <div class="mb-4 grid w-full max-w-sm items-center gap-1.5">

        <Label for="activation_date">Activation Date and Time</Label>

        <DatePicker
          id="activation_date"
          v-model="form.activation_date"
          required />

        <Input
          type="time"
          v-model="form.activation_time"
          required />
        
        <div class="text-(--destructive) bg-(--destructive-foreground)" v-if="form.errors.activation_date">{{ form.errors.activation_date }}</div>

      </div>

      <div class="mb-4 grid w-full max-w-sm items-center gap-1.5">

        <Label for="expiration_date">Expiration Date</Label>

        <DatePicker
          id="expiration_date"
          v-model="form.expiration_date"
          required />
        
        <div class="text-(--destructive) bg-(--destructive-foreground)" v-if="form.errors.expiration_date">{{ form.errors.expiration_date }}</div>

      </div>

      <div class="mb-4 grid w-full max-w-sm items-center gap-1.5">

        <Label for="balance">Balance</Label>

        <Input
          placeholder="100.00"
          id="balance"
          type="number"
          v-model="form.balance"
          step="any"
          required />
        
        <div class="text-(--destructive) bg-(--destructive-foreground)" v-if="form.errors.balance">{{ form.errors.balance }}</div>

      </div>

      <div>

        <Button
          type="submit"
          class="cursor-pointer"
          :disabled="form.processing">
          
          {{ isUpdate ? "Update card" : "Create card" }}
        
        </Button>

      </div>

    </form>

  </div>

</template>