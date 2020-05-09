import React, { Component } from 'react';

import './NewPost.css';

import axious from 'axios';
import { Redirect } from 'react-router';

class NewPost extends Component {
    state = {
        title: '',
        content: '',
        author: 'Nirbhay',
        submitted: false
    }

    componentDidMount(){
        //here we can also write authentication condition
        console.log(this.props);
    }

    postDataHandler = () => {
        const data = {
            title: this.state.title,
            body: this.state.content,
            author: this.state.author
        };

        axious.post('/posts', data)
                .then(response => {
                    console.log(response);  
                    this.setState({submitted: true});
                    // this.props.history.push('/');  // redirect alternative
                    // this.props.history.replace('/');
                });

    }

    render () {

        let redirect= null;
        if(this.state.submitted){
            redirect= <Redirect to="/"/>;
        }

        return (
            <div className="NewPost">

                {redirect}

                <h1>Add a Post</h1>
                <label>Title</label>
                <input type="text" value={this.state.title} onChange={(event) => this.setState({title: event.target.value})} />
                <label>Content</label>
                <textarea rows="4" value={this.state.content} onChange={(event) => this.setState({content: event.target.value})} />
                <label>Author</label>
                <select value={this.state.author} onChange={(event) => this.setState({author: event.target.value})}>
                    <option value="Max">Max</option>
                    <option value="Manu">Manu</option>
                </select>
                <button onClick={this.postDataHandler}>Add Post</button>
            </div>
        );
    }
}

export default NewPost;