<template>
  <ion-page >
    <ion-header>
      <navbar />
    </ion-header>
    <ion-content>
        <h1 class="font_title">Réservation</h1>
        <formBooking/>
    </ion-content>
  </ion-page>
</template>

<script>

import navbar from '@/components/navbar.vue';
import formBooking from '@/components/formBooking.vue';

export default {
name:'blog',
components:{
    navbar,formBooking
}
}
</script>