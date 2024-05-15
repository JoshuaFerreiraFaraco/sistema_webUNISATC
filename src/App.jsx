
import { useEffect, useState } from 'react';
import './App.css'
import ExercicioComponent from './components/ExercicioComponent'
import FormularioComponent from './components/FormularioComponent'

function App() {
  const [products, setProducts] = useState([]);
  const [id, setId] = useState(1);
  const [name, setName] = useState("");
  const [preco, setPreco] = useState("");
  const [estoque, setEstoque] = useState("");
  const [edit, setEdit] = useState(false);

  const url = 'http://localhost:3000/products';

  useEffect(() => {
    //Lista todos os produtos:

    const getProductsList = async() => {
      const res = await fetch(url);
      const data = await res.json();
      setProducts(data);
    }

    getProductsList();
  }, [])

  //Busca apenas um produto pelo seu id:
  const editProduct = async(id) => {
    // Faz a requisição http
    const res = await fetch(url + `/${id}`);
    const data = await res.json();

    // Carrega os dados no formulário para edição:
    setName(data.name);
    setPreco(data.preco);
    setEstoque(data.estoque);
    setId(data.id);

    // Habilita edição:
    setEdit(true);
  }

  const saveForm = async (e) => {
    e.preventDefault();
    const saveRequestParams = {
      method: edit ? "PUT" : "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({ name, preco, estoque })
    }

    // Cria url para buscar todos ou apenas um produto
    const save_url = edit ? url + `/${id}` : url;
    // Faz a requisição http
    const res = await fetch(save_url, saveRequestParams);
    
    // Se for cadastro de produto novo:
    if (!edit) {
      const newProduct = await res.json();
      
      // Atualização da tabela:
      setProducts((prevProducts) => [...prevProducts, newProduct]);
    }

    // Se for edição/atualização de produto já cadastrado:
    if (edit) {
      const editedProduct = await res.json();

      // Atualização da tabela:
      const editedProductIndex = products.findIndex(prod => prod.id === id);
      products[editedProductIndex] = editedProduct;
      setProducts(products);
    }

    clearForm();
    setEdit(false);
  }

  const clearForm = () => {
    setName("");
    setPreco("");
    setEstoque("");
  }

  const deleteProduct = async(id) => {
    // Faz a requisição http
    const res = await fetch(url + `/${id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json"
      },
    });

    const deletedProduct = await res.json();
    // Atualização da tabela:
    setProducts(products.filter(prod => prod.id !== deletedProduct.id));
  }

  // Mudança dos estados ao digitar no formulário:
  const handleName = (e) => {setName(e.target.value)};
  const handlePreco = (e) => {setPreco(e.target.value)};
  const handleEstoque = (e) => {setEstoque(e.target.value)};

  return (
    <>
      <h2>Atividade Exercício 02</h2>
      <ExercicioComponent products={products} editProduct={ editProduct } deleteProduct={ deleteProduct }/> 
      <FormularioComponent name={ name } preco={ preco } estoque={ estoque } handleName={ handleName } handlePreco={ handlePreco } handleEstoque={ handleEstoque } saveForm={ saveForm }/>
    </>
  )
}

export default App
