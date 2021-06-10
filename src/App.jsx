import React,{ Component } from 'react';
import './App.css';
import NewsList from './components/NewsList';
import SearchBox from './components/SearchBox';
import axios from 'axios'
import Paginate from './components/Paginate'

class App extends Component {


  state = {
    isLoading: true,
    articles: [],
    errorMessage : '',
    searching: false,
    }

    componentDidMount(){
      this.search(null)
    }
 
  handleSearchBox = (value)=>{
 this.search(value)
 
}


search = (value) =>{

  let api = "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=fb2c0af2563a47f2a54a0fb0939a8d0e&pageSize=100"

  if (value != null){
    api = "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=bce2e440bdcc43868f5062ee06078743&pageSize=100" + value
  }
    axios.get(api)
    .then((res)=> {
      const state = {...this.state}
      state.articles = res.data.articles
      state.isLoading = false
      state.searching = value != null
      this.setState(state)
      })
    
    .catch(err=> {
      this.setState({
        isLoading: false,
        articles: [],
        errorMessage: err.response.data.message
      })
    }
    )}


  render () {
  return (
     <div className ="App container">
       <header>
         <h1>News-API </h1>
         </header>
         <Paginate/>
         <SearchBox 
         value={this.state.searchtext}
         onClear={this.handleSearchBoxClear}
         onSearch={this.handleSearchBox}
         searching={this.state.searching}/>
         {this.state.errorMessage ? <div className= 'alert alert-danger mt-3'>{this.state.errorMessage}
         </div> :null}
         <NewsList isLoading={this.state.isLoading} 
         articles={this.state.articles}/>

     </div> 
  )
}
}

export default App;
