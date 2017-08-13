import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { addPost } from '../../redux/posts';
import BlogList from '../../components/blog-list';
import AddPost from '../../components/add-post';

const Home = props => (
    <div className="home">
        <AddPost addPost={props.addPost} />
        <BlogList posts={props.posts} />
    </div>
);

const mapStateToProps = state => state.posts;

const mapDispatchToProps = dispatch => bindActionCreators(
    {
        addPost
    },
    dispatch
);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
