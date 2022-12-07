import { percentages } from "../data";

export default function SelectTip(props) {


  

  const radioFormElement = percentages.map((percent) => {
    // const className = props.formData.currentlySelected === percent ? "tip-radio selected": "tip-radio";
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