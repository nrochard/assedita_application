<template>
  <ion-page>
    <ion-header>
      <navbar />
    </ion-header>
    <ion-content>
        <ion-img style="min-height: 1px" :src="'./assets/img/team.jpg'" class="img_header"></ion-img>
        
        <ion-card>
            <ion-card-header>
                <ion-card-subtitle>Informations</ion-card-subtitle>
                <ion-card-title class="font_title">Restaurant Assedita</ion-card-title>
            </ion-card-header>
            <ion-card-content>
            <p><ion-icon style="padding: 4px;" color="dark" :icon="pin" />49 Boulevard de Clichy 75009 PARIS</p>
            <p><ion-icon style="padding: 4px;" color="dark" :icon="call" />06 72 74 51 03</p>
            <p><ion-icon style="padding: 4px;" color="dark" :icon="mail" />contact@assedita.com</p>
            <p>@assedita.restaurant</p>

            </ion-card-content>
        </ion-card>
        <ion-card id="card_bottom">
            <ion-card-header>
                <ion-card-subtitle>Accès</ion-card-subtitle>
               <ion-card-title class="font_title">49 Boulevard de Clichy 75009 PARIS</ion-card-title>
            </ion-card-header>
             <ion-card-content>      
                 <p>Métro : Halles (4/RER A, B et D), Rambuteau (11), Hôtel de Ville (1/11)</p>   
          <div class="map-responsive">
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10499.388539404134!2d2.3562227!3d48.8611253!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x165cc8f5142afd8c!2sLe%20Reflet!5e0!3m2!1sfr!2sfr!4v1612877216580!5m2!1sfr!2sfr" width="500" height="350" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
          </div>
        </ion-card-content>
        </ion-card>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonIcon } from '@ionic/vue';
import { call, pin, mail} from 'ionicons/icons';
import navbar from '@/components/navbar.vue';

export default {
name:'blog',
components:{
    navbar, IonIcon,
},
 setup() {
    return {
      call, 
      pin,
      mail,
    }
  }
}
</script>

<style scoped>
#card_bottom{
  margin-bottom: 100px;
}
</style>