import React from 'react';
import { personalityTypes } from '../data/grandmas';

function Settings({ isOpen, onClose, personalityType, onPersonalityChange }) {
  if (!isOpen) return null;

  return (
    <div className="settings-overlay" onClick={onClose}>
      <div className="settings-modal" onClick={(e) => e.stopPropagation()}>
        <div className="settings-header">
          <h2>⚙️ 設定</h2>
          <button className="close-button" onClick={onClose}>✕</button>
        </div>
        
        <div className="settings-content">
          <h3>ばぁちゃんの性格</h3>
          <p className="settings-description">
            ばぁちゃんたちの反応の仕方を選んでね
          </p>
          
          <div className="personality-options">
            {Object.values(personalityTypes).map((type) => (
              <label 
                key={type.id} 
                className={`personality-option ${personalityType === type.id ? 'selected' : ''}`}
              >
                <input
                  type="radio"
                  name="personality"
                  value={type.id}
                  checked={personalityType === type.id}
                  onChange={(e) => onPersonalityChange(e.target.value)}
                />
                <div className="option-content">
                  <span className="option-name">{type.name}</span>
                  <span className="option-description">{type.description}</span>
                </div>
              </label>
            ))}
          </div>
        </div>

        <div className="settings-footer">
          <button className="save-button" onClick={onClose}>
            保存して閉じる
          </button>
        </div>
      </div>
    </div>
  );
}

export default Settings;
