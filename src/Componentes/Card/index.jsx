import './estilos.css'
import {Link} from 'react-router-dom'
const Card = (props) => {
    return (
    <div className='cartao'>
        <Link to={`/${props.tipo}/${props.id}`}>
        <h3>{props.nome}</h3>
        <div>R${props.preco}</div>
        </Link>
    </div>
    )
}
export default Card