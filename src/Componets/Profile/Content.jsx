import classes from "./Content.module.css";
import Post from "./MyPost/MyPost";

const Content = () => {
    return (
        <div className={classes.content}>
            <h1>Blog</h1>
            <p>This is demo blog</p>
            <Post/>
        </div>
    )
}
export default Content;