import React from 'react';
import Vehicule from './Vehicule'


const Garage =()=>{

    return(
        <div>
            <h1>Garage</h1>
            <Vehicule marque="Mercedes" model="S 260" annee="1991" couleur="Bleu" carburant="Essence" valide="Non valide"/>
            <Vehicule marque="Fiat" model="500" annee="2010" couleur="Noire" carburant="Essence" valide="Non valide"/>
            <Vehicule marque="Volkswagen" model="Crafter" annee="2016" couleur="Blanche" carburant="Diesel" valide="Valide"/>
            <Vehicule marque="BMW" model="114" annee="2012" couleur="Bleu" carburant="Essence" valide="Non valide"/>
            <Vehicule marque="Audi" model="A3" annee="2015" couleur="Rouge" carburant="Diesel" valide="Valide"/>

        </div>
        
      

    )
};
    export default Garage;