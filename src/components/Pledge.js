import { useState, useEffect } from "react"


function Pledge({title, 
  left, 
  text, 
  amount, 
  action, 
  children,
  option,
  onOptionChange,
  noReward,
  add,
  backed,
  goal
}) {


  useEffect(() => {
    
   if(option !== title) {
    setInput('')
    setShowErr(false) 
   }


  })
  
  
  const noStock = {
    color: left < 1 ? '#cccccc' : 'black',
    pointerEvents: left < 1 ? 'none' : 'auto' 
    
  }
 
  const selectedPledge = {
    border: option === title && '1px solid hsl(176, 50%, 47%)'
  }   

  const [input, setInput] = useState('')
  const [showErr, setShowErr] = useState(false)
  const [errMsg, setErrMsg] = useState('')


  function handleAdd() {
    console.log(input)
    if(parseInt(input) < amount || input === '') {
      setShowErr(true) 
      setErrMsg('Amount not reached')
      console.log('hey')
      return
    }
    if(backed + parseInt(input) > goal) {
      console.log('trye')
      setShowErr(true)
      setErrMsg('Goal exceded')
      return
    }
    add({input, title})
  }

 
  
  return (
    <div className="pledge" style={selectedPledge}>

      
    {children ? 
      <div className="pledge__modal">
        <label style={noStock} htmlFor={title}>
          <input 
            className="pledge__modal--radio"
            type="radio" 
            name="pledge" 
            id={title} 
            value={title}
            onChange={onOptionChange}
            disabled={left < 1}
            checked={option === title}
          />
          <div className="pledge__modal--input">
            <div className="pledge__modal--input-inside">
            </div>
          </div>
          <div className="pledge_title_amount">
            <h3 className="padding" style={noStock}>{title}</h3>    
            {amount ? <p>Pledge ${amount} or more</p> : ''}
          </div>
          <p className="padding pledge_desc" style={noStock}>{text}</p>
          {noReward || <p className="pledge_left" style={noStock}>{left} <span>left</span> </p>}
        </label>
          { option === title ? 
            <div className="pledge__modal--action">
              <p>Enter your pledge</p>
              <div className="pledge__modal--action_btn">
                <div className="pledge__modal--action_btn-input">
                  <p>$</p>
                  <input value={input} onChange={(e) => setInput(e.target.value)} type="number" min={noReward ? 1 : amount} placeholder={amount}/>
                  {showErr ? <p className="pledge__modal--action_btn-input_msg">{errMsg}</p> : ''}
                </div>
                <button onClick={handleAdd} className="btn">Continue</button>
              </div>
            </div> 
              : ''
          }
      </div>      
      :
     <>
        <div className="pledge__title padding">
          <h3 style={noStock}>{title}</h3>
          <p>Pledge ${amount} or more</p>
        </div>
        <p className="padding" style={noStock}>{text}</p>
        <div className="pledge__footer padding">
          <p style={noStock}>{left} <span>left</span> </p>
          <button  
            disabled={left < 1 ? true : false}
            onClick={() => action(title)}
            // style={btnEnabled}
            className={`${left < 1 ? 'disabled' : ''} btn`} 
          >
            {left < 1 ? 'Out of stock' : 'Select Reward'}
          </button>
        </div>
      </>
     }     
    </div>
  )
}

export default Pledge

