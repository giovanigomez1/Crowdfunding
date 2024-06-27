import ProgressBar from "./ProgressBar"

function Total({backed, backers, children}) {
  return (
    <section className="main__total">
      <div className="main__total--numbers">
        <div className="main__total--numbers-amount">
          <h3>{`$${backed.toLocaleString()}`}</h3><p>of $100,000 backed</p>
        </div>
        <div className="main__total--numbers-backers">
          <h3>{backers}</h3><p>total backers</p>
        </div>
        <div className="main__total--numbers-days">
          <h3>56</h3><p>days left</p>
        </div>
      </div>
      <div className="main__total--progress">
        {children}
      </div>
    </section>
  )
}

export default Total