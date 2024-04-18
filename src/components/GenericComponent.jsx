export default function GenericComponent({ children }) {
    return (
        <div>
            <h3>HTML passado pelo componente pai</h3>
            {children}
        </div>
    )
}