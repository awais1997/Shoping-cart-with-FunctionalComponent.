import "./App.css";
import Counters from "./Counters";
import React, { useState } from "react";
import Nav from "./Nav";

const App = () => {
  const [counters, setCounters] = useState([
    {
      id: 1,
      name: "Leather-jacket",
      value: 0,
    },
    {
      id: 2,
      name: "black-pant",
      value: 0,
    },
    {
      id: 3,
      name: "nike-shoes",
      value: 0,
    },
  ]);

  const handleDelete = (id) => {
    const counter = counters.filter((item) => {
      return item.id !== id;
    });
    setCounters({
      counters: counter,
    });
  };

  const handleIncrement = (index) => {
    const tempArr = [...counters];
    tempArr[index].value++;
    setCounters(tempArr);
    console.log({ tempArr });
  };

  const handleReset = () => {
    const Newcounters = counters.map((item) => {
      item.value = 0;
      return item;
    });
    setCounters(Newcounters);
  };
  console.log({ counters });
  return (
    <div className="App">
      <Nav
        totalCounters={
          counters && counters.length > 0 && counters.filter((i) => i.value > 0)
        }
      />
      <Counters
        counters={counters}
        onIncrement={handleIncrement}
        onDelete={handleDelete}
        onReset={handleReset}
      />
    </div>
  );
};

export default App;
