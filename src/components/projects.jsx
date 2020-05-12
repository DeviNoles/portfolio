import React, { Component } from 'react'

export default class Projects extends Component {
  render() {
    return (
      <div>
      <section className="section">
    <div className="container">
      <h2>Projects</h2>
      <div className="columns is-multiline">
        <div className="column is-one-third" data-aos="zoom-in-up">
        <a href="https://github.com/DeviNoles/swappa">
          <div className="project modal-button" >
            <div className="project-preview">
              <figure className="image is-4by3">
                <img src="images/swappapy.png" />
              </figure>
            </div>
            <div className="project-details">
              <h3>Swappa Python Package</h3>
              <p>A Python wrapper that returns data from Swappa.com</p>
            </div>
          </div>
          </a>
        </div>
        <div className="column is-one-third" data-aos="zoom-in-up">
        <a href="https://github.com/DeviNoles/AlgorithmVisualization">
          <div className="project modal-button">
            <div className="project-preview">
              <figure className="image is-4by3">
                  <img src="images/sorts.png" />
              </figure>
            </div>
            <div className="project-details">
              <h3>Algorithm Visualizer</h3>
              <p>Watch how different sorting algorithms compare.</p>
            </div>
          </div>
          </a>
        </div>
        <div className="column is-one-third" data-aos="zoom-in-up">
        <a href="https://github.com/DeviNoles/Custom_Botnet">
          <div className="project modal-button" >
            <div className="project-preview">
              <figure className="image is-4by3">
                  <img src="images/botnet.png" />
              </figure>
            </div>
            <div className="project-details">
              <h3>Custom Botnet</h3>
              <p>IRC botnet written in Python for automation and controlling my network.</p>
            </div>
          </div>
          </a>
        </div>
        <div className="column is-one-third" data-aos="zoom-in-up">
        <a href="https://github.com/DeviNoles/portfolio">
          <div className="project modal-button" >
            <div className="project-preview">
              <figure className="image is-4by3">
                <img src="images/porty.png" />
              </figure>
            </div>
            <div className="project-details">
              <h3>Portfolio Website</h3>
              <p>A website to show off my projects made with modular React components.</p>
            </div>
          </div>
          </a>
        </div>
      

        <div className="column is-one-third" data-aos="zoom-in-up">
        <a href="https://ldjam.com/events/ludum-dare/46/henry">
          <div className="project modal-button">
            <div className="project-preview">
              <figure className="image is-4by3">
                  <img src="images/ld46.png" />
              </figure>
            </div>
            <div className="project-details">
              <h3>Henry</h3>
              <p>Basic top down shooter made during Ludum Dare 46 Game Jam.</p>
            </div>
          </div>
            </a>
        </div>

        <div className="column is-one-third" data-aos="zoom-in-up">
          <div className="project modal-button">
            <div className="project-preview">
              <figure className="image is-4by3">
                <img src="images/fish.png" />
              </figure>
            </div>
            <div className="project-details">
              <h3>Arma 3 Scripts</h3>
              <p>SQF scripts + other Arma 3 assets I've made, mostly for Arma 3 Reality Life.</p>
            </div>
          </div>
        </div>
        <div className="column is-one-third" data-aos="zoom-in-up">
          <a href="https://github.com/DeviNoles/Puzzalarm">
          <div className="project modal-button">
            <div className="project-preview">
              <figure className="image is-4by3">
                <img src="images/puzzalarm.png" />
              </figure>
            </div>
            <div className="project-details">
              <h3>Puzzalarm</h3>
              <p>Android alarm clock that requires the user to solve a puzzle to silence the device.</p>
            </div>
          </div>
          </a>
        </div>
        <div className="column is-one-third" data-aos="zoom-in-up">
          <div className="project modal-button">
            <div className="project-preview">
              <figure className="image is-4by3">
              <img src="images/ftp.png" />
              </figure>
            </div>
            <div className="project-details">
              <h3>Python Network</h3>
              <p>Transfer Files within a network using sockets in Python</p>
            </div>
          </div>
        </div>
        <div className="column is-one-third" data-aos="zoom-in-up">
          <div className="project modal-button">
            <div className="project-preview">
              <figure className="image is-4by3">
              <img src="url" />
              </figure>
            </div>
            <div className="project-details">
              <h3>Assembler</h3>
              <p>Parse a subset of Python syntax and turn it into an x86-64 assembly program.</p>
            </div>
          </div>
        </div>
        <div className="column is-one-third" data-aos="zoom-in-up">
          <div className="project modal-button">
            <div className="project-preview">
              <figure className="image is-4by3">
                <img src="images/lab.png" />
              </figure>
            </div>
            <div className="project-details">
              <h3>Homelab</h3>
              <p>Repository with information and files about my homelab & networking. </p>
            </div>
          </div>




        </div>
      </div>
    </div>
  </section>
      </div>
    )
  }
}
