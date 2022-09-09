import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Perfil = () => {

    const alunos = useSelector(state => state.alunos)

    const { id } = useParams()

    return(
        <>
            <h1>Perfil com id: {id}</h1>
            <p> {alunos} </p>
        </>
    )
}

export default Perfil
