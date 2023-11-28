import { useParams } from "react-router-dom"
import useFetch from "../hooks/useFetch"
import { useEffect } from "react"
import './styles/PokeInfoPage.css'

const PokeInfoPage = () => {

  const { id } = useParams()
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`
  const [pokemon, getPokemon] = useFetch(url)

  useEffect(() => {
    getPokemon()
  }, [])



  return (

    <div className="poke__div">
       <div className="poke__red"></div>
      <div className="poke__black"></div>
      <div className="poke__top">
      <article className="poke__article">
        <img className="poke__img" src={pokemon?.sprites.other["official-artwork"].front_default} alt="" />
        <h2>{pokemon?.name}</h2>
      </article>
      <article className="poke__article2">
      <section className="poke__sectionType">
        <h3 className="sectionType__h3">Types</h3>
        <ul className="sectionType__ul">
          {
            pokemon?.types.map(typeStat => (
              <li className="sectionType__li" key={typeStat.type.url}>{typeStat.type.name}</li>
            ))
          }
        </ul>
      </section>

      <section className="poke__sectionAbilities">
        <h3 className="sectionAbilities__h3">Abilities</h3>
        <ul className="sectionAbilities__ul">
          {
            pokemon?.abilities.map(abilitiesStat => (
              <li className="sectionAbilities__li" key={abilitiesStat.ability.url}>{abilitiesStat.ability.name}</li>
            ))
          }
        </ul>
      </section>
      </article>
      

      <section className="poke__sectionStats">
        <h3 className="sectionStats__h3">Stats</h3>
        <ul className="sectionStats__ul">
          {
            pokemon?.stats.map(infoStat => (
              <li className="sectionStats__li" key={infoStat.stat.url}>
                <span className="sectionStats__name">{infoStat.stat.name}</span>
                <span className="sectionStats__base">{infoStat.base_stat}</span>
              </li>
            ))
          }
        </ul>

      </section>
      </div>
      <section className="poke__sectionMoves">
          <h2 className="sectionMoves__h2">Moves</h2>
          <ul className="sectionMoves__ul">
            {
              pokemon?.moves.map(moveStat => (
                <li className="sectionMoves__li" key={moveStat.move.url}>{moveStat.move.name}</li>
  
              ))
            }
          </ul>
        </section>

    </div>


  )
}

export default PokeInfoPage