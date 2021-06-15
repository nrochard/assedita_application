<template>
  <ion-page >

    <ion-header>
      <navbar />
      <!-- <ion-toolbar color="success">
        <ion-title style="font-size:20px; text-transform:uppercase">{{ infos.name }}</ion-title>
        <ion-title style="font-size:20px; text-transform:uppercase">ASSEDITA</ion-title>
      </ion-toolbar> -->
    </ion-header>
    <ion-content>
       <ion-card>
        <ion-img :src="'./assets/img/header.jpg'" class="img_header"></ion-img>
        <ion-card-header>
          <ion-card-subtitle>Restaurant bistronomique
          </ion-card-subtitle>
          <ion-card-title style="font-family: 'Limelight', cursive;">Assedita</ion-card-title>
        </ion-card-header>
        <ion-card-content>        
          Nous sommes un restaurant bistronomique situé en plein cœur du 9e arrondissement de Paris. Nous vous accueillons dans un cadre naturel et convivial afin de vous faire découvrir une cuisine inspirée et créative, reflet du travail de nos producteurs et artisans !  Venez chercher un repas tout prêt dans votre restaurant !
          <ion-button color="success" expand="block" fill="outline" style="margin-top:16px">Voir la carte</ion-button>
        </ion-card-content>
      </ion-card>

      <ion-card>
        <ion-card-header>
          <ion-card-subtitle>Ce que nous proposons
          </ion-card-subtitle>
          <ion-card-title style="font-family: 'Limelight', cursive;" color="warning">Le midi </ion-card-title>
        </ion-card-header>
        <ion-card-content>         
        Le soir, on abandonne le traditionnel entrée-plat-dessert pour faire place à un concept bien plus convivial et chaleureux. Venez entre amis vous asseoir autour d’une de nos tables et profiter de nos « Assedita », de délicats mets à partager, tant originaux que réconfortants. Plus de dilemme entre tel ou tel plat, commandez plusieurs assiettes à partager et laissez-vous entraîner dans un moment de découverte ! Votre soirée sera également rythmée par les accords mets-cocktails surprenants de notre mixologue Camille : des mini-cocktails détonants reprenant un élément du plat en question.
        </ion-card-content>
        <ion-img style="min-height: 1px" :src="'./assets/img/midi.JPG'" class="img_header"></ion-img>
      </ion-card>

       <ion-card>
        <ion-card-header>
          <ion-card-subtitle>Ce que nous proposons
          </ion-card-subtitle>
          <ion-card-title style="font-family: 'Limelight', cursive;" color="warning">Le soir </ion-card-title>
        </ion-card-header>
        <ion-card-content>         
          Le midi nous vous proposons une carte constituée de trois entrées, trois plats et trois desserts : une sélection courte, composée de produits frais, sourcés en circuit court et changeant régulièrement. Pour accompagner votre repas il vous sera proposé différents vins natures et bières artisanales provenant de vignerons et brasseurs soucieux d’offrir un produit naturel, reflet d’une tradition d’artisanat.
        </ion-card-content>
        <ion-img style="min-height: 1px" :src="'./assets/img/soir.JPG'" class="img_header"></ion-img>
      </ion-card>

      <ion-card style="background-color: #132c1a">
        <ion-card-header>
          <ion-card-title style="font-family: 'Limelight', cursive;" color="light">"
            Des goûts francs et marqués ni plus, ni moins, afin de donner à nos produits leurs lettres de noblesse. "
            </ion-card-title>
        </ion-card-header>
        <ion-card-content>       
         Les biquinhos aussi appelé les "Chupetinho" de notre maraîcher Pierre GAYET.
        </ion-card-content>
        <ion-img style="min-height: 1px" :src="'./assets/img/pequenos.jpg'" class="img_header"></ion-img>
      </ion-card>

     
    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonHeader, IonContent, IonCard, IonCardHeader, IonCardContent, IonCardTitle, IonCardSubtitle, IonButton, IonImg } from '@ionic/vue';
import { call, mail} from 'ionicons/icons';
import axios from "axios";
import navbar from '@/components/navbar.vue';

export default  {
  data(){
    return{
      infos : ""
    }
  },
  name: 'Home',
  components: { navbar, IonHeader, IonContent, IonPage, IonCard, IonCardHeader, IonCardContent, IonCardTitle, IonCardSubtitle, IonButton, IonImg },
    setup() {
    return {
      call,
      mail
    }
  },
    mounted(){
        axios
        .get("https://food-booking-laravel.herokuapp.com/api/infos")
        .then((response) =>{
            console.log(response.data);
            this.infos = response.data;
        })
        .catch((error) => {
          console.log(error);

        })
    }
}
</script>