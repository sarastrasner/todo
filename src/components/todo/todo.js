import React, { useEffect, useState } from 'react';
import TodoForm from './form.js';
import TodoList from './list.js';
import './todo.scss';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

function ToDo(props) {
  const [count, updateCount] = useState(0);
  const [list, updateList] = useState([
    {
      _id: 1,
      complete: false,
      text: 'Clean the Kitchen',
      difficulty: 3,
      assignee: 'Person A',
    },
    {
      _id: 2,
      complete: false,
      text: 'Do the Laundry',
      difficulty: 2,
      assignee: 'Person A',
    },
    {
      _id: 3,
      complete: false,
      text: 'Walk the Dog',
      difficulty: 4,
      assignee: 'Person B',
    },
    {
      _id: 4,
      complete: true,
      text: 'Do Homework',
      difficulty: 3,
      assignee: 'Person C',
    },
    {
      _id: 5,
      complete: false,
      text: 'Take a Nap',
      difficulty: 1,
      assignee: 'Person B',
    },
  ]);

  const addItem = item => {
    console.log(item);
    item._id = Math.random();
    item.complete = false;
    updateList([...list, item]);
  };

  const toggleComplete = id => {
    let item = list.filter(i => i._id === id)[0] || {};
    if (item._id) {
      item.complete = !item.complete;
      updateList(
        list.map(listItem => (listItem._id === item._id ? item : listItem))
      );
    }
  };

  useEffect(() => {
    updateCount(list.filter(item => !item.complete).length);
  }, [list]);

  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Navbar.Brand>Home</Navbar.Brand>
      </Navbar>
      <br></br>
      <Container>
        <Navbar bg="primary" variant="dark">
          <Navbar.Brand>To Do List Manager ({count})</Navbar.Brand>
        </Navbar>
      </Container>
      <section className="todo">
        <div>
          <TodoForm handleSubmit={addItem} />
        </div>

        <div>
          <TodoList list={list} handleComplete={toggleComplete} />
        </div>
      </section>
    </>
  );
}

export default ToDo;
