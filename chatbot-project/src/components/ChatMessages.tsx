import { useRef, useEffect } from 'react'
import { ChatMessage } from './ChatMessage'
import './ChatMessages.css'

type ChatMessagesProps = {
  chatMessages: {
    message: string;
    sender: string;
    id: string;
  }[];
};

function ChatMessages({ chatMessages }: ChatMessagesProps) {
  const chatMessagesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const containerElem = 
    chatMessagesRef.current;
    if (containerElem) {
      containerElem.scrollTop = containerElem.
      scrollHeight;
      // scroll all the way down to bottom
    }
  }, [chatMessages]);


  return (
    <div className="chat-messages-container"
      ref={chatMessagesRef}>
        {chatMessages.map((chatMessage) => {
          return (
            <ChatMessage
              message = {chatMessage.message}
              sender = {chatMessage.sender}
              key = {chatMessage.id}
            />
          )

        })}
        </div>
    );
}

export default ChatMessages;