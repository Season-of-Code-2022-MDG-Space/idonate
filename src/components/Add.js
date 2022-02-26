import React from 'react'

export default function Add() {
    return(
        <div className="card s">
        <img src="https://picsum.photos/200/300?nocache=<?php echo microtime(); ?>" className="card-img-top m" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">Adds</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
      </div>
  )
}
