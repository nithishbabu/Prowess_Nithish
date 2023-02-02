import './css/card.css'
import blog_image from "./images/blog_image.jpeg"
function card(props){
    const title=props.ite;
    return(
    
            <div class="card">
                <div class="card-top">
                    <img src={blog_image} alt="" class="blog-img"></img>
                    
                </div>
                <div class="card-bottom">
                    <div class="bottom-top">
                        <h2 class="title">{title}</h2>
                        <a  href="Blog/index.html" class="read-btn">Read more</a>
                    </div>
                    <div class="bottom-bottom">
                        <ul class="tag-list">
                            <li>#chatGpt</li>
                            <li>#AI</li>
                            <li>#Microsoft</li>
                            <li>#OpenAi</li>
                            <li>#RDL</li>
                            <li>#Pycharm</li>
                            <li>#Anaconda</li>
                            <li>#Tensorflow</li>
                        </ul>
                    </div>
                </div>
            </div> 
            );
            }
            export default card;