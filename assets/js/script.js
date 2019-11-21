$(function(){

//Ce script permet à travers une fonction prenant comme argument le numéro du mois dont
//on veut savoir le nombre de jours et l'année désirée.
//Le mois doit être passé au format chiffre (0: janvier, 1: février, 2:mars, ...) et l'année au
//format 4 chiffres classique( 2011, 2012 ,...). Le script prend en compte les années bissextiles.
  function NonbreJourMois(mois, annee){
     var nbreJour = 0;
  	 if (mois <= 6){
  	  if (mois%2 == 0){
  		  nbreJour = 31;
  	  }
  	  else{
  		  nbreJour = 30;
  	  }
     }
     else{
  	  if (mois%2 == 1){
  		  nbreJour = 30;
  	  }
  	  else{
  		 nbreJour = 31;
  	  }
     }
     if (mois == 1){
  	  if(annee%4==0){
  	      if(annee%100==0){
    	    if(annee%400==0){
     		    nbreJour = 29;
     	    }
     	    else{
      		  nbreJour = 28;
     	    }
  	    }
        else{
   		    nbreJour = 29;
  	    }
      }
      else{
  	      nbreJour = 28;
      }
     }
     return nbreJour;
   }

  var date = new Date();
  //var tab_jour=new Array("Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi");
  var tab_jour=new Array("Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi","Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi",
    "Vendredi", "Samedi","Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi","Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi");
  var tab_mois=new Array("Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Aout", "Septembre", "Octobre", "Novembre", "Décembre");
  var jourJ = tab_jour[date.getDay()];
  var jour = date.getDate();
  var numJour = date.getDay();
  var mois = date.getMonth();
  var moisString = tab_mois[date.getMonth()];
  var an = date.getFullYear();
  var hours = date.getHours();
  var chaineDate = date.toDateString();
  var chaineDate1 = date.toLocaleString();
  var chaineDate2 = date.toLocaleDateString();
  var nbJourMois = NonbreJourMois(mois +1, an); //on ajoute 1 pour avoior le mois rééel
  var i;

  $('#content').append(`
    <div style="display-flex-wrap">
    <p>Aujourd hui, nous sommes le : [jourJ = tab_jour[date.getDay()] jour = date.getDate() moisString = tab_mois[date.getMonth()] an = date.getFullYear()]<br>
    Aujourd hui, nous sommes le : ${jourJ} ${jour} ${mois+1} ${an}</p>
    <p>[numJour = date.getDay()] <br> numéro du jour de la semaine = ${numJour}</p>
    <p>[date = new Date()] <br> date = ${date}</p>
    <p>[jour du mois : date.getDate()] <br> jour = ${jour}</p>
    <p>[mois : date.getMonth() -> janvier = index0, décembre = index1] <br> mois = ${mois}</p>
    <p>[var tab_mois=new Array("Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Aout", "Septembre", "Octobre", "Novembre", "Décembre")] <br>
      [moisString = tab_mois[date.getMonth()]] <br> mois = ${moisString}</p>
    <p>[année : date.getFullYear()] <br> an = ${an}</p>
    <p>[format date 1 : date.toDateString()] <br> an = ${chaineDate}</p>
    <p>[format date 2 : date.toLocaleString()] <br> an = ${chaineDate1}</p>
    <p>[format date 3 : date.toLocaleDateString()] <br> an = ${chaineDate2}</p>
    </div>
    <div style="display-flex-wrap">
    <p>Calcul sur les dates<br>
      ${nbJourMois}
    </p>
    <select id="selAnnee" name="selAnnee">
      <option value="" selected>Sélectionnez l'année</option>
      <option value="${an}">${an}</option>
      <option value="${an+1}">${an+1}</option>
    </select>
    <select id="selMoisAnnee" name="selMoisAnnee">
      <option value="" selected>Sélectionnez le mois</option>
     <!--option value="${date.getMonth()}">${tab_mois[date.getMonth()]}</option-->
    </select>
    <select id="selJourDuMois" name="selJourDuMois">
      <option value="" selected>Sélectionnez le jour</option>
    </select>
    </div>
    `);

    //si clique sur l'année
    $('#selAnnee').on('click', function(){
      //remise à 0 du select
      $('#selJourDuMois option').remove();
      $('#selMoisAnnee option').remove();
      //s'il s'agit de l'année en cours
      if(an == $('#selAnnee').val()){
        //boucle pour réccupérer le nb de jours entre aujourd'hui et la fin du mois
        for(i=jour; i<= nbJourMois; i++){
          $('#selJourDuMois').append(`
            <option value="${i}">${tab_jour[i+numJour]} ${i}</option>
          `);
        };
        //boucle pour réccupérer le nb de mois jusqu'à la fin de l'année
          for(i=mois; i< 12; i++){
            $('#selMoisAnnee').append(`
              <option value="${i}">${tab_mois[i]}</option>
            `);
          };
      }
      //sinon s'il s'agit de l'année suivante
      else{
        for(i=0; i< 12; i++){
          $('#selMoisAnnee').append(`
            <option value="${i}">${tab_mois[i]}</option>
          `);
        };

      }
    });

    //si on clic sur le mois après avoir choisi l'année
    $('#selMoisAnnee').on('click', function(){
      //si le mois sélectionné n'est pas celui de l'année en cours
      if($('#selMoisAnnee').val() != mois){
        //remise à 0 du select
      $('#selJourDuMois option').remove();


      }
      //sinon, s'il s'agit de remettre le mois en cours
      else{ //pb avec le mois en cours et l'année suivante
        for(i=jour; i<= nbJourMois; i++){
          $('#selJourDuMois').append(`
            <option value="${i}">${tab_jour[i+numJour]} ${i}</option>
          `);
        };

      }

    });

});
