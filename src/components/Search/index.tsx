import { Container } from './styles'
import { FiSearch } from 'react-icons/fi'
import { Select } from '../Select'



export const Search = () => {
 
  return (
    <Container>
       <Select  />
    
      <input type="date" name="" id="" />

      <button type="submit">
        <FiSearch size={20}/>
        Buscar
      </button>    
    </Container>
  )
}
