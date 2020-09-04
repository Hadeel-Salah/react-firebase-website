import React from 'react';
import { Card } from 'antd';
import {Link } from '@reach/router'

const PostSnippet = (props) =>{
    return(
           <div className="postsnippet_container">
            <Card
                style={{ marginTop: '16' }}
                type="inner"
                title={props.title}
                extra=
                {
                <Link to={`/post/${props.id}`}>Read full article </Link>
                }
                >
                <p className="article_content">
                    {
                    props.content.split('\n').map((paragraph, indx) =>{
                        return <p key={indx}>{paragraph} </p>
                    })
                    }
                </p>
                
            </Card>

            </div>
)
}
export default PostSnippet;