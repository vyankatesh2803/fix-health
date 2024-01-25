import { useState } from 'react'
import './form.css'
import doctorData from '../doctorsData.json'
import profile from '../../Assets/default.jpg'
import success from  '../../Assets/success.svg'


const Form = () => {
    const [page, setPage] = useState('details')
    const [age,setAge] = useState()
    const [city,setCity] = useState()
    const [patientName, setPatientName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [confirmed, setConfirmed] = useState()

    const arr = {doctorData}.doctorData.data
    const filteredData = arr.filter((doctor) => { return doctor.location === city});
    return (
        <div>
            {page === 'details' ?  <div className="form-container">
            <form className='form'>
                <div className='d-flex flex-direction-row justify-content-between mb-3'>
                    <label for='fname' class="form-label" >Patient Name*:</label>
                    <input type='text' placeholder='Enter your first name' id='fname' class="form-control" onKeyUp={(e) => {setPatientName(e.target.value)}}></input>
                </div>
                <div className='d-flex flex-direction-row justify-content-between mb-3'>
                    <label for='age' class="form-label pe-2">Age*:</label>
                    <input placeholder='Enter your age' class="form-control me-2" onKeyUp={(e) => {setAge(e.target.value)}}></input>
                    <label for='city'class="form-label pe-2">City*:</label>
                    <select  id="city" name="city" onChange={(e) => {setCity(e.target.value)}}>
                        <option selected hidden>Please select a city</option>
                        <option value="Mumbai">Mumbai</option>
                        <option value="Pune">Pune</option>
                        <option value="Bangalore">Bangalore</option>
                        <option value="Hyderabad">Hyderabad</option>
                        <option value="Chennai">Chennai</option>
                    </select>  
                    
                </div>
                <div className='d-flex flex-direction-row justify-content-between mb-3'>
                    <label for='phone' class="form-label">Phone Number*:</label>
                    <input placeholder='Enter your phone number' class="form-control" onKeyUp={(e) => {setPhoneNumber(e.target.value)}}></input>
                </div>
                <div className='d-flex flex-direction-row justify-content-between mb-3'>
                    <label for='company' class="form-label">Company Name:</label>
                    <input placeholder='Enter your company name' class="form-control"></input>
                </div>
                <div className='d-flex flex-direction-row justify-content-between mb-3'>
                    <label for='complaints' class="form-label">Cheif Complaints:</label>
                    <textarea class="form-control" id="complaints" rows="3"></textarea>
                </div>
                {age >= 40 ? <div className='d-flex flex-direction-row justify-content-between mb-3'>
                    <label for='complaints' class="form-label">Any previous experience with physiotherapy ?: <br/> (Only for ages 40 & above)</label>
                    <textarea class="form-control" id="complaints" rows="3"></textarea>
                </div> : <></>}
                <div className='d-flex flex-direction-row justify-content-between w-100 pt-3'>
                    <button disabled>Go Back</button>
                    <button onClick={() => {patientName && age && city && phoneNumber ? setPage('SelectDoctor') :alert("Please fill * fields")}} >Next step: Select Doctor</button>{/*setPage('SelectDoctor')*/}
                </div>
            </form>
        </div> : page === 'SelectDoctor' ? 
        <div className="form-container-small-card">
            <h3>Showing best doctors for {city}</h3>
            {filteredData.map((e) => {
                return (
                    <div className='small-card-container'>
                    <img src={profile} className='small-card-image'></img>
                    <div className='small-card-details'>
                        <div className='small-card-doctor-name'>{e.name}</div>
                        <div className='small-card-doctor-specialization'>{e.specialization}</div>
                        <div className='small-card-doctor-experience'>{e.years_of_experience} years experience overall</div>
                        <div className='small-card-buttons'>
                            <button>Info</button>
                            <button onClick={() => {setPage(e.name)}}>Book</button>
                        </div>
                    </div>
                </div>
                )
            })}
        </div> : 
        <div className='booking-confirmation'>
            <div className='success-box'>
                <img src={success} alt='success' />
                <h1>Booking confirmed for <br/> {page}</h1>
            </div>
        </div>
        }
        </div>
    )
}
export default Form