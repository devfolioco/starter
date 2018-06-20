import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';

import { getPosts } from '../actions/posts';

class Posts extends Component {
  componentWillMount() {
    this.props.dispatchGetPosts();
  }
  render() {
    const { posts, isLoading, error } = this.props;
    return (
      <div>
        <Helmet>
          <title>Posts | Devfolio Starter</title>
        </Helmet>
        <h2>Posts</h2>
        <ul>{isLoading ? 'Loading...' : posts.map(post => <li>{post.title}</li>)}</ul>
        {console.log(error)}
      </div>
    );
  }
}

const mapStateToProps = ({ posts }) => ({
  posts: posts.items,
  isLoading: posts.isLoading,
  error: posts.error,
});

const mapDispatchToProps = dispatch => ({
  dispatchGetPosts: () => dispatch(getPosts()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Posts);
