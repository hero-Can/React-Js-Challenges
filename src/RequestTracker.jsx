import { useState } from "react";

export default function RequestTracker() {
  const [pending, setPending] = useState(0);
  const [completed, setCompleted] = useState(0);

  async function handleClick() {
    setPending((p) => {
      return p + 1;
    });
    await delay(3000);

    setPending((p) => {
      return p - 1;
    });

    setCompleted((c) => {
      return c + 1;
    });
  }

  return (
    <>
      <h1 className="text-3xl font-bold underline bg-lime-500 p-5 m-5 text-amber-50">
        Fix a request counter
      </h1>
      <h3>Pending: {pending}</h3>
      <h3>Completed: {completed}</h3>
      <button
        className="ml-2 bg-gray-400 hover:bg-gray-600 text-white px-3 py-1 rounded-md text-sm font-semibold transition duration-200 my-1"
        onClick={handleClick}
      >
        Buy
      </button>
    </>
  );
}

function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}
