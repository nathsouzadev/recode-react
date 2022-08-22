import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

const Pokemon = () => {

    const [ pokemon, setPokemon ] = useState({})
    const { id } = useParams()

    useEffect(() => {
        const getPokemon = async () => {
            const resposta = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
            const dados =  await resposta.json()
            setPokemon(dados)
        }
        
        getPokemon()
    }, [])

    return(
        <h1>Pokemon com id: {id}, nome: {pokemon.name}</h1>
    )
}

export default Pokemon
