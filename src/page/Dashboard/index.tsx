import { useState } from 'react'
import { Header } from '../../components/Header'
import { TransactionTable } from '../../components/TransactionTable'
import { Summary } from '../../components/Summary'
import { NewTransactionModal } from '../../components/NewTransactionModal'
import { Button } from '@/components/Button'


export const Dashboard = () => {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransactionModalOpen(false);
  }

  return (
    <>
      <Header />
      <Button name='Nova transação' onClick={handleOpenNewTransactionModal}/>
      <Summary />
      <TransactionTable />
      <NewTransactionModal  
        isOpen={ isNewTransactionModalOpen }
        onRequestClose={ handleCloseNewTransactionModal } 
      />
    </>
  )
}
