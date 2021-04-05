import React, { useState } from 'react'
import {RadioGroup, FormControlLabel, Radio, } from '@material-ui/core'




function Form(props){
    
    const [formdetails, setFormdetails] = useState('')
    const [name, setName] = useState('')
    const handleName = (event) => {
        setName(event.target.value)
        console.log( event.target.value)

    }
    const handledetails = () => {
        console.log(name);
        props.history.push({ pathname: '/form1', state: {uname:name}});
    }
    return(
        <div>
            <form onSubmit={handledetails} >
                <label>Name<input type="text"  onChange={handleName}/></label><br />
                <label>Email<input type="text" value={formdetails.email}/></label><br />
                <label>Gender
                <RadioGroup aria-label="gender" name="gender1" value={formdetails.gender}>
                    <FormControlLabel value="female" control={<Radio />} label="Female" />
                    <FormControlLabel value="male" control={<Radio />} label="Male" />
                </RadioGroup>
                </label><br />
                <label>phone<input type="text" value={formdetails.phone} /></label><br />
                <label>Address<input type="text" value={formdetails.address} /></label><br />
                <input type="submit" value="submit" />
            </form>
        </div>
    )
}
export default Form;