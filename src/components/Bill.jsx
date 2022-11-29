export default function Bill(props) {

    return (
        <div className='bill'>
        <h2>Bill</h2>
        <form>
          <input
          type="text"
          placeholder="$ Total Bill Amount"
          onChange={props.handleChange}
          name="billAmount"
          value={props.formData.billAmount}
          />
        </form>
      </div>  
    )
}