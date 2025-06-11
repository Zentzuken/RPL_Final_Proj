import React, { useState, useEffect } from 'react';
import { defaultLevel } from '@model/level';

export default function LevelManager() {
  const [level, setLevel] = useState(defaultLevel);

  useEffect(() => {
    fetch('http://localhost:3000/level')
      .then((res) => res.json())
      .then((data) => setLevel(data))
      .catch(console.error);
  }, []);

  return (
    <div>
      <h2>Level Info</h2>
      <p><strong>Name:</strong> {level.name}</p>
      <p><strong>Size:</strong> {level.width} x {level.height}</p>
    </div>
  );
}
