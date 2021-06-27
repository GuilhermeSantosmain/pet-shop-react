import http from "../../Componentes/http";
import { useState, useEffect } from "react";
import Card from '../../Componentes/Card'

const Produtos = () => {

    const [produtos, setProdutos] = useState([])
    const obterProdutos = () => {
        http.get('produtos')
            .then(response => setProdutos(response.data))
            .catch(erro => console.log(erro))
    }

    useEffect(() => {
        obterProdutos()
    }, [])


    return (
        <div>
            {produtos.map((produto) =>
                <Card
                key={produto.id}
                nome={produto.nome}
                preco={produto.preco}
                id={produto.id}
                tipo='produtos'/>
                    
            )}

        </div>
    )
}
export default Produtos