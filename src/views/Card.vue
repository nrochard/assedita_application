<template>
  <ion-page >
    <ion-header>
      <navbar />
    </ion-header>
    <ion-content>
        <ion-card>
          <ion-card-header>
                <ion-card-subtitle>Découvrez notre :</ion-card-subtitle>
                <ion-card-title class="font_title">Carte du midi</ion-card-title>
            </ion-card-header>
            <ion-img style="min-height: 1px" :src="'./assets/img/menu-assedita4.png'" class="img_header"></ion-img>
        </ion-card>

         <ion-card>
          <ion-card-header>
                <ion-card-subtitle>Découvrez notre :</ion-card-subtitle>
                <ion-card-title class="font_title">Carte du soir</ion-card-title>
            </ion-card-header>
            <ion-img style="min-height: 1px" :src="'./assets/img/menu_assedita2.png'" class="img_header"></ion-img>
        </ion-card>

         <ion-card style="margin-bottom:100px">
          <ion-card-header>
                <ion-card-subtitle>Découvrez notre :</ion-card-subtitle>
                <ion-card-title class="font_title">Carte des boissons</ion-card-title>
            </ion-card-header>
            <ion-img style="min-height: 1px" :src="'./assets/img/menu-assedita6.png'" class="img_header"></ion-img>
        </ion-card>
    </ion-content>
  </ion-page>
</template>

<script>

import navbar from '@/components/navbar.vue';

export default {
name:'blog',
components:{
    navbar
}
}
</script>