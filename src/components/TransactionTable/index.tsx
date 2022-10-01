import { Container } from "./styles";

export function TransactionTable() {
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
            <tr>
              <td>Titulo</td>
              <td className="deposit">
                {new Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL'
                }).format(5000)}
              </td>
              <td>Categoria</td>
              <td>
              {new Intl.DateTimeFormat('pt-BR').format(
                new Date()
              )}
              </td>
            </tr>
            <tr>
              <td>Titulo</td>
              <td className="withdraw">
                {new Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL'
                }).format(5000)}
              </td>
              <td>Categoria</td>
              <td>
              {new Intl.DateTimeFormat('pt-BR').format(
                new Date()
              )}
              </td>
            </tr>
        </tbody>
      </table>
    </Container>
  )
}