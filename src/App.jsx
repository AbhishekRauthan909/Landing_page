import { BrowserRouter } from 'react-router-dom'
import Navbar from "./Navbar"
import ImageComponent from './ImageComponent'
import Consultation from './Consultation'
import DoctorCarousel from './DoctorCarousel'
import WhyCh from './WhyCh'
Consultation
function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <ImageComponent/>
      <Consultation/>
      <DoctorCarousel/>
      <WhyCh/>
    </BrowserRouter>
  )
}

export default App
