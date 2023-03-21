import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  return (
    <div className="App">
      <ExternalUsers></ExternalUsers>
      {/* <Counter></Counter>
      {products.map((product) => (
        <Product
          name={product.name}
          price={product.price}
          color={product.color}
        ></Product>
      ))}
      <Product name="Nissan"></Product>
      <Product name="iphone" price="50000"></Product>
      <Product name="MacBook" price="300000"></Product>
      <Product name="AppleWatch" price="10000"></Product> */}
    </div>
  );
}
const products = [
  { name: "BMW", price: 100000000, color: "white" },
  { name: "Nissan", price: 880000000, color: "red" },
  { name: "Marchidise", price: 40000000, color: "yellow" },
  { name: "Fararry", price: 150000000, color: "black" },
  { name: "Lemogrini", price: 500000000, color: "lemon" },
  { name: "Suzoky", price: 20000000, color: "ash" },
];

function Counter() {
  const [count, setCount] = useState(0);
  const increaseCount = () => setCount(count + 1);
  const decreaseCount = () => setCount(count - 1);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={decreaseCount}>Decrease</button>
      <button onClick={increaseCount}>Increase</button>
    </div>
  );
}

function Product(props) {
  return (
    <div className="product">
      <h3>Name: {props.name}</h3>
      <p>Price: {props.price}</p>
      <p>Color: {props.color}</p>
    </div>
  );
}

function ExternalUsers() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div>
      <h2>External Users</h2>
      <p>{users.length}</p>
      {users.map((user) => (
        <User name={user.name} email={user.email}></User>
      ))}
    </div>
  );
}

function User(props) {
  return (
    <div className="users">
      <h3>Name: {props.name}</h3>
      <p>Email: {props.email}</p>
    </div>
  );
}

export default App;
