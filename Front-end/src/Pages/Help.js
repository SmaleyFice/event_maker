import './Help.css';
import './Toolbar.css';

function Help() {
  return (
    <div className="Help">
      <header className='Toolbar'>
        <ul>
          <li><a href="/">Home</a></li>
          <li class="active"><a href="/Help">Help</a></li>
          <li style={{float:"right"}}><a href="/Login">Log in</a></li>
        </ul>
      </header>
      <header className="Content">
        
        <p>
          Welcome to HelpPage
        </p>
        
      </header>
    </div>
  );
}

export default Help;
