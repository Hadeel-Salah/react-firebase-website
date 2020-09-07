import  React , {useState} from 'react';
import {PageHeader, Input, Button} from 'antd'
import firebase from './firebase';

const { TextArea } = Input;

const CreatePost = (props) =>{

    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    const onTitleChange = (event) => setTitle(event.target.value);
    const onContentChange = (event) => setContent(event.target.value);
    
    const onCreatePost = () => {
        let postRef = firebase.database().ref("posts")
        let payload = {title , content}

        postRef.push(payload).then(function(docRef) {
            console.log("Document successfully written!", docRef);
        })
     


    }

    return(
        <div className="create_post_container">
            <div className="page_header_container">
                <PageHeader
                        title=" Create Post"
                        style = {{ 
                            border: '1px solid rgb(235, 237, 240)'
                        }}
                    />
            </div>
            <div className='post_inputs_container'>
                <div className="post_inputs_container">
                    <div className="post_input_title">
                        <h2>Post Title</h2>
                    </div>
                    <div className="post_input">
                        <Input placeholder='Post Title' value={title} onChange={onTitleChange} />
                    </div>
                </div>
                <div className="post_inputs_container">
                    <div className="post_input_title">
                        <h2>Post Content</h2>
                    </div>
                    <div className="post_input">
                        <TextArea rows={10} value={content}  onChange={onContentChange} />
                    </div>
                </div>
                <div className="post_input_button">
                    <Button
                    size='large'
                    type='primary'
                    onClick={onCreatePost}
                    >
                        Create Post
                    </Button>
                </div>
            </div>
        </div>

    )
}
export default CreatePost;