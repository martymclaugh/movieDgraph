import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchRecentlyViewed } from '../actions';

class Footer extends Component {
  componentWillMount(){
    this.props.fetchRecentlyViewed();
  }
  render(){
    return <div className="footer"></div>
  }
}
function mapStateToProps({ recentlyViewed }){
  return { recentlyViewed }
}
export default connect(mapStateToProps, { fetchRecentlyViewed })(Footer);
