export default function Results(props) {

    return (
        <div className="results">
          <h3>Tip Amount <br/> <span className="person"> / person</span></h3>
          <span className="amount">€{props.tipAmountPerPerson}</span>
          <h3>Total Amount <br/> <span className="person"> / person</span></h3>
          <span className="amount">€{props.totalAmountPerPerson}</span>
          <button onClick={props.reset}>Reset</button>
        </div>
    )
}