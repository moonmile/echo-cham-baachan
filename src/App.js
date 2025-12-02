import React, { useState } from 'react';
import axios from 'axios';
import './App.css';
import ChatContainer from './components/ChatContainer';
import InputArea from './components/InputArea';
import Settings from './components/Settings';
import { grandmas, getSystemPrompt, defaultPersonalityType } from './data/grandmas';

function App() {
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [personalityType, setPersonalityType] = useState(defaultPersonalityType);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  // ランダムな遅延を生成（ばぁちゃんの返答を自然にする）
  const getRandomDelay = () => Math.random() * 2000 + 500; // 0.5秒〜2.5秒

  // ばぁちゃんからの返答を取得
  const getGrandmaResponse = async (userMessage, grandmaIndex) => {
    const grandma = grandmas[grandmaIndex];
    const systemPrompt = getSystemPrompt(grandmaIndex, personalityType);

    try {
      const response = await axios.post('/api/chat', {
        message: userMessage,
        systemPrompt: systemPrompt,
      });

      return {
        text: response.data.reply,
        isUser: false,
        grandma: grandma,
      };
    } catch (error) {
      console.error('API error:', error);
      // エラー時はデフォルトの返答
      const fallbackReplies = [
        'そうじゃそうじゃ、いいこと言うねぇ〜',
        'うんうん、その通りじゃよ！',
        'ばぁちゃんも同じこと思っとったんじゃ',
        'さすがじゃのう、賢いのう',
        'よく言った！ばぁちゃん嬉しいわ',
      ];
      return {
        text: fallbackReplies[grandmaIndex],
        isUser: false,
        grandma: grandma,
      };
    }
  };

  // メッセージ送信処理
  const handleSend = async (userMessage) => {
    // ユーザーのメッセージを追加
    const userMsg = { text: userMessage, isUser: true, grandma: null };
    setMessages((prev) => [...prev, userMsg]);
    setIsLoading(true);

    // 5人のばぁちゃんからランダムな順序で返答
    const shuffledIndices = [0, 1, 2, 3, 4].sort(() => Math.random() - 0.5);

    for (const index of shuffledIndices) {
      await new Promise((resolve) => setTimeout(resolve, getRandomDelay()));
      const response = await getGrandmaResponse(userMessage, index);
      setMessages((prev) => [...prev, response]);
    }

    setIsLoading(false);
  };

  // チャットをクリア
  const handleClear = () => {
    setMessages([]);
  };

  return (
    <div className="App">
      <header className="app-header">
        <h1>👵 エコーチェンばぁちゃん</h1>
        <div className="header-buttons">
          <button 
            className="clear-button" 
            onClick={handleClear}
            disabled={messages.length === 0}
          >
            🗑️ クリア
          </button>
          <button 
            className="settings-button" 
            onClick={() => setIsSettingsOpen(true)}
          >
            ⚙️ 設定
          </button>
        </div>
      </header>

      <main className="app-main">
        <ChatContainer messages={messages} />
        <InputArea onSend={handleSend} isLoading={isLoading} />
      </main>

      <footer className="app-footer">
        <p>
          💡 <strong>エコーチェンバー現象</strong>とは？
          <br />
          自分と同じ意見ばかり聞こえてきて、自分の意見が正しいと思い込んでしまう現象のことだよ。
        </p>
      </footer>

      <Settings
        isOpen={isSettingsOpen}
        onClose={() => setIsSettingsOpen(false)}
        personalityType={personalityType}
        onPersonalityChange={setPersonalityType}
      />
    </div>
  );
}

export default App;
