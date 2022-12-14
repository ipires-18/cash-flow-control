import { FormEvent, useState } from 'react';
import { Container, TransactionTypeContainer, RadioBox } from './styles';

import Modal from 'react-modal';
import closeImg from '../../assets/svg/fechar.svg';
import incomeImg from '../../assets/svg/entrada.svg';
import outcomeImg from '../../assets/svg/saida.svg';

Modal.setAppElement('#root');

interface NewTransactionModalProps {
  isOpen: boolean; 
  onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {

  const [title, setTitle] = useState('')
  const [amount, setAmount] = useState('')
  const [category, setCategory] = useState('')
  const [type, setType] = useState('deposit');


  return (
    <Modal 
      isOpen={isOpen} 
      onRequestClose={ onRequestClose }
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button 
        type="button" 
        onClick={ onRequestClose} 
        className="react-modal-close"
      >
        <img src={closeImg} alt="Fechar modal" />
       </button>
      <Container onSubmit={ () => {}}>
        <h2>Cadastrar informação</h2>
        <input 
          placeholder="Título" 
          value={ title } 
          onChange={ event => setTitle(event.target.value)}
        />
        <input 
          type="text" 
          placeholder="Valor"
          value={ amount } 
          onChange={ event => setAmount(event.target.value)}
        />
         <input 
          placeholder="Categoria"
          value={ category } 
          onChange={ event => setCategory(event.target.value)}
        />
        <TransactionTypeContainer>
          <RadioBox 
            type="button"
            onClick={ () => { setType('deposit') }}
            isActive={type === 'deposit'}
            activeColor="green"
          >
            <img src={ incomeImg } alt="Entrada" />
            <span>Entrada</span>
          </RadioBox>
          <RadioBox
            type="button"
            onClick={ () => { setType('withdraw') }}
            isActive={type === 'withdraw'}
            activeColor="red"
          >
            <img src={ outcomeImg } alt="Saída" />
            <span>Saída</span>
          </RadioBox>
        </TransactionTypeContainer>
       
        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  )
}