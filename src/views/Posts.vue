<template>
  <ion-page >
    <ion-header>
      <navbar />
    </ion-header>
    <ion-content>
        <h1>Idées & Conseils</h1>
        <ion-card>
            <ion-img style="min-height: 1px" :src="'./assets/img/blog.jpg'" class="img_header"></ion-img>
            <ion-card-header>
                <ion-card-subtitle>Recette</ion-card-subtitle>
                <ion-card-title class="font_title">Velouté de choux-fleur aux olives</ion-card-title>
            </ion-card-header>
            <ion-card-content>
            Découvrez notre recette phare de l'été qui saura ravir vos invités. Rien de plus simple que ce velouté rafraichissant avec ces notes de Provences. 
            </ion-card-content>
            <ion-button href="/article" color="success" expand="block" fill="outline" style="margin:0 30px 30px 30px">Lire</ion-button>
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