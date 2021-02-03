import { useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
    const { id } = useParams();
    const { data:blog, error, isPending } = useFetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    return ( 
        <div className="blogdetails">
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <div>{ blog.body}</div>
                </article>
            )}
        </div>
    );
}
 
export default BlogDetails;