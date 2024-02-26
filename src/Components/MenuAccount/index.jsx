import React from "react";
import './style.css'
import BtnClose from "../Btns/BtnClose";

export default function MenuAcount ({btnClose,onClickClose}) {
  return(
    <div className="card-account">
      <div className="close-account" onClick={onClickClose}>
          <BtnClose/>
      </div>
      <ul>
        <li>
          jerisantos
        </li>
        <li>
          Ver Perfil
        </li>
        <li>
          Discussões
        </li>
        <li>
          Listas
        </li>
        <li>
          Classificações
        </li>
        <li>
          Lista de Interesses
        </li>
        <li>
          Editar Perfil
        </li>
        <li>
          Definições
        </li>
        <li>
          Terminar Sessão
        </li>
      </ul>
    </div>
  )
}