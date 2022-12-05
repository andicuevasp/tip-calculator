import { useState , useEffect} from 'react'
import Bill from "../src/components/Bill"
import SelectTip from "../src/components/SelectTip"
import NumberOfPeople from "../src/components/NumberOfPeople"
import Results from "../src/components/Results"
import logo from "../src/assets/logo.svg"

function App() {
  const [formData, setFormData] = useState(
    {
      billAmount: 0,
      tip: "Custom",
      numberOfPeople: 0
    }
  )
  const [tipAmountPerPerson, setTipAmountPerPerson] = useState(0.00);
  const [totalAmountPerPerson, setTotalAmountPerPerson] = useState(0.00)

  useEffect(() => {
    const {billAmount, tip, numberOfPeople} = formData
    setTipAmountPerPerson((((tip * billAmount)/100)/numberOfPeople).toFixed(2))
  }, [formData])

   useEffect(()=> {
    const {billAmount, numberOfPeople} = formData
    setTotalAmountPerPerson(((billAmount/numberOfPeople) + tipAmountPerPerson).toFixed(2))
   },[formData])
  
  
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
      billAmount: 0,
      tip: "Custom",
      numberOfPeople: 0
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
