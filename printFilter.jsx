import { React, useState } from 'react'
import jobs from "./jobs.json"

export default function printFilter(props) {
   //create a new array by filtering the original array
   const filteredData = jobs.filter((el) => {
    //if no input the return the original
    if (props.input === '') {
        return el;
    }
    //return the item which contains the user input
    else {
        return el.text.toLowerCase().includes(props.input)
    }
})
return (<>
    123
    <ul>
        {filteredData.map((item) => (<>
            <li key={item.id}>{item.text}</li>
            <label> • {item.salary} • {item.companyName} • {item.adress} • </label>
            <label>{item.description}\n</label>
            </>
        ))}
    </ul>
    </>
)
}