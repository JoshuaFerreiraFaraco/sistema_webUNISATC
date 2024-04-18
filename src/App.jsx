
import './App.css'
import EventComponent from './components/EventComponent'
import IntroComponent from './components/IntroComponent'
import ConditionalComponent1 from './components/ConditionalComponent1'
import ConditionalComponent2 from './components/ConditionalComponent2'
import ProductComponent from './components/ProductComponent'
import PostComponent from './components/PostComponent'
import GenericComponent from './components/GenericComponent'
import MyButtonComponent from './components/MyButtonComponent'
import UseStateComponent1 from './components/UseStateComponent1'

function App() {
  let component; 
  let condition = true;

  const products = [
    { id: 1, name: 'Laranja'},
    { id: 2, name: 'Uva'},
    { id: 3, name: 'Maçã'},
  ];

  const posts = [
    { id: 1, title: 'Titulo Post 1', description: 'Descrição Post 1'},
    { id: 2, title: 'Titulo Post 2', description: 'Descrição Post 2'},
    { id: 3, title: 'Titulo Post 3', description: 'Descrição Post 3'},
  ];
  return (
    <>
      <h2>Componente principal</h2>
      <IntroComponent />
      <EventComponent />

      {/** Renderização Condicional */}

      <div>
        {condition ? <ConditionalComponent1 /> : <ConditionalComponent2 />}
      </div>

      {/** Renderização MAP */}

      <ul>
        {products.map(product => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
          </tr>
        </thead>
        <tbody>
          {products.map(product => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
      
      {/** Props */}

      <ProductComponent name="Arroz" category="Alimento" />
      <ProductComponent name="Martelo" category="Ferramenta" />
      
      {/** Lista de Componentes */}

      {posts.map((post) => (
        <PostComponent key={post.id} title={post.title} description={post.description}/>
      ))}

      {/** Children Props */}

      <div>
        <GenericComponent>
          <p>Eu sou o primeiro conteúdo fornecido pelo componente pai</p>
          <hr />
        </GenericComponent>
      </div>

      <div>
        <GenericComponent>
          <p>Eu sou o segundo conteúdo fornecido pelo componente pai</p>
          <ul>
            <li>Item 01</li>
            <li>Item 02</li>
          </ul>
          <hr />
        </GenericComponent>
      </div>

      {/** Hook useState 1*/}
      <MyButtonComponent />

      {/** Hook useState 2*/}
      <UseStateComponent1 />
    </>
  )
}

export default App
