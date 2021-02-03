import {Link} from 'react-router-dom'

const UserList = ({ users }) => {
    console.log(users);
  return (
    <div className="blog-list">
        {users.map(user => (
            <div className="blog-preview" key={user.id} >
            <Link to={`/user/${user.id}`} >
                <h2>{user.name}</h2>
                <p>{user.company.name}</p>
                <small>{user.company.bs}</small>
            </Link>
            </div>
      ))}
    </div>
  );
}
 
export default UserList;