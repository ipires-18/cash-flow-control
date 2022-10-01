import { Header } from '../../components/Header'
import { TransactionTable } from '../../components/TransactionTable'
import { Summary } from '../../components/Summary'
import { Search } from '../../components/Search'

export const Report = () => {
  
  return (
    <>
      <Header />
      <Search />
      <Summary />
      <TransactionTable />
    </>
  )
}
