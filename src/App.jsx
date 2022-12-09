import { useState } from 'react'
import Bill from "../src/components/Bill"
import SelectTip from "../src/components/SelectTip"
import NumberOfPeople from "../src/components/NumberOfPeople"
import Results from "../src/components/Results"
import logo from "../src/assets/logo.svg"

function App() {

//  formData is an object containing the information 
// the user will input, such as the billAmount, tip or 
// customTip and the numberOfPeople. customTip and tipSelector
// are used for the input names.
  const [formData, setFormData] = useState(
    {
      billAmount: "",
      tip: "",
      numberOfPeople: "",
      customTip: "",
      tipSelector: ""
    }
  )
  
 /**
 * Handle changes to the input fields.
 *
 * @param {Event} event - The change event.
 *
 * @returns {NewData} updated formData object.
 */
  function handleChange(e) {
    const {name, value} = e.target;
    setFormData(prevFormData => {
      const newData = {
        ...prevFormData,
        [name]: value,
        currentlySelected: e.target.id
      }

      //conditional statement so that when the customTip is selected, the value shows in the input box
      // and when the user chooses the radioInputs (tipSelector) the customTip value remains empty
      if ( name === 'customTip' ) {
        newData.tip = value
        newData.tipSelector = ''
      } else if( name === 'tipSelector' ) {
        newData.tip = value
        newData.customTip = ''
      }
      
    return newData
    })
  }
// variables for the results of how much each person has to pay
  let tipAmountPerPerson
  let totalAmountPerPerson

// conditional statement to make sure calculations are done once all of the inputs have been chosen 
 if(formData.billAmount > 0 && formData.tip > 0 && formData.numberOfPeople > 0){
    tipAmountPerPerson = parseFloat((((formData.tip * formData.billAmount)/100)/formData.numberOfPeople).toFixed(2))
    totalAmountPerPerson = parseFloat(((formData.billAmount/formData.numberOfPeople) + tipAmountPerPerson).toFixed(2)) 
 } else {
    tipAmountPerPerson = (0.00).toFixed(2);
    totalAmountPerPerson = (0.00).toFixed(2);
 }

/**
 * Reset the form to its default state.
 *
 * @param {Event} event - The click event.
 *
 * @returns {formData} with empty values.
 */
  function reset() {
    setFormData({
      billAmount: "",
      tip: "",
      numberOfPeople: "",
      customTip: "",
      tipSelector: "",
      currentlySelected:""
    })

  }

  return (
    <main>
      <img src={logo} alt="splitter-logo"/>
      <div className='container'>
        <div className='initial-values'>
          <Bill 
          formData={formData}
          handleChange={handleChange}
          />
          <SelectTip
          formData={formData}
          handleChange={handleChange} 
          />
          <NumberOfPeople
          formData={formData}
          handleChange={handleChange} 
          />
        </div>
        <Results
        tipAmountPerPerson={tipAmountPerPerson}
        totalAmountPerPerson={totalAmountPerPerson}
        reset={reset}
        />
      </div>
    </main>
  )
}

export default App
