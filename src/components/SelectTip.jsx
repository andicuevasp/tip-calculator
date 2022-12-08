import { percentages } from "../data";

export default function SelectTip(props) {

// tip percentages radio inputs that are created by mapping over an array of numbers that represent the tip percentages.
  const radioFormElement = percentages.map((percent) => {
    return (
      <div key={percent} className="select-tip-div">
        <input
          className="select-tip-radio"
          type="radio"
          id={percent}
          name="tipSelector"
          value={percent}
          checked={props.formData.tipSelector == {percent}}
          onChange={props.handleChange}
        />
        <label htmlFor={percent} className={props.formData.currentlySelected == percent ? "tip-radio selected": "tip-radio"}>{percent}%</label>
      </div>
    );
  });

  //custom tip element which has a hidden input field so that the input field can remain empty if the user chooses the tipSelector
  const customTipElement =
        <div>
          <input
          className="tip-value"
          type="hidden"
          name="tip"
          value={props.formData.tip}
          />
          <input
          className="custom-tip"
          type="text"
          placeholder="Custom"
          onChange={props.handleChange}
          name="customTip"
          value={props.formData.customTip}
          />
        </div>
  

  return (
    <div className="select-tip">
      <h2>Select Tip %</h2>
      <form className="select-tip-form">
        {radioFormElement}
        {customTipElement}
      </form>
    </div>
  );
}