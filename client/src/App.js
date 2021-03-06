import { useEffect, useState } from 'react'
import Card from './components/Card/Card.component'
import userApi from './api/user.api';
import './App.css';

const App = () => {
  const [users, setUsers] = useState({})
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    const getAllusers = async () => {
      try {
        const { data } = await userApi.get('/users');
        setUsers(data.users);
      } catch (error) {
        console.log(error.message)
      }
    }
    getAllusers()
  }, [isClicked])

  const clickHandler = () => {
    setIsClicked(!isClicked)
  }

  const renderUsers = () => {
    return Object.keys(users).map((id) => {
      console.log(users[id]);
      return (
        <Card key={id} id={id} users={users} />
      );
    });
  };

  return (
    <div className="App">
      <h1>Bank Api</h1>
      <button onClick={clickHandler}>Get Users</button>
      {isClicked && renderUsers()}
    </div>
  );
}

export default App;
