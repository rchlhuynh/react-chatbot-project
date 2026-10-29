import { useState, useEffect } from 'react'
import { ChatInput } from './components/ChatInput';
import { Chatbot } from 'supersimpledev';
import ChatMessages from './components/ChatMessages';
import robotLogo from './assets/robot.png';
import './App.css'

function App() {
  
  useEffect(() => {
    localStorage.setItem('messages', JSON.stringify(chatMessages))
  })

  useEffect(() => {
    Chatbot.addResponses({
      'goodbye': 'Goodbye. Have a good day!',
      'give me a unique id': function() {
        return `Sure! Here's a unique ID: ${crypto.randomUUID()}`;
      }
    });
  }, [])

  const [chatMessages, setChatMessages] = useState(
    JSON.parse(localStorage.getItem('messages') || '[]')
  ||  [{
    message: 'hello chatbot',
    sender: 'user',
    id: 'id1'
  }, {
    message: 'Hello! How can I help you?',
    sender: 'robot',
    id: 'id2'
  }, {
    message: 'can you get me todays date?',
    sender: 'user',
    id: 'id3'
  }, {
    message: 'Today is August 5',
    sender: 'robot',
    id: 'id4'
  }])
        // const [chatMessages, setChatMessages] = array;
        // const chatMessages = array[0];
        // const setChatMessages = array[1];
  const title = `${chatMessages.length} Messages`;
  return (
    <>
    <link rel="icon" type="image/svg+xml" href={robotLogo} />
    <title>{title}</title>
    <div className="app-container">
        <ChatMessages 
          chatMessages={chatMessages}
        />
        <ChatInput 
          chatMessages={chatMessages}
          setChatMessages={setChatMessages}
        />
    </div>
    </>
    
  );
}

export default App
