import { Container } from "./styles";
import totalImg from '../../assets/svg/total.svg';
import incomeImg from '../../assets/svg/entrada.svg';
import outcomeImg from '../../assets/svg/saida.svg';

export function Summary() {
  return(
    <Container>  
      <div>
        <header>
          <p>Entradas</p>
          <img src={ incomeImg } alt="Entradas" />
        </header>
        <strong>
        {new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL'
        }).format(3000)}
        </strong>
      </div>
      <div>
        <header>
          <p>Saídas</p>
          <img src={ outcomeImg } alt="Saídas" />
        </header>
        <strong>
        -
        {new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL'
        }).format(3000 )}
        </strong>
      </div>
      <div className="total">
        <header>
          <p>Total</p>
          <img src={ totalImg } alt="Total" />
        </header>
        <strong>
        {new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL'
        }).format(3000)}
        </strong>
      </div>
    </Container>
  )
}