import React from 'react'

export default function NewsList  (props) 
{
  return (
    <div className="mt-3">
    { props.isLoading ? <div className = "loading"> Cargando.. </div> : null}
    <div className="row">
    {props.articles.map((item, index) => {
     return (
     <div className="col-md-3" key={index}>
      <div className='card mb-3'>
        <img 
        src={item.urlToImage ?? "/EjayQ10E.jpg"} 
        className="card-img-top" 
        alt={item.title} 
        />
       <div className="card-body">
        <h5 className="card-title">{item.title}</h5>
         <p className="card-text">{item.content}</p>
         <a
         href={item.url}
         target="_blank"
         className="btn btn-primary"
         >
           Leer mas
         </a>
       </div>
      </div>
      </div>
      )
     })
    }
</div>
</div> 
  
)
}