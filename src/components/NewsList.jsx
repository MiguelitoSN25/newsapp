import React, { useState  } from 'react'
import ReactPaginate from 'react-paginate';


export default function NewsList (props) 
{
  const [pageNumber, setPageNumber] = useState(0);
  const usersPerPage = 6;
  const pagesVisited = pageNumber * usersPerPage;

  const pageCount = Math.ceil(props.articles.length / usersPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };



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
         <p className="card-desc">{item.description}</p>
      <span className="news__author">{item.author}</span> <br />
      <span className="news__published">{item.publishedAt}</span>
      <span className="news__source">{item.source.name}</span>
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
<ReactPaginate
  previousLabel={"Previous"}
  nextLabel={"Next"}
  pageCount={pageCount}
  onPageChange={changePage}
  containerClassName={"paginationBttns"}
  previousLinkClassName={"previousBttn"}
  nextLinkClassName={"nextBttn"}
  disabledClassName={"paginationDisabled"}
  activeClassName={"paginationActive"}
/>
</div> 
  
)
}
