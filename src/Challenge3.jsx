import { useState } from 'react';

export default function Challenge3() {
  const [player, setPlayer] = useState({
    firstName: 'Ranjani',
    lastName: 'Shettar',
    score: 10,
  });

  function handlePlusClick() {
    setPlayer({
        ...player,
        score: player.score + 1 ,
      });
  }

  function handleFirstNameChange(e) {
    setPlayer({
      ...player,
      firstName: e.target.value,
    });
  }

  function handleLastNameChange(e) {
    setPlayer({
        ...player,
      lastName: e.target.value
    });
  }

  return (
    <>
          <h1 className="my-5 text-3xl font-bold underline bg-lime-400 p-5">
          Fix incorrect state updates </h1>
      <label>
        Score: <b>{player.score}</b>
        {' '}
        <button className='bg-blue-300 border-2 hover:bg-blue-500' onClick={handlePlusClick}>
          +1
        </button>
      </label>
      <br />
      <br />
      <label>
        First name:
        <input
        className='border-2'
          value={player.firstName}
          onChange={handleFirstNameChange}
        />
      </label>
      <br />
      <br />
      <label>
        Last name:
        <input
          className='border-2'  
          value={player.lastName}
          onChange={handleLastNameChange}
        />
      </label>
    </>
  );
}
