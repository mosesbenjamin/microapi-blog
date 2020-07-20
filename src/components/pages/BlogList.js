import React from 'react';
import { connect } from 'react-redux';
import { fetchBlogs} from '../../actions';
import { Link } from 'react-router-dom';

import {Table } from 'react-bootstrap';
import Moment from 'react-moment';



class Blogblog extends React.Component{
  componentDidMount(){
    this.props.fetchBlogs()
  }

  render(){
   const header = ["S/NO","Author", "Title", "Body", "Created At"];

  if (!this.props.blogs){
    return <div className="text-center">Loading...</div>
  }

  return(
    <div className="container">
      <div className="card w-100 mt-3">
        <div className="text-uppercase card-header d-flex justify-content-center pt-3">
          <h4 className="text-center" style={{fontWeight: 'bold' }}>
            Blogs
          </h4>
        </div>
          <div className="card-body table-responsive">
            <Table>
                <thead>
                    <tr>{header.map((h, i) => <th className="card-heading text-uppercase" key={i}>{h}</th>)}</tr>
                </thead>
                <tbody>
                {this.props.blogs.map((blog, i) => {
                return (
                <tr key={i}>
                
                      <td>
                        <Link to={ `/blog/${blog.id}` }>
                          {i+1}
                         </Link> 
                      </td>   
                      <td>
                        <Link to={ `/blog/${blog.id}` }>
                          {blog.author}
                        </Link> 
                      </td>  
                      <td>
                       <Link to={ `/blog/${blog.id}` }>
                          {blog.title}
                        </Link>
                      </td>
                      <td>
                        <Link to={ `/blog/${blog.id}` }>
                          {blog.body}
                        </Link>
                      </td>
                      <td>
                       <Link to={ `/blog/${blog.id}` }>
                            <time>
                              <Moment format="D MMM YYYY" withTitle>
                                {blog.created_at}
                              </Moment>
                            </time>
                        </Link>
                      </td>
                  </tr>
                )
              })}
                </tbody>
            </Table>

          </div>
        </div>
    </div>
    )
  }

}

const mapStateToProps = state=>{
  return {blogs: Object.values(state.blogs)}

}

export default connect(mapStateToProps, {fetchBlogs})(Blogblog);