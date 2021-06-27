import './estilos.css'
import { Link } from 'react-router-dom'
const Navbar = () => {

    const menu = [
        {
            titulo: 'Home',
            link: '/'
        },
        {
            titulo: 'Produtos',
            link: '/produtos'
        },
        {
            titulo: 'Servicos',
            link: '/servicos'
        }
       
    ]


    return (
        <nav className="cabecalho">
            <ul>
                {menu.map(item => <li key={item.titulo}>
                    <Link to={item.link}>{item.titulo}</Link>
                </li>
                )}
            </ul>
        </nav>
    )
}
export default Navbar