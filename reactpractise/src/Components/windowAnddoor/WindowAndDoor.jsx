import React, { useState } from 'react';

const WindowsAndDoors = () => {
  const [windows, setWindows] = useState([]);
  const [drawing, setDrawing] = useState(false);
  const [startPosition, setStartPosition] = useState({ x: 0, y: 0 });

  const handleMouseDown = (event) => {
    setDrawing(true);
    const { clientX, clientY } = event;
    setStartPosition({ x: clientX, y: clientY });
  };

  const handleMouseMove = (event) => {
    if (!drawing) return;

    const { clientX, clientY } = event;
    const width = clientX - startPosition.x;
    const height = clientY - startPosition.y;

    if (width > 0 && height > 0) {
      setWindows([...windows, { x: startPosition.x, y: startPosition.y, width, height }]);
    }
  };

  const handleMouseUp = () => {
    setDrawing(false);
  };

  return (
    <div
      style={{ width: '100%', height: '100%' }}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >hhhggg
      {/* Render the windows */}
      {windows.map((window, index) => (
        <div
          key={index}
          style={{
            position: 'absolute',
            left: window.x,
            top: window.y,
            width: window.width,
            height: window.height,
            border: '5px solid black',
            backgroundColor: 'blue',
            resize: 'both', // Allow resizing
            overflow: 'auto', // Enable scrollbars if the content overflows
          }}
        />
      ))}
    </div>
  );
};

export default WindowsAndDoors;
