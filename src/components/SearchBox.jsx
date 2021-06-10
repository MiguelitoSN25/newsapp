import React, { Component } from 'react'

export default class SearchBox extends Component {

    constructor(props){
        super(props)

        this.handleFormSubmit = this.handleFormSubmit.bind(this)
    }

    handleFormSubmit = (event) => {
        event.preventDefault()
       this.props.onSearch(event.target.elements['search'].value)
    }
    render() {
        return (
          <form className= 'd-flex'onSubmit={this.handleFormSubmit}>
              <div className='flex-grow-1'>
              {this.props.searching
              ? <input type ="text" className ='form-control' placeholder = 'Search News...' name='search'defaultValue={this.props.value}/>
              : <input type ="text" className ='form-control' placeholder = 'Search News...' name='search'defaultValue />}

              </div>
              <div style={{width:'120px'}} className='d-grid gap-2 ms-3'>
                  {
                      this.props.searching
                      ? <button className= 'btn btn-primary d-block' type='submit'>
                      clear
              </button>
              : <button className = 'btn btn-primary'type='submit'>
                Buscar
                  </button>
            } 
                  </div>
          </form>
        )
    }
}
