import { FiEdit } from 'react-icons/fi'
import { Container } from './styles'

interface IButton {
  name:string;
  onClick: () => void
}

export const Button = ({name, onClick}:IButton) => {
  return (
    <Container onClick={onClick}>
      <button>
        <FiEdit size={20}/>
        {name}
      </button>
    </Container>
  )
}
