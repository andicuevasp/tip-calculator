import { useState , useEffect} from 'react'
import Bill from "../src/components/Bill"
import SelectTip from "../src/components/SelectTip"
import NumberOfPeople from "../src/components/NumberOfPeople"
import Results from "../src/components/Results"

function App() {
  const [formData, setFormData] = useState(
    {
      billAmount: 0,
      tip: 0,
      numberOfPeople: 1
    }
  )

  const tipAmountPerPerson = (formData.tip * formData.billAmount) / 100 / formData.numberOfPeople || 0;
  const totalAmountPerPerson = (formData.billAmount / formData.numberOfPeople) + tipAmountPerPerson || 0;

  
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

  return (
    <main>
      <div className='container'>
        <h1>Bill Splitter | Tip Calculator</h1>
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
        <div className='results-div'>
          <Results 
          tipAmountPerPerson={tipAmountPerPerson}
          totalAmountPerPerson={totalAmountPerPerson}
          />
        </div>
           
      </div>
    </main>
  )
}

export default App
