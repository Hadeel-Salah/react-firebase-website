import React ,{useState, useEffect}from 'react';
import { PageHeader , Card} from 'antd';
import api from '../mock_api';

const Post = (props) =>{
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    
    useEffect(() =>{
        let post = api[props.id]
        setTitle(post.title)
        setContent(post.content)
    }, [props.id])
    return(
        <div className="post_container">
        <div className="page_header_container">
        <PageHeader
                title={title}
                style = {{ 
                    border: '1px solid rgb(235, 237, 240)'
                  }}
            />
        </div>
        <div className="post_content_container">
            <Card style={{marginTop: '20px'}}>
                <p>
                   {
                   content.split('\n').map((paragraph, indx) =>{
                       return <p key={indx}>{paragraph} </p>
                   })
                   }
                </p>
                
            </Card>
        </div>
        </div>
    )

}
export default Post;