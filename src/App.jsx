import { useState , useEffect} from 'react'
import Bill from "../src/components/Bill"
import SelectTip from "../src/components/SelectTip"
import NumberOfPeople from "../src/components/NumberOfPeople"
import Results from "../src/components/Results"
import logo from "../src/assets/logo.svg"

function App() {
  const [formData, setFormData] = useState(
    {
      billAmount: "",
      tip: "",
      numberOfPeople: ""
    }
  )

  let tipAmountPerPerson
  let totalAmountPerPerson

 if(formData.billAmount > 0 && formData.tip > 0 && formData.numberOfPeople > 0){
    tipAmountPerPerson = parseFloat((((formData.tip * formData.billAmount)/100)/formData.numberOfPeople).toFixed(2))
    totalAmountPerPerson = parseFloat(((formData.billAmount/formData.numberOfPeople) + tipAmountPerPerson).toFixed(2)) 
 } else {
    tipAmountPerPerson = (0.00).toFixed(2);
    totalAmountPerPerson = (0.00).toFixed(2);
 }

  
  console.log(formData)
  function handleChange(e) {
    const {name, value, type, checked} = e.target;
    setFormData(prevFormData => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value
      }
    })
  }

  function reset() {
    setFormData({
      billAmount: "",
      tip: "",
      numberOfPeople: ""
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
