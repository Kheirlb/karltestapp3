import Link from 'next/link';
import Draggable from 'react-draggable';


const Index = () => (
  <div>
    <Link href="/about" >
      <button> Go to About Page </button>
    </Link>
    <p>Hello Next.js</p>
  </div>
);

export default Index;
