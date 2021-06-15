<template>
  <ion-page >
    <ion-header>
      <navbar />
    </ion-header>
    <ion-content>
        <ion-card>
            <ion-img style="min-height: 1px" :src="'./assets/img/louis.jpg'" class="img_header"></ion-img>
            <ion-card-header>
                <ion-card-subtitle>Chef et Gérant</ion-card-subtitle>
                <ion-card-title class="font_title">Louis</ion-card-title>
            </ion-card-header>
            <ion-card-content>
            Louis, originaire de la ville d’Angers, a cuisiné dans de nombreux types de cuisines. En travaillant six mois au Mermoz avec la cheffe Manon Fleury, il a pu développer une grande créativité qu’il retranscrit bien dans nos assiettes. Chez Christopher Coutanceau (***) il s’est armé de précision et de minutie dans ses tâches, de la sélection de ses produits au dressage. Enfin la pratique du Kickboxing au niveau national lui a conféré une véritable âme de compétiteur, une confiance en lui et un sérieux faisant de lui un leader source de motivation.
            Ah et en cas de baisse de moral de l’équipe, pas de problème, il est très doué dès qu’il s’agit d’envoyer ses meilleurs pas de danse en cuisine.
            </ion-card-content>
        </ion-card>

        <ion-card>
            <ion-img style="min-height: 1px" :src="'./assets/img/pablo.jpg'" class="img_header"></ion-img>
            <ion-card-header>
                <ion-card-subtitle>Second et Responsable communication</ion-card-subtitle>
                <ion-card-title class="font_title">Pablo</ion-card-title>
            </ion-card-header>
            <ion-card-content>
            Formé dans de célèbres cuisines, notamment la Monnaie de Paris de Guy Savoy, Pablo y a appris la rigueur et la concentration. C’est un cuisinier appliqué et très organisé, redoutable dès qu’il s’agit d’accélérer le rythme. Ayant eu l’opportunité de partir apprendre auprès du chef Nick Curtin à Copenhague, il dispose dans son arsenal d’un florilège d’idées originales et novatrices. Enfin, grâce à son organisation militaire, il est un élément essentiel quand il s’agit de travailler en équipe. Par ailleurs, de militaire, il n’a pas que cela, vous observerez souvent avec un dégradé tracé à l’équerre et un rasage des plus…impeccables.
            </ion-card-content>
        </ion-card>

        <ion-card>
            <ion-img style="min-height: 1px" :src="'./assets/img/gregoire.jpg'" class="img_header"></ion-img>
            <ion-card-header>
                <ion-card-subtitle>Second et Responsable hygiène</ion-card-subtitle>
                <ion-card-title class="font_title">Grégoire</ion-card-title>
            </ion-card-header>
            <ion-card-content>
          Né à Bormes-les-Mimosas dans le Var, Grégoire est un pur produit du sud de la France ! Energique et des plus réactifs, il brille également par sa capacité d’adaptation héritée de ses expériences passées. En effet, ayant travaillé à des postes à responsabilités dans plusieurs cuisines à effectifs réduits, comme par exemple la Maison Hache, il a souvent été confronté à l’imprévu et y réagit toujours avec maîtrise. Son attrait pour la cuisine méditerranéenne offre à nos assiettes un joli rayon de soleil.
Si vous n’êtes pas encore convaincus, son humour sans limite quasi-maladif animera services en cuisine, mariages et Bar-mitsvah à merveille !
            </ion-card-content>
        </ion-card>
        <ion-card>
            <ion-img style="min-height: 1px" :src="'./assets/img/camille.jpg'" class="img_header"></ion-img>
            <ion-card-header>
                <ion-card-subtitle>Mixologue et responsable bar et stewarding</ion-card-subtitle>
                <ion-card-title class="font_title">Camille</ion-card-title>
            </ion-card-header>
            <ion-card-content>
Camille est notre chimiste, notre savant fou, notre mixologue ! Elle saura vous transporter grâce à des cocktails explosifs. Au travers de ses différentes expériences derrière le bar en France à l’hôtel de Sers ou à Amsterdam au Toren Hotel, Camille a agrandi son éventail de connaissances sur les cocktails, les softs et les vins. Débordante d’énergie et pleine de bonne humeur, elle est un véritable moteur pour l’équipe. Toujours remplies d’idées déconcertantes pour ses cocktails, elle nous pousse toujours à nous dépasser.
Néanmoins, ne vous laissez pas avoir par sa petite taille, c’est une véritable pile électrique, pire, une bombe à retardement qui devient incontrôlable une fois son shaker dans les mains !
            </ion-card-content>
        </ion-card>
        <ion-card style="margin-bottom:100px">
            <ion-img style="min-height: 1px" :src="'./assets/img/edouard.jpg'" class="img_header"></ion-img>
            <ion-card-header>
                <ion-card-subtitle>Responsable salle et gestion RH</ion-card-subtitle>
                <ion-card-title class="font_title">Edouard</ion-card-title>
            </ion-card-header>
            <ion-card-content>
            Edouard sera responsable du bon déroulé de votre repas. Et pour cela, il n’y a pas de crainte à avoir ! En effet, formé au service haut de gamme dans des établissements cinq étoiles de renom tels que l’Hôtel Bank ou The Landmark London. Son dernier stage en tant qu’assistant de direction du groupe Barrière à Deauville lui a inculqué des notions capitales en pilotage d’entreprise. Habitué à avoir du personnel sous ses ordres, il saura former nos futurs apprentis avec pédagogie. Enfin, grâce à ses connaissances en bières, il a su nous constituer une carte de bières artisanales des plus originales.
Si vous n’arrivez plus à entendre votre voisin c’est probablement car Edouard PARLE EXCESSIVEMENT FORT… Un conseil, tendez-lui une bière fraîche, ça marche à tous les coups !
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