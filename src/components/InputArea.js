import React, { useState } from 'react';

function InputArea({ onSend, isLoading }) {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() && !isLoading) {
      onSend(input.trim());
      setInput('');
    }
  };

  return (
    <form className="input-area" onSubmit={handleSubmit}>
      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="あなたの意見を入力してね..."
        disabled={isLoading}
        rows={2}
        onKeyDown={(e) => {
          if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSubmit(e);
          }
        }}
      />
      <button type="submit" disabled={!input.trim() || isLoading}>
        {isLoading ? '送信中...' : '送信'}
      </button>
    </form>
  );
}

export default InputArea;
