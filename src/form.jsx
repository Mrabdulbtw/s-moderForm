import React, { useState } from 'react'
import "./form.css"




export default function Form() {

    const form = [
        {
            placHolder: "Enter your name",
            name: "name",
            type: "text"
        },
        {
            placHolder: "Enter your password",
            name: "password",
            type: "text"
        }, {
            placHolder: "Enter your email",
            name: "email",
            type: "text"
        }
    ]


    const [data, setData] = useState({
        name: "",
        password: '',
        email: ''
    })

    console.log(data);
    const handelSubmit = (e) => {
        e.preventDefault()

        const jsonData = JSON.stringify(data)
        console.log(jsonData);
        
    }

    return (
        <div className='form'>
            <form onSubmit={handelSubmit} >
                {
                    form.map((form) => {

                        return <input type={form.type} placeholder={form.placHolder} name={form.name} onChange={(e) => {
                            setData((pre) => ({ ...pre, [e.target.name]: e.target.value }))
                        }} />

                    })
                }
                <button type='submit'>submit</button>
            </form>
        </div>
    )
}
