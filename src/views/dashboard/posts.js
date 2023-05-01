import '../../assets/css/grid.css';
import { getPosts } from '../../services/services';
import { useState, useEffect } from "react";
import Loader from "../../components/loader";


const Posts = () => {

    const [loading, setLoading] = useState(false);
    const [posts, setPosts] = useState([]);
    const [filterposts, setFilterPosts] = useState([]);


    useEffect(() => {
        setLoading(true);
        getPosts().then(response => {
            setPosts(response.data);
            setFilterPosts(response.data);
            setTimeout(() => { setLoading(false); }, 500);
        });
    }, []);


    const filterSelection = (val) => {
        let type = parseInt(val);
        var btnContainer = document.getElementById("myBtnContainer");
        var btns = btnContainer.getElementsByClassName("btn");
        for (var i = 0; i < btns.length; i++) {
            btns[i].addEventListener("click", function () {
                var current = document.getElementsByClassName("active");
                current[0].className = current[0].className.replace(" active", "");
                this.className += " active";
            });
        }
        if (type === 3) {
            setFilterPosts(posts.map(e => e));
        } else {
            setFilterPosts(posts.filter(e => e.contentType === type));
        }
    };



    return (
        <>
            {loading ? (
                <Loader />
            ) : (
                <div style={{ margin: '8rem' }}>
                    <div id="myBtnContainer" className=' d-flex flex-row-reverse mb-3'>
                        <button class="btn active" onClick={() => filterSelection('3')}> Show all ({posts.length})</button>
                        <button class="btn" onClick={() => filterSelection('0')}> Text</button>
                        <button class="btn" onClick={() => filterSelection('1')}> Images</button>
                        <button class="btn" onClick={() => filterSelection('2')}> Videos</button>
                    </div>

                    <div className="row view-group">
                        {
                            filterposts.map((post) =>
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
                                                    <p class="lead" style={{ textAlign: "end" }}>
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