<script setup lang="ts">

import { computed } from 'vue';
import type { DateValue } from '@internationalized/date';
import { getLocalTimeZone } from '@internationalized/date';
import { today } from '@internationalized/date';
import { CalendarIcon } from '@lucide/vue';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { cn } from '@/lib/utils';

const props = defineProps<{
  modelValue?: DateValue;
}>();

const emit = defineEmits<{
  (e: 'update:modelValue', value: DateValue): void
}>();

const date = computed({
  get() {
    return props.modelValue;
  },

  set(value) {
    emit('update:modelValue', value);
  }
});

const defaultPlaceholder = today(getLocalTimeZone());

</script>

<template>

  <Popover>

    <PopoverTrigger as-child>

      <Button
        variant="outline"
        :class="cn(
          'cursor-pointer w-full justify-start text-left font-normal',
          !date && 'text-muted-foreground',
        )"
      >

        <CalendarIcon class="mr-2 h-4 w-4" />
        {{ date ? date.toString() : "Pick a date" }}

      </Button>

    </PopoverTrigger>

    <PopoverContent class="w-auto p-0">

      <Calendar
        v-model="date"
        :initial-focus="true"
        :default-placeholder="defaultPlaceholder"
        layout="month-and-year"
      />

    </PopoverContent>

  </Popover>

</template>
