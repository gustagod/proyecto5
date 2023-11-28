import React, { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import useFetch from '../hooks/useFetch'
import PokeCard from '../PokedexPage/PokeCard'
import SelectType from '../PokedexPage/SelectType'
import "./styles/PokedexPage.css"

const PokedexPage = () => {

  const trainerName = useSelector(store => store.trainerName)



  const url = 'https://pokeapi.co/api/v2/pokemon?limit=1500&offset=0'

  const [pokemons, getPokemons, getByTypePokemon] = useFetch(url)

  const [inputValue, setinputValue] = useState('')
  const [selectValue, setselectValue] = useState('allpokemons')

  useEffect(() => {
    if (selectValue === 'allpokemons') {
      getPokemons()
    }
    else {
      getByTypePokemon(selectValue)
    }
  }, [selectValue])

  const inputSearch = useRef()

  const handelSubmit = e => {
    e.preventDefault()
    setinputValue(inputSearch.current.value.toLowerCase().trim())
    inputSearch.current.value = ''
  }

  const cbFilter = (poke) => {

    const nameFiltered = poke.name.includes(inputValue)
    return nameFiltered
  }

  return (
    <div className='page__div'>
      <div className="page__red"></div>
      <div className="page__black"></div>
      <img className="page__img" src="../../title.png" alt="" />
      <p className='page__p'><span className='page__pspan'>Welcome {trainerName}</span>, here you can find your favorite pokemon. Let's go!</p>
     <header className='page__header'>
     <form onSubmit={handelSubmit}>
        <input className='page__input' ref={inputSearch} type="text" placeholder="  Search a pokemon" />
        <button className='page__btn' >Search</button>
      </form>
      <SelectType
        setselectValue={setselectValue}
      />
     </header>

      <div className='page__card'>
        {
          pokemons?.results.filter(cbFilter).map(poke => (
            <PokeCard
              key={poke.url}
              url={poke.url}
            />
          ))
        }
      </div>
    </div>
  )
}

export default PokedexPage