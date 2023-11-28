import { useRef } from "react"
import { setTrainerName } from "../store/slices/trainerName.slice"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import "./styles/HomePage.css"

const HomePage = () => {

const inputName = useRef()

const navigate =useNavigate()

const dispatch = useDispatch()

const handelSubmit = e =>{
e.preventDefault()
dispatch(setTrainerName(inputName.current.value.trim()))
navigate('/pokedex')
}


  return (
    <div className="div">
      <img className="div__img" src="../../title.png" alt="" />
      <h2 className="div__h2">Hi Trainer!</h2>
      <p className="div__p">To start, please give me your trainer name</p>
      <form className="div__form" onSubmit={handelSubmit}>
        <input className="div__input" ref={inputName} type="text" placeholder="  Write your name"/>
        <button className="btn">Cath them all!</button>
      </form>
      <footer className="div__footer">
        <div className="div__red"></div>
        <div className="div__black"></div>
      </footer>
    </div>

  )
}

export default HomePage