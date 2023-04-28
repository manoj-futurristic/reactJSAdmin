import '../../assets/css/grid.css';
import { getPosts } from '../../services/services';
import { useState, useEffect } from "react";
import Loader from "../../components/loader";


const Posts = () => {

    const [loading, setLoading] = useState(false);
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        setLoading(true);
        getPosts().then(response => {
            setPosts(response.data);
            setTimeout(() => { setLoading(false); }, 500);
        });
    }, []);



    return (
        <>
            {loading ? (
                <Loader />
            ) : (
                <div style={{ margin: '8rem' }}>
                    <div className="row view-group">
                        {
                            posts.map((post) =>
                                <div class="item col-xs-4 col-lg-3">
                                    <div class="thumbnail card">
                                        <div class="img-event">
                                            {
                                                post.contentType === 0 ?
                                                    <img class="group thumbnail-img list-group-image img-fluid" src="https://cdn.dribbble.com/users/436757/screenshots/2415904/placeholder_shot.gif" alt="" />
                                                    : post.contentType === 1 ?
                                                        <img class="group thumbnail-img list-group-image img-fluid" src={post.content} alt="" />
                                                        :
                                                        <iframe title={post._id} className='thumbnail-img'
                                                            src={post.content} />
                                            }

                                        </div>
                                        <div class="caption card-body">
                                            <h4 class="group card-title inner list-group-item-heading">
                                                {post.title}</h4>
                                            {
                                                post.contentType === 0 ?
                                                    <h4 class="group card-title inner list-group-item-heading">
                                                        {post.content}
                                                    </h4> : ""
                                            }

                                            <div class="row">
                                                <div class="col-xs-12 col-md-6">
                                                    <p class="lead">
                                                        {post.publisher.email.split('@')[0]}
                                                    </p>
                                                </div>
                                                <div class="col-xs-12 col-md-6">
                                                    <p class="lead">
                                                        {post.contentType === 0 ? "TEXT" : post.contentType === 1 ? "IMAGE" : "VIDEO"}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        }

                    </div>
                </div>

            )}
        </>
    );
}

export default Posts;