import ChildComponent from "./ChildComponent"

function IntroComponent() {
    const a = 2, b = 3, nome = 'Rodrigo'
    const aluno = {
        nome: 'João',
        email: 'joao@email.com'
    }
    return(     
        <div>
            <p>Componente de introdução</p>
            <h3>JSX Expressions</h3>
            <p>{nome} o produto entre {a} e {b} é {a * b}</p>
            <p>Aluno: {aluno.nome} <br />E-mail: {aluno.email}</p>
            {/* Hierarquia de componentes */}
            <ChildComponent />
        </div>
    )
}

export default IntroComponent