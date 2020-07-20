 import React from 'react';
 import { connect } from 'react-redux';
 import { fetchBlog } from '../../actions'

class BlogShow extends React.Component{

  componentDidMount(){
    const {id} = this.props.match.params;

    this.props.fetchBlog(id);
  }


  render(){

    if (!this.props.blog){
      return <div className="text-center">Loading...</div>
    }

    const {body, created_at, title} = this.props.blog
    return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-sm-12">
          <h3 className text-center>Title: {title}</h3>
          <p>Body: {body}</p>
          <p><small>Created at: {created_at}</small></p>
        </div>
      </div>
    </div>
    );
}

}

const mapStateToProps = (state, ownProps)=>{
  return {blog: state.blogs[ownProps.match.params.id]}
}

export default connect(mapStateToProps, {fetchBlog})(BlogShow);