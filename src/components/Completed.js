import checked from '../images/icon-check.svg'


function Completed({handleCompleted}) {
  return (
    <div className='completed'>
        <img src={checked} alt="" />
        <h3>Thanks for your support!</h3>
        <p>Your pledge brings us one step closer to sharing Mastercraft Bamboo Monitor Riser 
          worldwide. You will get an email once our campaign is completed.
        </p>
        <button className="btn" onClick={handleCompleted}>Got it!</button>
    </div>
  )
}

export default Completed