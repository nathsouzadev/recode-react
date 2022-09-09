import { useSelector } from 'react-redux'

const Home = () => {
    const objeto = useSelector(state => state.cursos)
    console.log(objeto)

    return(
        <>
            <h1 className="text-bg-secondary p-3">Home</h1>
            <p>{ objeto }</p>
        </>
    )
}

export default Home
