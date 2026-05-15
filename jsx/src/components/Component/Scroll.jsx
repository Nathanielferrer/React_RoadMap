import React from "react";
import "./Scroll.css";

class MessageList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            messages: [
                "Message 1",
                "Message 2",
                "Message 3",
                "Message 4",
                "Message 5",
                "Message 6",
                "Message 7",
                "Message 8"
            ]
        };

        this.listRef = React.createRef();
    }

    addMessageAtTop = () => {
        this.setState((prevState) => ({
            messages: [
                `New Message ${prevState.messages.length + 1}`,
                ...prevState.messages
            ]
        }));
    };

    getSnapshotBeforeUpdate(prevProps, prevState) {
        const list = this.listRef.current;

        if (prevState.messages.length < this.state.messages.length) {
            return list.scrollHeight - list.scrollTop;
        }

        return null;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        const list = this.listRef.current;

        if (snapshot !== null) {
            list.scrollTop = list.scrollHeight - snapshot;
        }
    }

    render() {
        return (
            <div className="message-page">
                <button className="message-button" onClick={this.addMessageAtTop}>
                    Add message at top
                </button>

                <div className="message-list" ref={this.listRef}>
                    {this.state.messages.map((message, index) => (
                        <div className="message-item" key={index}>
                            {message}
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

export default MessageList;