<template>
  <ion-page >
    <ion-header>
      <navbar />
    </ion-header>
    <ion-content>
        <h1>Abonnements</h1>
          <ion-card class="plan1">
            <ion-card-header>
            <ion-card-subtitle>Le curieux</ion-card-subtitle>
            <ion-card-title>20€/mois</ion-card-title>
            </ion-card-header>

            <ion-card-content>
                <p>Vexillologist pitchfork</p>
                <p>Vexillologist pitchfork</p>
                <p>Vexillologist pitchfork</p>
            </ion-card-content>
            <ion-button color="light" expand="block" fill="outline" style="margin:0 30px 10px 30px">Souscrire</ion-button>
        </ion-card>
        <ion-card class="plan2">
            <ion-card-header>
            <ion-card-subtitle>Le gourmand</ion-card-subtitle>
            <ion-card-title>50€/mois</ion-card-title>
            </ion-card-header>

            <ion-card-content>
                <p>Vexillologist pitchfork</p>
                <p>Vexillologist pitchfork</p>
                <p>Vexillologist pitchfork</p>
            </ion-card-content>
            <ion-button color="light" expand="block" fill="outline" style="margin:0 30px 10px 30px">Souscrire</ion-button>
        </ion-card>
        <ion-card class="plan3">
            <ion-card-header>
            <ion-card-subtitle>Le passioné</ion-card-subtitle>
            <ion-card-title>90€/mois</ion-card-title>
            </ion-card-header>

            <ion-card-content>
                <p>Vexillologist pitchfork</p>
                <p>Vexillologist pitchfork</p>
                <p>Vexillologist pitchfork</p>
            </ion-card-content>
            <ion-button color="light" expand="block" fill="outline" style="margin:0 30px 10px 30px">Souscrire</ion-button>
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
    .plan1{
    background-color: #391111;
    }
        .plan2{
    background-color: #132c1a;
    }
        .plan3{
    background-color: #954017;
    }
    .plan1 p, .plan2 p, .plan3 p{
        color: white;
    }
    ion-card-subtitle, ion-card-title{
        color: white;
    }
</style>