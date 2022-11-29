import { useState } from 'react'
import Bill from "../src/components/Bill"
import SelectTip from "../src/components/SelectTip"
import NumberOfPeople from "../src/components/NumberOfPeople"
import Results from "../src/components/Results"

function App() {
  const [formData, setFormData] = useState(
    {
      billAmount: 0,
      tip: 0,
      numberOfPeople: 0
    }
  )

  const [tipAmountPerPerson, setTipAmountPerPerson] = useState(0);
  const [totalAmountPerPerson, setTotalAmountPerPerson] = useState(0);
  
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

  function getTipAmountPerPerson(tip) {
    setTipAmountPerPerson(
      ((tip*formData.billAmount) / 100) / formData.numberOfPeople
    )

    return tipAmountPerPerson
  }

  return (
    <main>
      <div className='container'>
        <h1>Bill Splitter | Tip Calculator</h1>
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
        <Results 
        tipAmountPerPerson={tipAmountPerPerson}
        totalAmountPerPerson={totalAmountPerPerson}
        getTipAmountPerPerson={()=> getTipAmountPerPerson(formData.tip)}
        />   
      </div>
    </main>
  )
}

export default App
