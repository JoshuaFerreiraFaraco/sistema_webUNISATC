export default function FormularioComponent({ name, preco, estoque, handleName, handlePreco, handleEstoque, saveForm}) {
    return (
        <div className="container">
          <h2>Cadastro de Produtos</h2>
          <form onSubmit={(e) => saveForm(e)}>
              <label htmlFor="nome">Nome:</label>
              <input type="text" name="nome" value={ name } onChange={(e) => handleName(e)}/>

              <label htmlFor="preco">Preço:</label>
              <input type="number" name="preco" value={ preco } onChange={(e) => handlePreco(e)} />

              <label htmlFor="estoque">Estoque:</label>
              <input type="number" name="estoque" value={ estoque } onChange={(e) => handleEstoque(e)} />

              <input type="submit" value="Cadastrar" />
          </form>
      </div>
    )
}