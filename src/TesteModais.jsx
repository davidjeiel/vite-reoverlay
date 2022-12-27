import React,{ useState } from 'react'
import { Reoverlay, ModalWrapper } from 'reoverlay';
import MyModal from './MyModal'
import ModalCont from './ModalCont'

export default function TesteModais()
{
  const [isConfirmModalOpen, setConfirmModal] = useState(false);
  const OpenModal = ()=>{
    Reoverlay.showModal(MyModal);
    setConfirmModal(true);
    console.debug( isConfirmModalOpen );
  }
  const CloseModal = () => {
    Reoverlay.hideModal();
    setConfirmModal(false);
    console.debug( isConfirmModalOpen );
  };

  const toggleModal = () => {
    Reoverlay.showModal("ModalCont", {
      confirmText: "Tem certeza que vai confirmar esse trem?",
      onConfirm: () => {
        console.debug('confirmado')
      },
      closeModal: ()=>{
        console.debug('fechado')
      }
    })
  };

  return (
    <div className="App">
      <div>
        <MyModal isOpen={ isConfirmModalOpen }/>
        <button
          type="button" 
          onClick={ ()=>OpenModal() }
        >
          Abre
        </button>
        <button
          type="button"
          onClick={ ()=>CloseModal() }
        >
          Fecha
        </button>
      </div>
      <div style={{ paddingTop: "5%" }}>
        <button onClick={ ()=>toggleModal }>
          Modal Cont
        </button>
        <ModalCont
        />
      </div>
    </div>
  )
}