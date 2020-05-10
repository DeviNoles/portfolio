import React, { Component } from 'react'

export default class Sidebar extends Component {
  render() {
    return (
      <div>
        <div>
          <nav href="#navbar" className="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i /></nav>
          <aside id="colorlib-aside" className="border js-fullheight">
            <div className="text-center">

              <h1 id="colorlib-logo"><a href="index.html">Devin Moure</a></h1>
              <span className="email"><i className="icon-mail"></i> devin.moure@gmail.com</span>
            </div>


            <nav id="colorlib-main-menu">
              <ul>

                <li><a href="https://github.com/Devinoles" target="_blank" rel="noopener noreferrer"><i className="icon-github"></i></a></li>
                <li><a href="https://www.linkedin.com/in/devin-moure/" arget="_blank" rel="noopener noreferrer"><i className="icon-linkedin2"></i></a></li>

              </ul>
            </nav>
            <div className="colorlib-footer" id="foot">
              <p><small>
                  Powered by Red Bull 🐂<br></br>
                  Inspiration from <a href="https://dribbble.com" target="_blank" rel="noopener noreferrer"><div id="dribble">Dribbble</div></a> & <a href="https://colorlib.com" target="_blank" rel="noopener noreferrer"><div id="dribble">colorlib</div></a>
              </small></p>

            </div>
          </aside>
        </div>
      </div>
    )
  }
}
