import { useState, useEffect } from 'react'

const Baralho = () => {
    const [ baralho, setBaralho ] = useState()

    useEffect(() => {
        const getBaralho = async () => {
            const resposta = await fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
            const dados = await resposta.json()
            setBaralho(dados.deck_id)
        }

        getBaralho()
    }, [])

    return(
        <h1>
            {baralho}
        </h1>
    )
}

export default Baralho
