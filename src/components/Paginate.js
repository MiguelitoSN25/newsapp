import React, { PureComponent } from 'react'
import axios from 'axios'
import ReactPaginate from 'react-paginate';
export class Paginate extends PureComponent {
    
    constructor(props) {
        super(props)
    
        this.state = {
            offset : 0,
            tableData:[],
            orgTableData: [],
            perPage: 5,
            currentPage: 0
             
        }
        this.handlePageClick = this.handlePageClick.bind(this);
    }
    handlePageClick = (e) => {
        const selectedPage = e.selected;
        const offset = selectedPage * this.state.perPage;

        this.setState({
            currentPage: selectedPage,
            offset: offset
        }, () => {
            this.loadMoreData()
        });

    };
    
    loadMoreData() {
		const data = this.state.orgtableData;


		let slice = data.slice(this.state.offset, this.state.offset + this.state.perPage)

        
		this.setState({
			pageCount: Math.ceil(data.length / this.state.perPage),
			tableData:slice
		})

        
	
    }
    componentDidMount(){
this.getData();
    }
    
    getData(){
    axios
    .get(`http://newsapi.org/v2/everything?&= apiKey=948893d8776145eeb5b30b0bc3e31cd0`)
    .then(res =>{
    var data = res.data;

    var slice = data.slice = (this.state.offset,this.state.offset + this.state.perPage)

    this.setState({
        pageCount : Math.ceil(data.length / this.state.perPage),
        orgTableData : res.data,
        tableData:slice
    })

    }
        )

    }

    render() {
        return (
            <div>
              <ReactPaginate
              previousLabel={"prev"}
              nextLabel={"next"}
              breakLabel={"..."}
              breakClassName={"break-me"}
              pageCount={this.state.pageCount}
              marginPagesDisplayed={2}
              pageRangeDisplayed={5}
              onPageChange ={this.handlePageClick}
              containerClassName ={"pagination"}
              subContainerClassName ={"pages paginate"}
              activeClassName={"active"}/>
            </div>
        )
    }
}

export default Paginate
