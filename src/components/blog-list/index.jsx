import React from 'react';
import PropTypes from 'prop-types';
import block from 'bem-cn';
import { v4 } from 'uuid';
import { Link } from 'react-router-dom';

import './blog-list.css';

const BlogList = props => {
    const blogList = block('blog-list');
    if (!props.posts) {
        return null;
    }
    const postList = props.posts.reverse();
    return (
        <div className={blogList}>
            {postList.map(post => {
                return (
                    <div key={v4()} className={blogList('post')}>
                        <Link
                            className={blogList('post-title')}
                            to={`/post/${post.id}`}
                        >
                            {post.title}
                        </Link>
                        <div className={blogList('post-description')}>
                            {post.text}
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

BlogList.propTypes = {
    posts: PropTypes.array
};

export default BlogList;
