import React from 'react';
import PropTypes from 'prop-types';
import block from 'bem-cn';
import './add-post.css';

export default class AddPost extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            text: ''
        };
    }
    handleOnTitleChange(e) {
        const value = e.target.value;
        this.setState({ title: value });
    }
    handleOnTextChange(e) {
        const value = e.target.value;
        this.setState({ text: value });
    }
    addPost() {
        this.props.addPost(this.state);
        this.setState({ title: '', text: '' });
    }
    render() {
        const addPostClass = block('add-post');
        return (
            <div className={addPostClass}>
                <div className={addPostClass('wrapper')}>
                    <h2>Форма создания поста</h2>
                    <input
                        className={addPostClass('input')}
                        value={this.state.title}
                        type="text"
                        placeholder="Название поста"
                        onChange={e => {
                            this.handleOnTitleChange(e);
                        }}
                    />
                    <textarea
                        value={this.state.text}
                        placeholder="Содержание поста"
                        className={addPostClass('textarea')}
                        onChange={e => {
                            this.handleOnTextChange(e);
                        }}
                    />
                    <button
                        onClick={() => {
                            this.addPost();
                        }}
                        className={addPostClass('button')}
                    >
                        Создать пост
                    </button>
                </div>
            </div>
        );
    }
}

AddPost.propTypes = {
    addPost: PropTypes.func
};
