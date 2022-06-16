import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { UserContext } from '../../UserContext/UserContext';
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Edit.css';

const Edit = () => {
        const [users, setUsers] = useContext(UserContext);
        const {id} = useParams();
        const user = users.filter(user => user.id == id);
        const [name, setName] = React.useState(user[0].name);
        const [position, setPosition] = React.useState(user[0].position);
        const [salary, setSalary] = React.useState(user[0].salary);

        const editName = (e) => {
                setName(e.target.value);
                const edited_name = name;
                user[0].name = edited_name;
        }
        const editPosition = (e) => {
                setPosition(e.target.value);
                const edited_position = position;
                user[0].position = edited_position;
        }
        const editSalary = (e) => {
                setSalary(e.target.value);
                const edited_salary = salary;
                user[0].salary = edited_salary;
        }
        const editUser = (e) => {
                e.preventDefault();
                setUsers([...users]);

        };


        return (
                <div className='edit'>
                       <Form>
                        <Form.Group>
                                <Form.Label><h2>ID No:{user[0].id}</h2></Form.Label>
                                
                        </Form.Group>
                        <Form.Group>
                                <Form.Label>Name</Form.Label>
                                <Form.Control
                                        type="text"
                                        name="name"
                                        value={name}
                                        onChange={editName}
                                        placeholder={user[0].name}
                                />
                        </Form.Group>
                        <Form.Group>
                                <Form.Label>Position</Form.Label>
                                <Form.Control
                                        type="text"
                                        name="position"
                                        value={position}
                                        onChange={editPosition}
                                        placeholder={user[0].position}
                                />
                        </Form.Group>
                        <Form.Group>
                                <Form.Label>Salary</Form.Label>
                                <Form.Control
                                        type="text"
                                        name="salary"
                                        value={salary}
                                        onChange={editSalary}
                                        placeholder={user[0].salary}
                                />
                        </Form.Group>
                        <Form.Group>
                                <Form.Label>
                                        <Link to="/">
                                                <Button className='action__btn' variant="primary" onClick={editUser}>Edit User</Button>
                                        </Link>
                                        <Link to="/">
                                                <Button className='action__btn' variant="info">Back To Home</Button>
                                        </Link>
                                </Form.Label>
                        </Form.Group>
                     </Form> 
                </div>
        );
};

export default Edit;