$(function(){

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
  var tab_jour=new Array("Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi");
  var tab_mois=new Array("Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Aout", "Septembre", "Octobre", "Novembre", "Décembre");
  var jourJ = tab_jour[date.getDay()];
  var jour = date.getDate();
  var mois = date.getMonth();
  var moisString = tab_mois[date.getMonth()];
  var an = date.getFullYear();
  var hours = date.getHours();
  var chaineDate = date.toDateString();
  var chaineDate1 = date.toLocaleString();
  var chaineDate2 = date.toLocaleDateString();
  var nbJourMois = NonbreJourMois(mois, an);
  var i;

  $('#content').append(`
    <div style="display-flex-wrap">
    <p>Aujourd hui, nous sommes le : [jourJ = tab_jour[date.getDay()] jour = date.getDate() moisString = tab_mois[date.getMonth()] an = date.getFullYear()]<br>
    Aujourd hui, nous sommes le : ${jourJ} ${jour} ${mois} ${an}</p>
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
    <select id="jourDuMois" name="jourDuMois">
      <option value="" selected>Sélectionnez</option>
    </select>
    </div>
    `);
    for(i=jour; i<= nbJourMois; i++){
      $('#jourDuMois').append(`
        <option value="${i}">${i}</option>
        `);
};


});
