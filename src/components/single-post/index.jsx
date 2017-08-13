import React from 'react';
import PropTypes from 'prop-types';
import block from 'bem-cn';
import { Link } from 'react-router-dom';
import './single-post.css';

const SinglePost = props => {
    const post = block('single-post');
    return (
        <div className={post}>
			<Link className={post('back')} to="/">
				{'<'} Назад
			</Link>
            <h1 className={post('title')}>
                {props.post.title}
            </h1>
            <div className={post('description')}>
                {props.post.text}
            </div>
        </div>
    );
};

SinglePost.propTypes = {
    post: PropTypes.object
};

export default SinglePost;


