import { useEffect } from "react"
import useFetch from "../hooks/useFetch"
import { useNavigate } from "react-router-dom"
import "./styles/PokeCard.css"

const PokeCard = ({ url }) => {

    const [infoPoke, getInfoPoke] = useFetch(url)

    useEffect(() => {
        getInfoPoke()
    }, [])

    const navigate = useNavigate()

    const handelNavigate = () => {
        navigate(`/pokedex/${infoPoke.id}`)
    }

    return (
        <article className="article" onClick={handelNavigate}>
            <header className="article__header">
                <img className='article__img' src={infoPoke?.sprites.other["official-artwork"].front_default} alt="" />
            </header>
            <section className="article__section">
                <h3 className="article__name">{infoPoke?.name}</h3>
                <ul className="article__types">
                    {
                        infoPoke?.types.map(infoType => (
                            <li className='types__c' key={infoType.type.url}>{infoType.type.name}</li>
                        ))
                    }
                </ul>
                <hr />
                <ul className="article__stats">
                    {
                        infoPoke?.stats.map(infoStat => (
                            <li className="article__infostat" key={infoStat.stat.url}>
                                <span className="article__stname">{infoStat.stat.name}</span>
                                <span className="article__stbase">{infoStat.base_stat}</span>
                            </li>
                        ))
                    }
                </ul>
            </section>
        </article>
    )
}

export default PokeCard