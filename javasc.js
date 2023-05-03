import React from 'react';
import './style.css';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));

function Navigation(props) {
  return (
    <nav>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>
  );
}

function Header(props) {
  return (
    <header>
      <img src="2.png" alt="Person" max-width="100%" height="150px" />
      <h2>Video Conferencing</h2>
    </header>
  );
}

function Links(props) {
  return (
    <div>
      <h2>Have a Nice Meet!</h2>
      <p>Connect anyone with the platforms below</p>
      <div className="links-container">
        <a href="hi-1.html" className="w3-button w3-hover-blue w3-large w3-black" style={{width: '350px'}} target="_blank">View all possibilities</a>
        <a href="hi-2.html" className="w3-button w3-hover-blue w3-large w3-black" style={{width: '350px'}} target="_blank">Why this?</a>
        <a href="hi-3.html" className="w3-button w3-hover-blue w3-large w3-black" style={{width: '350px'}} target="_blank">View our history!</a>
      </div>
      <div className="social-media-icons">
        <i className="fa fa-facebook"></i>
        <i className="fa fa-instagram"></i>
        <i className="fa fa-linkedin"></i>
      </div>
    </div>
  );
}

function Contact(props) {
  return (
    <div className="contact-section">
      <h5>Get in touch.</h5>
      <div className="contact-details">
        <div className="contact-info">
          <i className="fa fa-map-marker"></i> London, UK<br />
          <i className="fa fa-phone"></i> Phone: +44 151515<br />
          <i className="fa fa-envelope"></i> Email: mail@mail.com<br />
        </div>
      </div>
    </div>
  );
}

function Footer(props) {
  return (
    <footer>
      <p>&copy; 2023 ConferLive</p>
    </footer>
  );
}

function App(props) {
  return (
    <div className="container">
      <Navigation />
      <Header />
      <Links />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

