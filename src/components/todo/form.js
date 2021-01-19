import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';

import Button from 'react-bootstrap/Button';

function TodoForm(props) {
  const [item, setItem] = useState({});

  const handleInputChange = e => {
    setItem({ ...item, [e.target.name]: e.target.value });
    console.log(item);
  };

  const handleSubmit = e => {
    e.preventDefault();
    e.target.reset();
    console.log(item);
    props.handleSubmit(item);
    setItem({});
  };
  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <h3>Add An Item</h3>
          <Form.Label>To Do Item</Form.Label>
          <Form.Control
            name="text"
            placeholder="Add To Do List Item"
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Difficulty Rating</Form.Label>
          <Form.Control
            defaultValue="1"
            type="range"
            min="1"
            max="5"
            name="difficulty"
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Assigned To</Form.Label>
          <Form.Control
            type="text"
            name="assignee"
            placeholder="Assigned To"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
}

export default TodoForm;
