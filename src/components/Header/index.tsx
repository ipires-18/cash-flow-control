import { Container, Logo ,Info, Menu, Exit } from './styles'
import { FiPower } from 'react-icons/fi'
import { useHistory } from 'react-router-dom'
import { FormEvent } from 'react'

import logoImg from '../../assets/svg/logo.svg'


export const Header = () => {
  const history = useHistory()

  function handleReport(e:FormEvent) {  
    e.preventDefault()
    history.push('/relatorio')
    console.log('relatorio')
  }

  function handleHome(e:FormEvent) {  
    e.preventDefault()
    history.push('/inicio')
    console.log('inicio')
  }

  function handleExit(e:FormEvent) {  
    e.preventDefault()
    history.push('/')
    console.log('/')
  }


  return (
    <>
      <Container>
        <Logo>
          <img src={logoImg} alt="Logotipo" style={{height: 150, marginLeft:50}} />
          <Info>
            <p>Bem vindo,</p>
            <p style={{color:'#FF9000', fontWeight:'700'}}>Tiago Luchtenberg</p>
            <p>Administrador</p>
          </Info>
          <Menu>
            <p style={{cursor:'pointer'}} onClick={handleHome}>Inicio</p>
            <p style={{cursor:'pointer'}} onClick={handleReport}>Relatório de Fluxo de Caixa</p> 
          </Menu>
        </Logo>
        <Exit>
          <FiPower size={20} className="icon-exit" onClick={handleExit}/>
        </Exit>
      </Container>
    </>
    
  )
}
