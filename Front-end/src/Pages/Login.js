import './Login.css';
import './Toolbar.css';

function Login() {
  return (
    <><div className="Help">
          <header className='Toolbar'>
              <ul>
                  <li><a href="/">Home</a></li>
                  <li><a href="/Help">Help</a></li>
                  <li style={{ float: "right" }} class="active"><a href="/Login">Log in</a></li>
              </ul>
          </header>
      </div>
      <div className="Login">
        <header>
            <form>
                <p>Username</p>
                <input type="text"></input>
                <p>Password</p>
                <input type="password"></input>
                <p><a href="/">Sign up</a></p>
            </form>
            

        </header>
      </div></>
  );
}

export default Login;
