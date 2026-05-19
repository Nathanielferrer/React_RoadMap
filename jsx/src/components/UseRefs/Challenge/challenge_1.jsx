import { useState, useRef } from 'react';

export default function Chat() {
    const [text, setText] = useState('');
    const [isSending, setIsSending] = useState(false);
    const timeoutID = useRef(null); //Adding useRef to store/remember the timeout ID 

    function handleSend() {
        setIsSending(true);
        timeoutID.current = setTimeout(() => { //Storing the timeout ID in the ref
            alert('Sent! ' + text);
            setIsSending(false);
        }, 3000);
    }

    function handleUndo() {
        setIsSending(false);
        clearTimeout(timeoutID.current);    //Clearing the setTimeout using clearTimeout and the stored timeout ID
    }

    return (
        <>
            <input
                disabled={isSending}
                value={text}
                onChange={e => setText(e.target.value)}
            />
            <button
                disabled={isSending} //Disabling the button when isSending is true
                onClick={handleSend}>
                {isSending ? 'Sending...' : 'Send'}
            </button>
            {isSending &&
                <button onClick={handleUndo}>
                    Undo
                </button>
            }
        </>
    );
}
