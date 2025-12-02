import React from 'react';
import GrandmaAvatar from './GrandmaAvatar';

function MessageBubble({ message, isUser, grandma }) {
  if (isUser) {
    return (
      <div className="message-row user-message-row">
        <div className="message-bubble user-bubble">
          <p>{message}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="message-row grandma-message-row">
      <GrandmaAvatar 
        emoji={grandma.emoji} 
        name={grandma.name}
        color={grandma.color}
      />
      <div className="message-content">
        <span className="grandma-name">{grandma.name}</span>
        <div className="message-bubble grandma-bubble">
          <p>{message}</p>
        </div>
      </div>
    </div>
  );
}

export default MessageBubble;
