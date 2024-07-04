import iconCloseModal from '../images/icon-close-modal.svg'



function Modal({children, isOpen, handleClose, noCloseBtn}) {

  const overlay = {
    width: '100%',
    height: '100%',
    background: 'rgba(0, 0, 0, 0.2)',
    position: 'absolute',
    top: '0', 
    left: '0',
  }
  
  const content = {
    margin: `${noCloseBtn ? '30rem auto': '10rem auto'}`,
    width: `${noCloseBtn ? '30vw' : '50vw'}`,
    maxWidth: '65rem',
    backgroundColor: 'white',
    borderRadius: '5px',
    padding: '4rem 3rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem',
    position: 'relative'
  }
  
  const closeIcon = {
    position: 'absolute',
    width: '2rem',
    right: '2rem',
    top: '2rem',
    cursor: 'pointer'
  }

  if(!isOpen) return null
  return (
    <div style={overlay}>
      <div style={content} className='modal__content'>
        {noCloseBtn ? '' : <img style={closeIcon} src={iconCloseModal} alt="" onClick={handleClose}/>}
        {children}
      </div>
    </div>)
}


export default Modal