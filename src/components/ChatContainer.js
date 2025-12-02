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
          <p></p>
          <p>例</p>
          <p>宇宙人はいると思う？</p>
          <p>バナナは木に生えているんだよ🍌</p>
          <p>しゃけの切り身は、北海道でとれるんだよ。</p>
          <p>校長先生が、こっそり金庫にけしごむをためているんだよ。</p>
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
