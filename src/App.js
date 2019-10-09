import React, { useState, useCallback } from 'react';
import Goose from './Goose';

function App() {
  const [honk, setHonk] = useState(false);
  const startHonk = useCallback(() => setHonk(true), [setHonk])
  const stopHonk = useCallback(() => setHonk(false), [setHonk])

  return (<div className="wrapper">
    <main
    className="main"
      onMouseDown={startHonk}
      onPointerDown={startHonk}
      onMouseUp={stopHonk}
      onPointerUp={stopHonk}
      onMouseLeave={stopHonk}
      onPointerLeave={stopHonk}
    >
      <Goose honk={honk} className="goose" />
    </main>
    <footer className="footer">
      I ❤ <a href="https://goose.game/">Untitled Goose Game</a> so make this.
    </footer>
  </div>
  );
}

export default App;
