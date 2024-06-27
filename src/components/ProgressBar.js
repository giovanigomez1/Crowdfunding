function ProgressBar({height, progress}) {

  const parentElement = {
    height: height,
    width: '100%', 
    borderRadius: '4rem',
    backgroundColor: '#f5f5f5'
  }

  const childElement = {
    height: '100%',
    width: `${progress}%`,
    borderRadius: '4rem',
    backgroundColor: 'hsl(176, 50%, 47%)'
  }
  
  return (
    <div style={parentElement}>
      <div style={childElement}>      
      </div>
    </div>
  )
}

export default ProgressBar