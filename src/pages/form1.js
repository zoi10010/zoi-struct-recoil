import React, { useEffect, useState } from 'react'


function Form1(props){
    const [name, setName] = useState('')
    useEffect(() => {
        console.log(props.location.state.uname)
        setName(props.location.state.uname)
    })
    return(
        <div>
            Name:{name}<br />
            Email:{props.email}<br />
            Gender:{props.gender}<br />
            Phone:{props.phone}<br />
            Address:{props.address}
        </div>
    )
}
export default Form1;