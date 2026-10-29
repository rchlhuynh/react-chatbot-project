import RobotProfileImage from '../assets/robot.png';
import UserProfileImage from '../assets/user.png';
import './ChatMessage.css'
import dayjs from 'dayjs';

type ChatMessageProps = {
  message: string;
  sender: string;
};


export function ChatMessage({ message, sender} : ChatMessageProps) {
  const time = dayjs().valueOf();
  // const message = props.message;
  // const { message, sender } = props;

  /* 
  if (sender === 'robot') {
    return (
      <div>
        <img src="images/robot.png" width="50"/>
        {message}
    </div>
    );
  }
  */
  return (
    <div className={sender === 'user' 
          ? 'chat-message-user' 
          : 'chat-message-robot' }>
            {sender === 'robot' && (
              <img src={RobotProfileImage}
              className="chat-message-profile"/>)}
      <div className="chat-message-text">
        {message}
        <div className="chat-message-time">{dayjs(time).format('h:mma')}</div>
      </div>
      {sender === 'user' && (
        <img src={UserProfileImage}
        className="chat-message-profile"/>
      )}
    </div>
  );
}

