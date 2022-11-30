export default function NumberOfPeople(props){
    return (
        <div className="number-people">
            <h2>Number of People</h2>
            <form>
              <input
              className="number-people-input"
              type="text"
              placeholder="0"
              onChange={props.handleChange}
              name="numberOfPeople"
              value={props.formData.numberOfPeople}
              />
            </form>
        </div>
    )
}