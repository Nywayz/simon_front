import React from "react";
import styled from "styled-components";

export const Fond = styled.div`
    position: absolute;
    height: 100%;
    top: 0;
    bot: 0;
    left: 0;
    right: 0;
    background-color: grey;
`;

export const FondAccueil = styled.div`
    display: flex;
    flex-direction: column;
    width: 80%;
    margin: 0 10%;
    text-align: center;
    vertical-align: center;
    justify-content: center;
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    color: red;
`;

export const Cache = styled.div`
    position: absolute;
    height: 100%;
    top: 0;
    bot: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 1);
    display: none;
`;

export const FondJeu = styled.div`
    display: flex;
    flex-direction: column;
    width: 80%;
    margin: 0 10%;
    text-align: center;
    vertical-align: center;
    justify-content: center;
`;

export const FondBordure = styled.div`
    display: flex;
    flex-direction: column;
    vertical-align: center;
    justify-content: center;
    height: 450px;
    margin: 0 15%;
`;

export const GroupCase = styled.div`
    display: flex;
    flex-direction: row;
    vertical-align: center;
    justify-content: center;
    height: 450px;
    margin: 0;
`;

export const Case = styled.div`
    display: flex;
    background-color: black;
    width: 130px;
    height: 130px;
    margin: 10px 10px;
`;

export const Timer = styled.h2`
    
`;

export const Fin = styled.div`
`;