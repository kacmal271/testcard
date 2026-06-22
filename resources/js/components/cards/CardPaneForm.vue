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

    Card_number: data.Card_number?.replace(/\s+/g, ''),

    PIN: data.PIN,

    Activation_date:
      `${data.Activation_date?.toString()} ${data.Activation_time}:00`,

    Expiration_date:
      `${data.Expiration_date?.toString()}`,

    // balance after user modifications
    Balance: data.Balance,

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
          v-model="form.Card_number"
          required />
        
        <div class="text-(--destructive) bg-(--destructive-foreground)" v-if="form.errors.Card_number">{{ form.errors.Card_number }}</div>

      </div>

      <div class="mb-4 grid w-full max-w-sm items-center gap-1.5">

        <Label for="pin">PIN</Label>

        <Input
          placeholder="1234"
          id="pin"
          type="text"
          v-model="form.PIN"
          required />
        
        <div class="text-(--destructive) bg-(--destructive-foreground)" v-if="form.errors.PIN">{{ form.errors.PIN }}</div>

      </div>

      <div class="mb-4 grid w-full max-w-sm items-center gap-1.5">

        <Label for="activation_date">Activation Date and Time</Label>

        <DatePicker
          id="activation_date"
          v-model="form.Activation_date"
          required />

        <Input
          type="time"
          v-model="form.Activation_time"
          required />
        
        <div class="text-(--destructive) bg-(--destructive-foreground)" v-if="form.errors.Activation_date">{{ form.errors.Activation_date }}</div>

      </div>

      <div class="mb-4 grid w-full max-w-sm items-center gap-1.5">

        <Label for="expiration_date">Expiration Date</Label>

        <DatePicker
          id="expiration_date"
          v-model="form.Expiration_date"
          required />
        
        <div class="text-(--destructive) bg-(--destructive-foreground)" v-if="form.errors.Expiration_date">{{ form.errors.Expiration_date }}</div>

      </div>

      <div class="mb-4 grid w-full max-w-sm items-center gap-1.5">

        <Label for="balance">Balance</Label>

        <Input
          placeholder="100.00"
          id="balance"
          type="number"
          v-model="form.Balance"
          step="any"
          required />
        
        <div class="text-(--destructive) bg-(--destructive-foreground)" v-if="form.errors.Balance">{{ form.errors.Balance }}</div>

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