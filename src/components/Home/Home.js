import { useContext, useState } from 'react';
import "./Home.css";
import { Button, Table } from 'react-bootstrap';
import { UserContext } from '../../UserContext/UserContext';
import { Link } from 'react-router-dom';

const Home = () => {
        const [users, setUsers] = useContext(UserContext)

        const [searchTerm, setSearchTerm] = useState('');

        console.log(searchTerm);
        return (
                <div>
                 <Link to="/create">
                        <Button variant="primary" className='create__btn'>create users</Button>
                 </Link>
                 <input type="text" className='search__input' placeholder='Search by name'/>
                 
                 <Table striped bordered hover>
                        <thead>
                                <tr>
                                        <th>ID</th>
                                        <th>Name</th>
                                        <th>position</th>
                                        <th>salary</th>
                                        <th>Actions</th>
                                </tr>
                        </thead>
                        <tbody>
                                {
                                        users.map(user => 
                                        <tr>
                                                <td>{user.id}</td>
                                                <td>{user.name}</td>
                                                <td>{user.position}</td>
                                                <td>{user.salary}</td>
                                                <td>
                                                  <Link to={"/read/"+user.id}>
                                                        <Button className='action__btn' variant="success">Read</Button> 
                                                  </Link>
                                                  <Link to={"/edit/"+user.id}>
                                                        <Button className='action__btn' variant="info">Edit</Button>
                                                  </Link>
                                                  <Link to={"/delete/"+user.id}>
                                                        <Button className='action__btn' variant="danger">Delete</Button>
                                                  </Link>
                                                </td>
                                        </tr>
                                        )
                                }
                                
                                
                        </tbody>
                 </Table>
                </div>
        );
};

export default Home;