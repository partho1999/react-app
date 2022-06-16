import React, { useContext, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { UserContext } from '../../UserContext/UserContext';
import { Link } from 'react-router-dom';
import './Create.css';

const Create = () => {
        const [users, setUsers] = useContext(UserContext);
        const [id, setId] = useState('');
        const [name, setName] = useState('');
        const [position, setPosition] = useState('');
        const [salary, setSalary] = useState('');

        const UpdateId = (e) => {
                setId(e.target.value);
        }
        const UpdateName = (e) => {
                setName(e.target.value);
        }
        const UpdatePosition = (e) => {
                setPosition(e.target.value);
        }
        const UpdateSalary = (e) => {
                setSalary(e.target.value);
        }
        const CreateUser = (e) => {
                e.preventDefault();
                setUsers([...users, {id: id, name: name, position: position, salary: salary}]);
                setId('');
                setName('');
                setPosition('');
                setSalary('');
        }

        return (
                <div className='create'>
                     <h2 className='title__txt'>Create User</h2>
                     <Form>
                        <Form.Group>
                                <Form.Label>ID</Form.Label>
                                <Form.Control
                                        type="text"
                                        name="id"
                                        value={id}
                                        onChange={UpdateId}
                                        placeholder="Enter ID"
                                />
                                
                        </Form.Group>
                        <Form.Group>
                                <Form.Label>Name</Form.Label>
                                <Form.Control
                                        type="text"
                                        name="name"
                                        value={name}
                                        onChange={UpdateName}
                                        placeholder="Enter Name"
                                />
                        </Form.Group>
                        <Form.Group>
                                <Form.Label>Position</Form.Label>
                                <Form.Control
                                        type="text"
                                        name="position"
                                        value={position}
                                        onChange={UpdatePosition}
                                        placeholder="Enter Position"
                                />
                        </Form.Group>
                        <Form.Group>
                                <Form.Label>Salary</Form.Label>
                                <Form.Control
                                        type="text"
                                        name="salary"
                                        value={salary}
                                        onChange={UpdateSalary}
                                        placeholder="Enter Salary"
                                />
                        </Form.Group>
                        <Form.Group>
                                <Form.Label>
                                        <Link to="/">
                                                <Button className='action__btn' variant="primary" onClick={CreateUser}>Create</Button>
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

export default Create;