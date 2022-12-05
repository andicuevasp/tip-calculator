import { percentages } from "../data"


export default function SelectTip(props) {

  const radioFormElement = percentages.map(percent => {
    return (
      <div key={percent}
      className="select-tip-div">
        <input
        className="select-tip-radio"
        type="radio"
        id={percent}
        name="tip"
        value={percent}
        checked={props.formData.tip == {percent}}
        onChange={props.handleChange}
        />
        <label htmlFor={percent}>{percent}%</label>
      </div>
      
    )
  })

    return (
        <div className='select-tip'>
          <h2>Select Tip %</h2>
          <form className="select-tip-form">
            {radioFormElement}
            <input
            className="custom-tip"
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