import { useState, useReducer } from 'react'
import Navbar from "./components/Navbar"
import Main from "./components/Main"
import Raiser from "./components/Raiser"
import Total from "./components/Total"
import About from './components/About'
import Pledge from './components/Pledge'
import Modal from './components/Modal'
import ProgressBar from './components/ProgressBar'
import Completed from './components/Completed'



// const initialState = {
//   isBooked: false,
//   isOpen: false,
//   bambo: 101,
//   black: 64,
//   special: 1,
//   backed: 0,
//   backers: 0,
//   option: ''
// }

// function reducer(state, action) {
//   console.log(state, action)
//   return {state}
// }


function App() {
  const [isBooked, setIsBooked] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [bambo, setBambo] = useState(101)
  const [black, setBlack] = useState(60)
  const [special, setSpecial] = useState(1)
  const [backed, setBacked] = useState(0)
  const [backers, setBackers] = useState(0)
  const [option, setOption] = useState('')
  const [success, setSuccess] = useState(false)
  const goal = 100000
  const amountBambo = 25
  const amountBlack = 75
  const amountSpecial = 200

  // const [state, dispatch] = useReducer(reducer, initialState)
  // const {option} = state


  function onOptionChange(e) {
    console.log(e.target.value)
    setOption(e.target.value)
    
  }

  function handleClose() {
    setIsOpen(false)
    setOption('')
    window.scrollTo({top: 80, behavior: 'smooth'})
  }

  function handleCompleted() {
    setSuccess(false)
  }

  
  function handleOpen(title) {
    console.log(title)
    if(backed >= goal) {
      window.scrollTo({top: 80, behavior: 'smooth'})
      setSuccess(true)
      return
    }

    setIsOpen(true)
    setOption(title)

    window.scrollTo({top: `${title === 'Mahogany Special Edition' ? 400 : 80}`, behavior: 'smooth'})
  }
  

  function add(amount) {
    const {title, input} = amount
    console.log(title, input)
    if(backed >= goal || backed + parseInt(input) > goal) return
    if(input <= 0 || NaN) return
    
    setBacked((curr) => curr + parseInt(input))
    setBackers((act) => act + 1)
    
    if(title.split(' ')[0] === 'Pledge') {
      if(input < 1) return
      setSuccess(true)
      handleClose()
    }
    
    if(title.split(' ')[0] === 'Bamboo') {
      if (bambo < 1 || input < amountBambo) return
      setBambo((v) => v - 1)
      setSuccess(true)
      handleClose()
      console.log('here is bamboo')
      return
    }
    if(title.split(' ')[0] === 'Black') {
      if (black < 1 || input < amountBlack) return
      setBlack((v) => v - 1)
      setSuccess(true)
      handleClose()
      return
    }
    if(title.split(' ')[0] === 'Mahogany') {
      if (special < 1 || input < amountSpecial ) return
      setSpecial((v) => v - 1)
      setSuccess(true)
      handleClose()
      return
    }
    
  }
 
  
  return (
    <>
    <Navbar />
    <Main>
      <Raiser 
        isBooked={isBooked} 
        setIsBooked={setIsBooked} 
        handleOpen={handleOpen}
      />
      <Total 
        backed={backed}
        backers={backers}
      > 
        <ProgressBar height={10} progress={(backed*100) / goal}/>
      </Total>
      <About>
        <Pledge 
          title='Bamboo Stand' 
          left={bambo}
          text="You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and 
          you’ll be added to a special Backer member list."
          amount={amountBambo}
          action={handleOpen}
          
        />
        <Pledge 
          title='Black Edition Stand' 
          left={black}
          text="You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included."
          amount={amountBlack}
          action={handleOpen}
          
        />
        <Pledge 
          title='Mahogany Special Edition' 
          left={special}
          text="You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list. Shipping is included."
          amount={amountSpecial}
          action={handleOpen}
          
        />
      </About>



      <Modal 
        isOpen={isOpen} 
        handleClose={handleClose}
        
      >
        <h3 >Back this project</h3> 
        <p >Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world?</p>

        <Pledge
          title='Pledge with no reward' 
          text=" Choose to support us without a reward if you simply believe in our project. As a backer, 
          you will be signed up to receive product updates via email."
          option={option}
          onOptionChange={onOptionChange}
          noReward={true}
          add={add}
          backed={backed}
          goal={goal}
        >
          No reward
        </Pledge>

        <Pledge
          title='Bamboo Stand'
          text="You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and
          you’ll be added to a special Backer member list."
          amount={25}
          option={option}
          onOptionChange={onOptionChange}
          left={bambo}
          add={add}
          backed={backed}
          goal={goal}
        >
          <h3>Bamboo Stad</h3>
        </Pledge>
        <Pledge 
          title='Black Edition Stand'
          text="You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included."
          amount={75}
          option={option}
          onOptionChange={onOptionChange}
          left={black}
          add={add}
          backed={backed}
          goal={goal}
        >
          <h3>Black Edition Stand</h3>
        </Pledge>
        <Pledge 
          title='Mahogany Special Edition'
          text="You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added
          to our Backer member list. Shipping is included."
          amount={200}
          option={option}
          onOptionChange={onOptionChange}
          left={special}
          add={add}
          backed={backed}
          goal={goal}
        >
          <h3>Mohagany Special Edition</h3>
        </Pledge>

      </Modal>

      <Modal noCloseBtn={true} isOpen={success} handleClose={handleClose}>
        <Completed handleCompleted={handleCompleted}/>
      </Modal>
      

     

    </Main>







  
    </>
  )
}

export default App