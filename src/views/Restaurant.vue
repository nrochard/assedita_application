<template>
  <ion-page >
    <ion-header>
      <navbar />
    </ion-header>
    <ion-content>
        <h1>Le restaurant</h1>
        <ion-text color="dark">
            <p>Nous sommes un restaurant bistronomique situé en plein cœur du 9e arrondissement de Paris. Nous vous accueillons dans un cadre naturel et convivial afin de vous faire découvrir une cuisine inspirée et créative, reflet du travail de nos producteurs et artisans !</p>
        </ion-text>
        <ion-card>
            <ion-img style="min-height: 1px; width:30%; margin: 0 auto; padding: 40px 20px 20px 20px" :src="'./assets/picto/leaf.svg'" class="img_header"></ion-img>
            <ion-card-header>
                <ion-card-title class="font_title" style="text-align:center">Naturalité </ion-card-title>
            </ion-card-header>
            <ion-card-content>
           Simplicité, transparence et goût… A la manière d’un vin nature, notre cuisine est sans filtre ni artifice.
            </ion-card-content>
        </ion-card>
        <ion-card>
            <ion-img style="min-height: 1px; width:30%; margin: 0 auto; padding: 40px 20px 20px 20px" :src="'./assets/picto/couteau.svg'" class="img_header"></ion-img>
            <ion-card-header>
                <ion-card-title class="font_title" style="text-align:center">Artisanat </ion-card-title>
            </ion-card-header>
            <ion-card-content>
          Nous prenons soin de travailler avec des artisans partageant notre passion. Comme en cuisine, la qualité de leurs créations provient en partie de leur amour pour leur métier
            </ion-card-content>
        </ion-card>
        <ion-card>
            <ion-img style="min-height: 1px; width:30%; margin: 0 auto; padding: 40px 20px 20px 20px" :src="'./assets/picto/worldwide.svg'" class="img_header"></ion-img>
            <ion-card-header>
                <ion-card-title class="font_title" style="text-align:center">Découverte </ion-card-title>
            </ion-card-header>
            <ion-card-content>
Qu’elle est belle cette sensation : goûter une saveur inconnue. Ce dont il s’agissait, on ne le sait pas encore… mais qu’est-ce que c’était bon !
            </ion-card-content>
        </ion-card>
        <ion-card>
            <ion-img style="min-height: 1px; width:30%; margin: 0 auto; padding: 40px 20px 20px 20px" :src="'./assets/picto/vine.svg'" class="img_header"></ion-img>
            <ion-card-header>
                <ion-card-title class="font_title" style="text-align:center">Convivialité </ion-card-title>
            </ion-card-header>
            <ion-card-content>
           Lorsque l’on va au restaurant, on y vient pour un moment de détente et d’émerveillement, pas pour être accueilli froidement comme à l’entrée d’une banque !
            </ion-card-content>
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

<style scoped>
ion-text p{
    margin: 15px;
    font-family: 'Mulish';
    text-align: justify;
}
</style>