import React from "react";
import {FondAccueil} from "../styles/Accueil.style";
import {getScores, getSerie} from "../api/wrapper";

const Accueil = (props) => {
    let val = [];
    let list = []

    async function fetchScores() {
        const data = await getScores();
        val.push(data.data['hydra:member']);
        console.log(list)
        return data.data['hydra:member'];
    }
    fetchScores()

    console.log(val)

    return (
        <FondAccueil>
            <div>Scores :</div>
            <div>
                {list}
            </div>
        </FondAccueil>
    )
}

export default Accueil;