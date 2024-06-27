import mLogo from '../images/logo-mastercraft.svg'
import bookM from '../images/icon-bookmark.svg'

function Raiser({isBooked, setIsBooked, handleOpen}) {

  function handleIsBooked() {
    setIsBooked(!isBooked)
  }

  return (
    <section className="main__riser">
      <div className="main__riser--logo">
        <img src={mLogo} alt="" />
      </div>
      <div className="main__riser--content">
        <h1>Mastercraft Bamboo Monitor Riser</h1>
        <p>A beautiful & handcrafted monitor stand to reduce neck and eye strain.</p>
        <div className="main__riser--content_action">
          <button onClick={handleOpen} className='btn'>Back this project</button>
          <div onClick={handleIsBooked} className="main__riser--content_action-book">
            <img src={bookM} alt="" />
            <p >{isBooked ? 'Bookmarked' : 'Bookmark'}</p>
          </div>
        </div>
      </div>
    </section>
  )
}


export default Raiser