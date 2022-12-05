export default function Results(props) {

    return (
        <div className="results">
          <div className="totals">
            <h3>Tip Amount <br/> <span className="person"> / person</span></h3>
            <span className="amount">€{props.tipAmountPerPerson}</span>
          </div>
          <div className="totals">
            <h3>Total Amount <br/> <span className="person"> / person</span></h3>
            <span className="amount">€{props.totalAmountPerPerson}</span>
          </div>
          <button onClick={props.reset}>Reset</button>
        </div>
    )
}