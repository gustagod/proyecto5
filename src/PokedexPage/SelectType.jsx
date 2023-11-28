import { useEffect,useRef } from "react"
import useFetch from "../hooks/useFetch"
import './styles/SelectType.css'

const SelectType = ({setselectValue}) => {
    const url = 'https://pokeapi.co/api/v2/type'
    const [infoTypes, getInfoTypes] = useFetch(url)
    useEffect(() => {
        getInfoTypes()
    }, [])
const selectElement=useRef()

const handelChange=()=>{
    setselectValue(selectElement.current.value)
}

    return (
        <select className='select' ref={selectElement} onChange={handelChange}>
            <option value="allpokemons">All Pokemons</option>
            {
                infoTypes?.results.map(type => (
                    <option key={type.name} value={type.url}>{type.name}</option>
                ))
            }

        </select>
    )
}

export default SelectType