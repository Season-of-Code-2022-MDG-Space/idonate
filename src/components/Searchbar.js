import React from 'react'
import { searchngo, applyfilter } from './logic';


export default function Searchbar() {
  return (
    <div>

      <input className="searchbar" id='Search' type="text"
        placeholder="Donations Ka Search Engine"
        autoComplete='off' aria-label="Search" onChange={searchngo} />


      <button type="button" className="btn btn-warning" 
      data-bs-toggle="modal" data-bs-target="#exampleModal">Filters</button>

      <div className="modal fade" id="exampleModal" tabIndex="-1" 
      aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <small className="modal-title" id="exampleModalLabel">Press ctrl to select multiple items</small>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">


              <select id="mySelect" multiple>

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

            </div>

            <div className="modal-footer">

              <button className="btn btn-warning searchbutton"
                type="submit" onClick={applyfilter}>Apply</button>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
