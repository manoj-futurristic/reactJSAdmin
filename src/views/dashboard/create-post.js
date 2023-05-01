import { useState } from 'react';
import { createPosts } from '../../services/services';
import formImage from '../../assets/images/form.png'




const CreatePost = () => {
    const [title, setTitle] = useState("");
    const [contentType, setContentType] = useState(0);
    const [content, setContent] = useState('');
    const [message, setMessage] = useState();

    const onSubmit = (e) => {
        e.preventDefault();
        const data = {
            title: title,
            contentType: contentType,
            content: content,
            publisher: localStorage.getItem('id')
        };
        createPosts(data).then(response => {
            if (response['status'] === 200) {
                setMessage(response['message']);
                window.location.reload(true);
            } else {
                setMessage(response['message']);
            }
        })
            .catch(err => {
                setMessage("Something went wrong")
            });
    }

    return (

        <div style={{ margin: '8rem' }}>
            {message &&
                <div class="alert alert-success alert-dismissible fade show" role="alert">
                    {message}
                </div>}
            <div className="row d-flex justify-content-center align-items-center h-100d-flex justify-content-center align-items-center h-100">

                <div className="col-md-9 col-lg-6 col-xl-5col-md-9 col-lg-6 col-xl-5">
                    <label className='form-label mb-3'><h4>Add Post</h4></label>
                    <img className="img-fluid" src={formImage} alt=""></img>
                </div>
                <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                    <form onSubmit={onSubmit}>
                        <div className="form-outline mb-4">
                            <label className="form-label mt-2" for="title">Title</label>
                            <input type="text" id="title" required className="form-control form-control-lg"
                                placeholder="Enter Title"
                                onChange={(v) => setTitle(v.target.value)}
                            />
                        </div>
                        <div className="form-outline mb-4">
                            <label className="form-label mt-2" for="content">Content Type</label>
                            <select name="contentType" id="contentType" required className="form-control form-control-lg"
                                onChange={(v) => setContentType(parseInt(v.target.value))}
                            >
                                <option value="0">TEXT</option>
                                <option value="1">IMAGE</option>
                                <option value="2">VIDEO</option>
                            </select>
                        </div>
                        <div className="form-outline mb-4">
                            <label className="form-label mt-2" for="content">Content ({
                                contentType === 0 ? 'Input only text' :
                                    contentType === 1 ? "Input Image Url" :
                                        "Input Youtube Video Url"
                            })</label>
                            <textarea type="text" id="content" required className="form-control form-control-lg"
                                placeholder="Enter content"
                                onChange={(v) => setContent(v.target.value)}
                            />
                        </div>
                        <div className="text-center text-lg-start mt-4 pt-2">
                            <button type="submit" className="btn btn-primary btn-lg btn-block">Upload Post</button>
                        </div>
                    </form>
                </div>

            </div>

        </div>
    );
};



export default CreatePost;