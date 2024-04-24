
import './Exercicio01.css'
import ExercicioComponent from './components/ExercicioComponent'

export default function Exercicio01() {
  const posts = [
    { id: 1, nome: 'Maça', preco: '10,00', estoque: '20,50'},
    { id: 2, nome: 'Banana', preco: '8,00', estoque: '40,70'},
    { id: 3, nome: 'Melancia', preco: '7,00', estoque: '100,00'},
    { id: 4, nome: 'Melão', preco: '9,00', estoque: '30,00'},
    { id: 5, nome: 'Uva', preco: '11,00', estoque: '50,00'},
  ];
  return (
    <>
      <h2>Atividade Exercício 01</h2>

      <ExercicioComponent products={posts}/>
    </>
  )
}
