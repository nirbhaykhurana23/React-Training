import React, { Component } from 'react';

import './Blog.css';
import Posts from './Posts/Posts';
// import  NewPost from './NewPost/NewPost';
import  FullPost from './FullPost/FullPost';

import { Route, NavLink, Switch, Redirect } from 'react-router-dom';

import asyncComponent from '../../hoc/asyncComponent';

const AsyncNewPost = asyncComponent(() => {
    return import('./NewPost/NewPost');
});

class Blog extends Component {

    state= {
        auth: true
    }

    render () {
       
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li>
                                {/* <Link to="/" exact>Home</Link> */}
                                <NavLink to="/" 
                                        exact
                                        activeClassName="my-active" //(for changing name of active class)
                                        activeStyle={{
                                            color: '#fa923f',
                                            textDecoration: 'underline'
                                        }}
                                        >Posts</NavLink>   

                                <NavLink to={{
                                    pathname: '/new-post',
                                    hash: '#submit', //append fragment to url
                                    search: '?quick-submission=true'  //query params
                                }}>New Post</NavLink>

                            </li>
                        </ul>
                    </nav>
                </header>
                {/* <Route path="/" exact render={() => <h1>Home</h1>}/> */}

                {/* every page that prefixed with '/' */}
                {/* <Route path="/" render={() => <h1>Home 2</h1>}/>  */}

                <Switch>
                    {this.state.auth ? <Route path="/new-post" component={AsyncNewPost}/> : null }
                    <Route path="/" component={Posts}/>  
                    {/* removed exact from here bcoz of nested route */}

                    {/* <Redirect from="/" to="/posts"/> */}

                    {/* <Route path="/:id" exact component={FullPost}/>  */}

                    <Route render={() => <h1>Not Found</h1>}/>
                </Switch>

            </div>
        );
    }
}

export default Blog;