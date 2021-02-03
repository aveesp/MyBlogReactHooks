import UserList from "./UserList";
import useFetch from "./useFetch";

const User = () => {
  const { error, isPending, data: users } = useFetch('https://jsonplaceholder.typicode.com/users')

  return (
    <div className="User">
      { error && <div>{ error }</div> }
      { isPending && <div>Loading...</div> }
      { users && <UserList users={users} /> }
    </div>
  );
}
 
export default User;
