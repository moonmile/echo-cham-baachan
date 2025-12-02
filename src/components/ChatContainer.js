import React, { useEffect, useRef } from 'react';
import MessageBubble from './MessageBubble';

function ChatContainer({ messages }) {
  const containerRef = useRef(null);

  // 新しいメッセージが追加されたら自動スクロール
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div className="chat-container" ref={containerRef}>
      {messages.length === 0 ? (
        <div className="empty-chat">
          <p>👵 こんにちは！</p>
          <p>何か意見を言ってみてね。</p>
          <p>ばぁちゃんたちが応援してくれるよ！</p>
        </div>
      ) : (
        messages.map((msg, index) => (
          <MessageBubble
            key={index}
            message={msg.text}
            isUser={msg.isUser}
            grandma={msg.grandma}
          />
        ))
      )}
    </div>
  );
}

export default ChatContainer;
