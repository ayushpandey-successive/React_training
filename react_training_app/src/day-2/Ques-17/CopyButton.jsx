import React,{useState} from 'react';
import useClipboard from './useClipboard'; // Import your custom hook

function CopyButton() {
  const { copiedText, copyToClipboard } = useClipboard();
  const [text,setText] =useState("")

  return (
    <div>
      <input type="text" onChange={(e)=> setText(e.target.value)} />
      <button onClick={() => copyToClipboard(text)}>
        {copiedText ? 'Copied!' : 'Copy to Clipboard'}
      </button>
    </div>
  );
}

export default CopyButton;