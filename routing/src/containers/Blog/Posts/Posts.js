import React, { Component } from "react";
import axious from '../../../axious';

import Post from '../../../components/Post/Post';
import './Posts.css';
import FullPost from '../FullPost/FullPost';

import { Link, Route } from 'react-router-dom';


class Posts extends Component{

    state = {
        posts: [],
    }

    componentDidMount(){
        console.log(this.props);
        
        axious.get('/posts')  //using baseURL 
            .then(response => {
                const posts = response.data.slice(0,4);
                const updatedPosts = posts.map(post => {
                    return{
                        ...post,
                        author: 'Nirbhay'
                    }
                });

                console.log(response); 
                // this.setState({posts: response.data});
                this.setState({posts: updatedPosts});
                
            })
            .catch(error => {            //handling the error
                // console.log(error);
                this.setState({error: true})
            });
    }

    postSelectedHandler = (id) => {
        this.props.history.push('/' + id); //or {pathname: '/' + id}
    }

    render(){

        let posts = <p style={{textAlign: 'center'}}>Something went wrong !</p>

        if(!this.state.error){
            posts = this.state.posts.map(post => {
                //in data, each post has a title and id
                return(
                    // <Link to={'/' + post.id} key={post.id}> alternative to history.push via clicked
                        <Post 
                            key={post.id} 
                            title={post.title}
                            author={post.author}
                            // {...this.props}   //or use withRouter
                            // match={this.state.match}   
                            clicked={() => this.postSelectedHandler(post.id)}/>
                    // </Link>
                );
            });
        }

        return(
            <div>

                <section className="Posts">
                    {posts}
                </section>
                <Route path="/:id" exact component={FullPost}/> 

                {/* if path in blog of Posts is /posts then it will not append automatically*/}
                {/* <Route path={this.props.match.url + '/:id'} exact component={FullPost}/>  */}

            </div>
        );
    }
}

export default Posts;