import React from 'react';

const ListofPlayers = () => {
  const players = [
    { name: 'Virat Kohli', score: 85 },
    { name: 'Rohit Sharma', score: 95 },
    { name: 'Shikhar Dhawan', score: 65 },
    { name: 'KL Rahul', score: 78 },
    { name: 'Hardik Pandya', score: 59 },
    { name: 'Ravindra Jadeja', score: 88 },
    { name: 'MS Dhoni', score: 50 },
    { name: 'Jasprit Bumrah', score: 73 },
    { name: 'Bhuvneshwar Kumar', score: 66 },
    { name: 'Yuzvendra Chahal', score: 71 },
    { name: 'Rishabh Pant', score: 69 },
  ];

  const lowScorers = players.filter(player => player.score < 70);

  return (
    <div>
      <h2>All Players</h2>
      <ul>
        {players.map((player, index) => (
          <li key={index}>{player.name} - {player.score}</li>
        ))}
      </ul>

      <h2>Players with Score below 70</h2>
      <ul>
        {lowScorers.map((player, index) => (
          <li key={index}>{player.name} - {player.score}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListofPlayers;
