import {ChatEngine} from 'react-chat-engine';
import LoginForm from './components/LoginForm'
import ChatFeed from './components/ChatFeed';
import './App.css';

const projectID = '86341aaa-a1b4-4429-beed-f2404f624b5d';
const App = () =>{
    if (!localStorage.getItem('username')) return <LoginForm />;
    return (
        <ChatEngine
      height ="100vh"
      projectID={projectID}
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
      />  
    );
};

export default App;