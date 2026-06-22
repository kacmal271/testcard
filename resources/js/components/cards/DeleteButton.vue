<script setup lang="ts">

import { router } from '@inertiajs/vue3';
import { Button } from '@/components/ui/button';

type Props = {
  id: number;
};

const props = defineProps<Props>();

const handleDelete = () => {

  if ( ! window.confirm("Deleted card cannot be restored!"))
  {
    return;
  }

  router.delete(`/cards/${props.id}`);

};

</script>

<template>
  
  <Button
    variant="destructive"
    class="cursor-pointer text-(--destructive-foreground) bg-(--destructive) border-red-500 border-2"
    @click="handleDelete"
    >
    
    Delete card
  
  </Button>

</template>
