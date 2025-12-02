import React from 'react';

function GrandmaAvatar({ emoji, name, color }) {
  return (
    <div className="grandma-avatar" title={name}>
      <div 
        className="avatar-circle"
        style={{ backgroundColor: color }}
      >
        <span className="avatar-emoji">{emoji}</span>
      </div>
    </div>
  );
}

export default GrandmaAvatar;
