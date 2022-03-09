import React from 'react'
export default function Searchbar(props) {
  return (
    <div>
      
      <input className="searchbar" id='Search' type="text" placeholder="Donations Ka Search Engine" autoComplete='off' aria-label="Search" onKeyUp={props.searchngo}/>
  
       <select id="mySelect">
          <option className="filterelement">All</option>
          <optgroup label='Rating'></optgroup>
          <option className="filterelement">1</option>
          <option className="filterelement">2</option>
          <option className="filterelement">3</option>
          <optgroup label='Sector'></optgroup>
          <option className="filterelement">Aged/Elderly</option>
          <option className="filterelement">Women Empowerment</option>
          <option className="filterelement">Differently Abled</option>
          <option className="filterelement">Education</option>
          <option className="filterelement">Environment</option>
          <option className="filterelement">Health</option>
          <optgroup label='State'></optgroup>
          <option className="filterelement">Delhi</option>
          <option className="filterelement">Maharastra</option>
          <option className="filterelement">Madhya Pradesh</option>
          <option className="filterelement">Uttar Pradesh</option>
        </select>
        <button className="btn btn-warning searchbutton" type="submit" onClick={props.applyfilter}>Apply</button>
    </div>
  )
}
