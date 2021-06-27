import http from "../../Componentes/http";
import { useState, useEffect } from "react";
import Card from '../../Componentes/Card'
const Servicos = () => {

    const [servicos, setServicos] = useState([])
    const obterServicos = () => {
        http.get('servicos')
            .then(response => setServicos(response.data))
            .catch(erro => console.log(erro))
    }

    useEffect(() => {
        obterServicos()
    }, [])

    return (
        <div>
            {servicos.map((servico) =>
                <Card
                    key={servico.id}
                    nome={servico.nome}
                    preco={servico.preco}
                    id={servico.id}
                    tipo='servicos' />

            )}
        </div>
    )
}
export default Servicos