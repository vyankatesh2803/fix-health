import './App.css'
import Form from './Components/ConsultationBookingForm/form'
import Navbar from './Components/Navbar/navbar'




function App() {
  return (
    <div className="App">
      <div className='hero-background'>
        <Navbar />
        <Form />
      </div>
      <verticalSlider />
    </div>
  );
}

export default App;
