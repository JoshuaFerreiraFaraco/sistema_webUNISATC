import { Link, useNavigate } from "react-router-dom";

const products = [
    {id: 1, name: 'Banana', price: 8},
    {id: 2, name: 'Laranja', price: 9},
    {id: 3, name: 'Melancia', price: 14}
]

export default function Products() {
    const navigate = useNavigate();

    const navegar = () => {
        navigate('/')
    }

    return(
        <div>
            {products.map((prod) => (
                    <ul key={prod.id} style={{listStyle: 'none'}}>
                        <li>Nome: {prod.name}</li>
                        <li>Preço: {prod.price}</li>
                        <li><Link to={`/products/${ prod.id }`}>Editar</Link></li>
                        <li><Link to={`/products/${ prod.id }/info`}>Mais informações</Link></li>
                        <li><hr /></li>
                    </ul>
                ))}
            <button onClick={navegar}>Editar</button>
        </div>
    )
}