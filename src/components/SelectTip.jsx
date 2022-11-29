export default function SelectTip(props) {


    return (
        <div className='select-tip'>
          <h2>Select Tip</h2>
          <form>
            <input
            type="radio"
            id="5%"
            name="tip"
            value="5"
            checked={props.formData.tip === "5%"}
            onChange={props.handleChange} 
            />
            <label htmlFor="5%">5%</label>
            <input
            type="radio"
            id="10%"
            name="tip"
            value="10"
            checked={props.formData.tip === "10%"}
            onChange={props.handleChange} 
            />
            <label htmlFor="10%">10%</label>
            <input
            type="radio"
            id="15%"
            name="tip"
            value="15"
            checked={props.formData.tip === "15%"}
            onChange={props.handleChange} 
            />
            <label htmlFor="15%">15%</label>
            <input
            type="radio"
            id="20%"
            name="tip"
            value="20"
            checked={props.formData.tip === "20%"}
            onChange={props.handleChange} 
            />
            <label htmlFor="20%">20%</label>
            <input
            type="radio"
            id="25%"
            name="tip"
            value="25"
            checked={props.formData.tip === "25%"}
            onChange={props.handleChange} 
            />
            <label htmlFor="25%">25%</label>
            <input
            type="radio"
            id="50%"
            name="tip"
            value="50"
            checked={props.formData.tip === "50%"}
            onChange={props.handleChange} 
            />
            <label htmlFor="50%">50%</label>
            <input
            type="text"
            placeholder="Custom"
            onChange={props.handleChange}
            name="tip"
            value={props.formData.tip}
            />
          </form>
        </div>
    )
}