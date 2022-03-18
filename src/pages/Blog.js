import React, { useEffect, useState } from 'react'

const Blog = () => {
  const [news, setNews] = useState([]);

  const getnews = async () => {
    const response = await fetch('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=b3168c489aab4b1caa29e9bf5d761da1')
    setNews((await response.json()).articles);
  }

  useEffect(() => {
    getnews();
  }, [])

  return (
    <div className="container mt-5">
      <div className="row row-cols-3">
        {news.length === 0 ? '' : news.map((ele) => {
          return (
            <div className="col" key={ele.title}>
              <div className="card bg-warning mt-3" style={{width: '18rem'}}>
                <div className="card-body">
                <img src={ele.urlToImage} className="card-img-top" alt="Not Loaded"/>
                  <h5 className="card-title">{ele.title}</h5>
                  <p className="card-text">{ele.description}</p>
                </div>
              </div>
            </div>)
        })}
      </div>
    </div>
  )
}


export default Blog;
