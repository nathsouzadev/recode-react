import { useParams } from 'react-router-dom'

const Perfil = () => {

    const { id } = useParams()

    return(
        <h1>Perfil com id: {id}</h1>
    )
}

export default Perfil
