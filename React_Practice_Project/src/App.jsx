import { useEffect, useState } from "react";

export default function app() {
  const [advice, setAdvice] = useState("");
  const [count, setCount] = useState(0);

  async function getAdvice() {
    try {
      const res = await fetch(
        `https://api.adviceslip.com/advice?nocache=${Math.random()}`,
      );
      const data = await res.json();
      setAdvice(data.slip.advice);
      setCount((c) => c + 1);
    } catch (error) {
      console.error("Error fetching advice:", error);
    }
  }

  useEffect(function () {
    getAdvice();
  }, []);

  return (
    <div>
      <h1>{advice}</h1>
      <button onClick={getAdvice}>Get Free Advice</button>
      <Message count={count} />
    </div>
  );
}

function Message(props) {
  return (
    <p>
      you have read <strong>{props.count}</strong> pieces of Advice
    </p>
  );
}
