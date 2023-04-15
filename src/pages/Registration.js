import React, { useState } from 'react'
import '../pages/Registration.css'

function Registration() {
    const [selectedDate, setSelectedDate] = useState('');

    const handleDateChange=(event)=>{
        const selectedDate = event.target.value;
        const today = new Date().toISOString().slice(0, 10);

        if (selectedDate < today) {
            setSelectedDate('');
            alert('Please select a date that is today or a future date.\nकृपया कोई ऐसा दिनांक चुनें जो आज का हो या भविष्य का कोई दिनांक हो.');
        } else {
        setSelectedDate(selectedDate);
        }
    };

    const [selectedTime, setSelectedTime] = useState('');

    const handleTimeChange = (event) => {
        const selectedTime = event.target.value;

        if (selectedTime < "10:00" || selectedTime > "17:00") {
            setSelectedTime('');
            alert('Time you have entered should be between 10AM to 5PM.\nआपके द्वारा दर्ज किया गया समय सुबह 10 बजे से शाम 5 बजे के बीच होना चाहिए।');
        } else {
            setSelectedTime(selectedTime);
        }
  };
 //   const [enteredNumber, setEnteredNumber] = useState('');

//     const handleNumberChange = (event) => {
//         const enteredValue = event.target.value;
  
//         if (!Number.isNaN(Number(enteredValue))) {
//             setEnteredNumber(enteredValue);
//         } else {
//             setEnteredNumber('');
//             alert('Enter Number only.\nकेवल संख्या दर्ज करें');
//         }
//   };
  return (
    <>
    <div className='container-fluid'>
        <h3><i className="fa-solid fa-virus-covid fa-spin fa-spin" style={{color:'#ffff00'}}></i> COVID-19 Vaccine Registration Form </h3>

        <form>
            <p>Together India will defeat COVID-19</p>
            <p>(साथ मिलकर भारत COVID-19 को हरा देगा)</p>
            <table>
                <tr>
                    <th><label htmlFor='name'>Name <span style={{color:'red'}}>*</span><span>( नाम )</span></label></th>
                    <td><input id='name' type={"text"} placeholder={"Enter your full name"} required/></td>
                </tr>
                <tr>
                    <th><label htmlFor='email'>Email <span style={{color:'red'}}>*</span><span>( ईमेल )</span></label></th>
                    <td><input id='email' type={"email"} placeholder={"Enter your email"} required/></td>
                </tr>
                <tr>
                    <th><label htmlFor='mobile'>Mobile No. <span style={{color:'red'}}>*</span><span>( मोबाइल नंबर )</span></label></th>
                    <td><input id='mobile' type={"number"} placeholder={'Enter Number'} required/></td>
                </tr>
                <tr>
                    <th><label htmlFor='date'>Appointment Date <span style={{color:'red'}}>*</span><span>( नियुक्ति तिथि )</span></label></th>
                    <td><input id='date' type={"date"} value={selectedDate} onChange={handleDateChange} required/></td>
                </tr>
                <tr>
                    <th><label htmlFor='time'>Appointment Time <span style={{color:'red'}}>*</span><span>( नियुक्ति का समय )</span></label></th>
                    <td><input id='time' type={"time"}value={selectedTime} onChange={handleTimeChange} required/></td>
                </tr>
                <tr>
                    <th><label htmlFor='detail'>Vaccine Center Details <span style={{color:'red'}}>*</span><span>( टीका केंद्र विवरण )</span></label></th>
                    <td><input id='detail' type={"text"} placeholder={'Enter center detail'} required/></td>
                </tr>
                <tr>
                    <th><label htmlFor='birth'>Date of Birth <span style={{color:'red'}}>*</span><span>( जन्म की तारीख )</span></label></th>
                    <td><input id='birth' type={"date"} required/></td>
                </tr>
                <tr>
                    <th><label htmlFor='address'>Address <span style={{color:'red'}}>*</span><span>( पता )</span></label></th>
                    <td><textarea id='address' style={{resize:'none'}} placeholder={'Enter your address'} required/></td>
                </tr>
                <tr>
                    <th><label htmlFor='gender'>Gender <span style={{color:'red'}}>*</span><span>( लिंग )</span></label></th>
                    <td><select id='gender' required>
                        <option></option>
                        <option value={'male'}>Male</option>
                        <option value={'female'}>Female</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <th><label htmlFor='status'>Marital Status <span style={{color:'red'}}>*</span><span>( वैवाहिक स्थिति )</span></label></th>
                    <td><select id='status' required>
                        <option></option>
                        <option value={'single'}>Single</option>
                        <option value={'married'}>Married</option>
                        <option value={'divorced'}>Divorced</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <th><label htmlFor='country'>Country <span style={{color:'red'}}>*</span><span>( देश )</span></label></th>
                    <td><select id='country' required>
                        <option></option>
                        <option value={'India'}>India</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <th><label htmlFor='state'>State <span style={{color:'red'}}>*</span><span>( राज्य )</span></label></th>
                    <td><select id='state' required>
                    <option value=""></option>
                    <option value="Andhra Pradesh">Andhra Pradesh</option>
                    <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                    <option value="Assam">Assam</option>
                    <option value="Bihar">Bihar</option>
                    <option value="Chhattisgarh">Chhattisgarh</option>
                    <option value="Goa">Goa</option>
                    <option value="Gujarat">Gujarat</option>
                    <option value="Haryana">Haryana</option>
                    <option value="Himachal Pradesh">Himachal Pradesh</option>
                    <option value="Jharkhand">Jharkhand</option>
                    <option value="Karnataka">Karnataka</option>
                    <option value="Kerala">Kerala</option>
                    <option value="Madhya Pradesh">Madhya Pradesh</option>
                    <option value="Maharashtra">Maharashtra</option>
                    <option value="Manipur">Manipur</option>
                    <option value="Meghalaya">Meghalaya</option>
                    <option value="Mizoram">Mizoram</option>
                    <option value="Nagaland">Nagaland</option>
                    <option value="Odisha">Odisha</option>
                    <option value="Punjab">Punjab</option>
                    <option value="Rajasthan">Rajasthan</option>
                    <option value="Sikkim">Sikkim</option>
                    <option value="Tamil Nadu">Tamil Nadu</option>
                    <option value="Telangana">Telangana</option>
                    <option value="Tripura">Tripura</option>
                    <option value="Uttar Pradesh">Uttar Pradesh</option>
                    <option value="Uttarakhand">Uttarakhand</option>
                    <option value="West Bengal">West Bengal</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <th><label htmlFor='pin'>PinCode <span style={{color:'red'}}>*</span><span>( पिन कोड )</span></label></th>
                    <td><input id='pin' type={"number"} placeholder={'pin'} required/></td>
                </tr>
                <tr>
                <th colSpan={'2'} style={{textAlign:'center'}} >
                    <input className='btn btn-outline-dark' type={'submit'} value='Submit'/>
                    <input style={{marginLeft:'10px'}} className='btn btn-outline-danger' type={'reset'} value='Reset'/>
                </th>
                </tr>
            </table>
        </form>
    </div>
    </>
  )
}

export default Registration