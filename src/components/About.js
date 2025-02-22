function About({children}) {
  return (
    <div className="main__about">
      <div className="main__about--title">
        <h3>About this project</h3>
        <p>
          The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that elevates your screen 
          to a more comfortable viewing height. Placing your monitor at eye level has the potential to improve 
          your posture and make you more comfortable while at work, helping you stay focused on the task at hand.
        </p>
        <p>
          Featuring artisan craftsmanship, the simplicity of design creates extra desk space below your computer 
          to allow notepads, pens, and USB sticks to be stored under the stand.
        </p>
      </div>
      <div className="main__about--content">
        {children}
      </div>


    </div>
  )
}


export default About

