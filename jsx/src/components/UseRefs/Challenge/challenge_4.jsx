import { useState, useRef } from 'react';

export default function Chat() {
  const [text, setText] = useState('');
  const currentText = useRef(null)

  function handleSend() {
    clearTimeout(currentText.current)
    currentText.current = setTimeout(() => {
      alert('Sending: ' + text);
    }, 3000);
  }

  return (
    <>
      <input
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <button
        onClick={handleSend}>
        Send
      </button>
    </>
  );
}
