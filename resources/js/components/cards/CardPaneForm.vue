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

  Card_number: props.card
    ? props.card.Card_number.replace(/(.{4})/g, "$1 ")
    : '',

  PIN: props.card?.PIN ?? '',


  Activation_date: props.card?.Activation_date
    ? parseDate(
        moment(props.card.Activation_date).format('YYYY-MM-DD')
      )
    : undefined,

  Activation_time: props.card?.Activation_date
    ? moment(props.card.Activation_date).format('HH:mm')
    : '',


  Expiration_date: props.card?.Expiration_date
    ? parseDate(
        moment(props.card.Expiration_date).format('YYYY-MM-DD')
      )
    : undefined,

});



const handleSubmit = () => {

  console.log("handleSubmit called");

  form.transform((data) => ({

    Card_number: data.Card_number?.replace(/\s+/g, ''),

    PIN: data.PIN,

    Activation_date:
      `${data.Activation_date?.toString()} ${data.Activation_time}:00`,

    Expiration_date:
      `${data.Expiration_date?.toString()}`

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
          v-model="form.Card_number" />
        
        <div class="text-(--destructive) bg-(--destructive-foreground)" v-if="form.errors.Card_number">{{ form.errors.Card_number }}</div>

      </div>

      <div class="mb-4 grid w-full max-w-sm items-center gap-1.5">

        <Label for="pin">PIN</Label>

        <Input
          placeholder="1234"
          id="pin"
          type="text"
          v-model="form.PIN" />
        
        <div class="text-(--destructive) bg-(--destructive-foreground)" v-if="form.errors.PIN">{{ form.errors.PIN }}</div>

      </div>

      <div class="mb-4 grid w-full max-w-sm items-center gap-1.5">

        <Label for="activation_date">Activation Date and Time</Label>

        <DatePicker
          id="activation_date"
          v-model="form.Activation_date" />

        <Input
          type="time"
          v-model="form.Activation_time" />
        
        <div class="text-(--destructive) bg-(--destructive-foreground)" v-if="form.errors.Activation_date">{{ form.errors.Activation_date }}</div>

      </div>

      <div class="mb-4 grid w-full max-w-sm items-center gap-1.5">

        <Label for="expiration_date">Expiration Date</Label>

        <DatePicker
          id="expiration_date"
          v-model="form.Expiration_date" />
        
        <div class="text-(--destructive) bg-(--destructive-foreground)" v-if="form.errors.Expiration_date">{{ form.errors.Expiration_date }}</div>

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