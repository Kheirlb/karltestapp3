import Link from 'next/link';
import Draggable from 'react-draggable';
import Header from '../components/Header';

const Index = () => (
  <div>
    <Header />
    <h1> The Home Page </h1>
    <h2> A special note: </h2>
    <p> Dear Maya, <br/><br/>
        I love you. <br/><br/>
        - Karl</p>
    <h2> Some useful links: </h2>
    <ul >
      <a target="_blank" href="https://itnext.io/building-a-dynamic-controlled-form-in-react-together-794a44ee552c">Dynamic React (Cats)</a><br/>
      <a target="_blank" href="https://blog.logrocket.com/the-best-styling-in-react-tutorial-youve-ever-seen-676f1284b945/">React Styling</a>
      <a target="_blank" href="https://octoprint.org/blog/2018/09/03/safe-remote-access/">OctoPrint Anywhere</a>
    </ul>
  </div>
);

export default Index;
