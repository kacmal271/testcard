<script setup lang="ts">

import { CheckCircle2Icon  } from '@lucide/vue';
import {
  Alert,
  AlertTitle
} from '@/components/ui/alert';

type Props = {
  alertTitle: string;
};

const props = withDefaults(defineProps<Props>(), {});

</script>

<template>
  <div class="fixed left-0 bottom-0 w-full p-2">
    <Alert class="text-(--success-foreground) bg-(--success)">
      <CheckCircle2Icon />
      <AlertTitle>{{ alertTitle }}</AlertTitle>
    </Alert>
  </div>
</template>
