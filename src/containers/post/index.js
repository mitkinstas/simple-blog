import React from 'react';
import SinglePost from '../../components/single-post';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getPost, resetPostInfo } from '../../redux/posts';

class Post extends React.PureComponent {
    componentWillUnmount() {
        this.props.resetPostInfo();
    }
    render() {
        let data = {
            title: 'Страница не существует',
            text: 'Страница не найдена или удалена'
        };
        if (this.props.match && this.props.match.params) {
            const id = this.props.match.params.id;
            this.props.getPost(id);
            data = this.props.postInfo || data;
        }
        return <SinglePost post={data} />;
    }
}

const mapStateToProps = state => state.posts;

const mapDispatchToProps = dispatch => bindActionCreators(
    {
        getPost,
        resetPostInfo
    },
    dispatch
);

export default connect(mapStateToProps, mapDispatchToProps)(Post);
