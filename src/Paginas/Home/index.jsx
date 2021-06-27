import imagem from './logo-petshop.png'
import "./estilos.css"
const Home = () => {

    return(
        <div className='outdoor'>
            <div className='logo-home'>                
                <img className='logo' src={imagem} alt="casa"/>
            </div>
        </div>
        

    )
}
export default Home