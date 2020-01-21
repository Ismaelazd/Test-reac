import React,{useState} from 'react';


const Vehicule =(props)=>{

    const[valide,setValide] = useState(props.valide)

    return(
        <ul>
            <li className={valide == 'Non valide' ? 'nonvalide' : ""}>{props.marque} {props.model} {props.annee} {props.couleur}  {props.carburant} {valide}</li>
            <button onClick={()=>setValide('Valide')}>Valider véhicule</button>
        </ul>

    )
};
    export default Vehicule;