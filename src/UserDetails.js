import { useParams } from "react-router-dom";
import useFetch from "./useFetch";

const UserDetails = () => {
    const { id } = useParams();
    const { data: user, error, isPending } = useFetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    return ( 
        <div className="blogdetails">
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {user && (
                <article>
                    <h2>{user.name}</h2>
                    <p><strong>Email:-</strong> {user.company.name}</p>
                    <p><strong>Address:-</strong> { user.address.street}, { user.address.suite}, { user.address.city}, { user.address.street} - { user.address.zipcode}</p>      
                    <p><strong>Website:- </strong>{ user.website }</p>
                </article>
            )}
        </div>
    );
}
 
export default UserDetails;