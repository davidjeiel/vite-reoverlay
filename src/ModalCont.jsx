import React from 'react';
import { ModalWrapper, Reoverlay } from 'reoverlay';
import 'reoverlay/lib/ModalWrapper.css';

export default function ModalCont({ confirmText, onConfirm }) 
{ 
  const fecharModal = () => {
    Reoverlay.hideModal("ModalCont", {
      confirmText: "Tem certeza que vai confirmar esse trem?",      
      closeModal: ()=>{
        console.debug('fechado')
      }
    })
  };

  return (
    <ModalWrapper>
      {confirmText}
      <button onClick={onConfirm}>Yes</button>
      <button onClick={fecharModal}>No</button>
    </ModalWrapper>
  );
}
