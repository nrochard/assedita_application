<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#"> <ion-img id="logo-header" :src="'./assets/img/logo_white.png'"></ion-img></a>
    <button class="custom-toggler navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="custom-toggler navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <!-- <a class="nav-link active" aria-current="page" href="#">Accueil</a> -->
        <a class="nav-link" href="/restaurant">Le restaurant</a>
        <a class="nav-link" href="/carte">La carte</a>
        <a class="nav-link " href="/equipe" tabindex="-1" aria-disabled="true">L'équipe</a>
        <a class="nav-link " href="/contact" tabindex="-1" aria-disabled="true">Contact & Accès</a>
        <!-- <a class="nav-link " href="/reservation" tabindex="-1" aria-disabled="true">Réservation</a> -->
        <a class="nav-link " href="/abonnements" tabindex="-1" aria-disabled="true">Les abonnements</a>
         <a class="nav-link " href="/blog" tabindex="-1" aria-disabled="true">Idées & Conseils</a>
        <!-- <a class="nav-link " href="/compte" tabindex="-1" aria-disabled="true">Mon compte</a> -->
      </div>
    </div>
  </div>
</nav>
</template>

<script>
import { IonImg} from '@ionic/vue';

export default {
    components: {
        IonImg
    },
    name : 'navbar'
}
</script>

<style scoped>
nav{
    background-color: #132c1a !important;;
}

nav a{ 
    color: white !important;
}

#logo-header{
    width: 100px;
}

.custom-toggler.navbar-toggler {
  border-color: #132c1a;
} 

.custom-toggler .navbar-toggler-icon {
  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(255,255,255, 1)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 8h24M4 16h24M4 24h24'/%3E%3C/svg%3E");
}

.navbar-toggler:focus{
    box-shadow: none !important;
}
.nav-link
{
    font-family: 'Mulish', sans-serif;
}
</style>