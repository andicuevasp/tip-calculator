export default function Results(props) {

    return (
        <div className="results">
          <h3>Tip Amount <br/> <span> / person</span></h3>
          <span>{props.tipAmountPerPerson}</span>
          <h3>Total Amount <br/> <span> / person</span></h3>
          <span>{props.totalAmountPerPerson}</span>
        </div>
    )
}