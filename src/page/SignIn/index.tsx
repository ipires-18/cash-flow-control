import { FormEvent } from 'react'
import { useHistory } from 'react-router-dom'
import { Container, Content, Background } from './styles'
import logoImg from '../../assets/svg/logo.svg'

export const SignIn = () => {
  const history = useHistory()

  function handleLogin(e:FormEvent) {  
    e.preventDefault()
    history.push('/inicio')
  }


  return (
    <Container>
      <Content>
        <img src={logoImg} alt="logotipo" />

        <form>
          <h1>Login</h1>
          <input type="text" placeholder='E-mail' />
          <input type="password" placeholder='Senha' />
          <button type='submit' onClick={handleLogin} >Entrar</button>
        </form>

      </Content>
      <Background/>
    </Container>
  )
}
