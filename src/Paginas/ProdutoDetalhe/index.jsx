import http from "../../Componentes/http"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
const ProdutoDetalhe = () => {
    const {id} = useParams()
    const [produto, setProduto] = useState({})
    useEffect(() => {
        http.get('produtos/' + id)
        .then(response => setProduto(response.data))
    }, [id])
    return(
        <div>
            <h1>{produto.nome}</h1>
            <h1>R${produto.preco}</h1>
            </div>
    )
}
export default ProdutoDetalhe