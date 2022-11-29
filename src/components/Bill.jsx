export default function Bill(props) {

    return (
        <div className='bill'>
        <h2>Bill</h2>
        <form>
          <input
          className="bill-input"
          type="text"
          placeholder="Enter Total Bill Amount"
          onChange={props.handleChange}
          name="billAmount"
          value={props.formData.billAmount}
          />
        </form>
      </div>  
    )
}