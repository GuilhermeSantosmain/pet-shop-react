import http from "../../Componentes/http"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
const ServicoDetalhe = () => {
    const {id} = useParams()
    const [servico, setServico] = useState({})
    useEffect(() => {
        http.get('servicos/' + id)
        .then(response => setServico(response.data))
    }, [id])
    return(
        <div>
            <h1>{servico.nome}</h1>
            <h1>R${servico.preco}</h1>
            </div>
    )
}
export default ServicoDetalhe