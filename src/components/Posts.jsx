import React from 'react';
import { PageHeader } from 'antd';
import Post from './Post';
import api from '../mock_api';
import _ from 'lodash';




function Posts(){
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
                _.map(api, (article) => (
                        <Post
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