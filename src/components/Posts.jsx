import React , {useState, useEffect}from 'react';
import PostSnippet from './PostSnippet';
import {PageHeader} from 'antd'
import firebase from './firebase'
import api from '../mock_api';
import _ from 'lodash';



const Posts = (props) =>{
    const [Post, setPosts] = useState([]);
    useEffect (() =>{
        firebase.database().ref('/posts').on('value', querySnapShot => {
            let data = querySnapShot.val();
            let allPosts = {
                data
            };
           setPosts(
             allPosts
           );
          });
    }, [])
    console.log(Post)
    return(
        <div className="post_container">
            <div className="page_header_container">
                <PageHeader
                        title="Posts"
                        style = {{ 
                            border: '1px solid rgb(235, 237, 240)'
                        }}
                    />
            </div>

        <div className="articles_container">
            {
                _.map(api, (article , indx) => (
                        <PostSnippet
                            key={indx}
                            id={indx}
                            title={article.title}
                            content={article.content}
                          />
                
                ))
            }
        </div>
        </div>
)
}
export default Posts;