export default function ExercicioComponent({ products, editProduct, deleteProduct }) {
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th width="15%" align="left">ID</th>
                        <th align="left">Nome</th>
                        <th align="left">Preço</th>
                        <th align="left">Estoque (kg)</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                {products.map(product => (
                    <tr key={product.id}>
                        <td align="left">{product.id}</td>
                        <td align="left">{product.name}</td>
                        <td align="left">{product.preco}</td>
                        <td align="left">{product.estoque}</td>
                        <td>
                            <button type="button" onClick={() => editProduct(product.id)}>Editar</button>
                            <button type="button" onClick={() => deleteProduct(product.id)}>Excluir</button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    )
}