import React, { useEffect } from "react";
import {getSerie, setScore} from "../api/wrapper";
import {Case, Fin, FondBordure, FondJeu, GroupCase, Timer} from "../styles/Accueil.style";
import Bordure from "./Bordure";

const Jeu = (props) => {

    let cases = [];
    let lignes = []
    let actualCheck = [];
    let actual = 1;
    let val = [];
    let blockedGame = 1;
    let seconds = 0;
    let stopTimer = "";

    function beginTimer(){
      stopTimer =  setInterval(function(){ seconds += 1},1000)
    }

    async function fetchData() {
        const data = await getSerie(1);
        val.push(data.data.firstNumber)
        val.push(data.data.secondNumber)
        val.push(data.data.thirdNumber)
        val.push(data.data.fourthNumber)
        val.push(data.data.fifthNumber)
        return data;
    }
    fetchData()

    function isCliqued(number, needToCheck = 0, lock = 0){

        if(blockedGame == 0){
            let here = document.getElementById(number);
            setTimeout(function (number){ document.getElementById(number).style.backgroundColor = "black"; }, 500, number);
            switch (number){
                case 1:
                    here.style.backgroundColor = "white";
                    break;
                case 2:
                    here.style.backgroundColor = "red";
                    break;
                case 3:
                    here.style.backgroundColor = "blue";
                    break;
                case 4:
                    here.style.backgroundColor = "purple";
                    break;
                case 5:
                    here.style.backgroundColor = "yellow";
                    break;
                case 6:
                    here.style.backgroundColor = "brown";
                    break;
                case 7:
                    here.style.backgroundColor = "cyan";
                    break;
                case 8:
                    here.style.backgroundColor = "pink";
                    break;
                case 9:
                    here.style.backgroundColor = "orange";
                    break;
            }

            if (needToCheck == 0){
                if (actualCheck[0] == number){
                    actualCheck.shift();
                    if (actualCheck.length == 0){
                        actual += 1;
                        if(actual == 6){
                            endGame()
                        }
                        else  {
                            setTimeout(function (){start();}, 1000)
                        }
                    }
                }
                else {
                    actual = 1;
                    setTimeout(function (){start();}, 1000)
                }
            }
        }

        if (lock === 1){
            blockedGame = 0;
            actual = 1;
            seconds = 0;
            console.log('start')
            beginTimer();
            start();
        }
    }

    function start(){
        actualCheck = [];
        if (val.length != 0){
            for(let i = 0; i < actual; i++){
                setTimeout(function (valalo){isCliqued(valalo, 1)}, 600 * i, val[i] )
                actualCheck.push(val[i]);
            }
        }
    }

    function selectCase(myself, number){
        isCliqued(number);
    }


    for (let i = 0; i <= 6; i += 3){
        cases.push(<GroupCase key={i}><Case onClick={(e) => {selectCase(e, i+1)}} id={i+1} key={i+1}/><Case onClick={(e) => {selectCase(e, i+2)}} id={i+2} key={i+2}/><Case onClick={(e) => {selectCase(e, i+3)}} id={i+3} key={i+3}/></GroupCase>)
    }


    function endGame(){
        console.log('fin')
        blockedGame = 1;
        document.getElementById('cache').display = "block";
        clearInterval(stopTimer)
        console.log(seconds)
    }

    const send = async () => {
        let response = await setScore({ pseudo: document.getElementById('pseudo').value, score:seconds,  });
    };

    return (
        <FondJeu>
            <h2>Jeu</h2>
            <div onClick={(e) => {isCliqued(1, 1, 1)}}>START</div>
            <FondBordure>
                {cases}
            </FondBordure>
            <Fin id={'Fin'}>
                Votre pseudo : <input id={'pseudo'} type={'text'}/> <button onClick={(e) => {send()}}>Valider</button>
            </Fin>
        </FondJeu>
    )
};
export default Jeu;