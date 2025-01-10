import './Home.css';
import './Toolbar.css';

function Home() {
  return (
    <div className="Homepage">
      <header className='Toolbar'>
        <ul>
          <li class="active"><a class="active" href="/">Home</a></li>
          <li><a href="/Help">Help</a></li>
          <li style={{float:"right"}}><a href="/Login">Log in</a></li>
        </ul>
      </header>
      <header className="Content">
        
        <p>
          Welcome to Event Maker
        </p>
        
      </header>
    </div>
  );
}

export default Home;
