import React from 'react'
export default function Searchbar(props) {
  return (
    <div>
      
      <input className="searchbar" id='Search' type="text" placeholder="Donations Ka Search Engine" autoComplete='off' aria-label="Search"/>
  
       <select id="mySelect">
          <option className="filterelement">All</option>
          <optgroup label='Gender'></optgroup>
          <option className="filterelement">Male</option>
          <option className="filterelement">Female</option>
          <optgroup label='Profession'></optgroup>
          <option className="filterelement">Minister</option>
          <option className="filterelement">Entrepreneur</option>
          <option className="filterelement">Actor</option>
          <option className="filterelement">Cricketer</option>
        </select>
        <button className="btn btn-outline-success searchbutton" type="submit" onClick={props.searchngo}>Search</button>
    </div>
  )
}
