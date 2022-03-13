import React from 'react'
import {searchngo,applyfilter} from './logic';


export default function Searchbar() {
  return (
    <div>
      
      <input className="searchbar" id='Search' type="text" 
      placeholder="Donations Ka Search Engine" 
      autoComplete='off' aria-label="Search" onChange={searchngo}/>
  
       <select id="mySelect">

          <option className="filterelement">All</option>

          <optgroup label='Rating'></optgroup>
          <option className="filterelement">One</option>
          <option className="filterelement">Two</option>
          <option className="filterelement">Three</option>
          <option className="filterelement">Four</option>
          <option className="filterelement">Five</option>

          <optgroup label='Sector'></optgroup>
          <option className="filterelement">Aged/Elderly</option>
          <option className="filterelement">Unemployment</option>
          <option className="filterelement">Hunger</option>
          <option className="filterelement">Education</option>
          <option className="filterelement">Environment</option>
          <option className="filterelement">Health</option>

          <optgroup label='State'></optgroup>
          <option className="filterelement">Delhi</option>
          <option className="filterelement">Mumbai</option>
          <option className="filterelement">Bangalore</option>
          <option className="filterelement">Pune</option>
        </select>

        <button className="btn btn-warning searchbutton"
         type="submit" onClick={applyfilter}>Apply</button>

    </div>
  )
}
