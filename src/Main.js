import { useEffect, useState } from "react";

const Main = () => {
  const [toggle1, setToggle1] = useState(false);
  const [toggle2, setToggle2] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("useEffect1 ran");
  }, []);
  useEffect(() => {
    console.log("useEffect2 ran");
    if (toggle2) {
      console.log("toggle2 is true so this ran");
    }
  }, [toggle2]);

  // useEffect(() => {
  //   setInterval(() => {
  //     console.log(`useEffect3 with interval number ${count} is running`);
  //   }, 1000);
  // }, [count]);

  return (
    <div>
      {console.log("rendered or re-rendered")}
      <h1>Main Component</h1>
      <button
        onClick={() => {
          return setToggle1(!toggle1);
        }}
      >
        Toggle1
      </button>
      <button
        onClick={() => {
          return setToggle2(!toggle2);
        }}
      >
        Toggle2
      </button>
      <button
        onClick={() => {
          return setCount((prevCount) => prevCount + 1);
        }}
      >
        Count
      </button>
    </div>
  );
};

export default Main;
