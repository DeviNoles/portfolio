import React, { Component } from 'react'

export default class Introduction extends Component {

  componentDidMount(){
    var heroSubtitle = document.getElementById('hero-subtitle');


    var subtitleText = [
      'Developer',
      'Modder',
      'Student',
      'Entrepreneur',
      'Engineer',
      'Runner',
      'Creative',
      'Designer',
      'Problem Solver',
      'Programmer',
      'Cisco Certified'
    ]

    var subtitleTextIndex = 0

    var isClearing = true
    var newText = ''

    function updateSubtitle() {
      var text = heroSubtitle.innerHTML

      if (isClearing) {
        // Clear off text
        if (text !== '|') {
          var updatedText = text.substring(0, text.length - 1)

          if (updatedText === '') {
            updatedText = '|';
            heroSubtitle.innerHTML = updatedText

            setTimeout(updateSubtitle, 1500)
          } else {
            heroSubtitle.innerHTML = updatedText

            setTimeout(updateSubtitle, 75)
          }
        } else {
          // Makes sure that the new subtitle text is unique
          var newSubtitleTextIndex = subtitleTextIndex

          while (newSubtitleTextIndex === subtitleTextIndex) {
            newSubtitleTextIndex = Math.floor(Math.random() * subtitleText.length)
          }

          subtitleTextIndex = newSubtitleTextIndex
          newText = subtitleText[newSubtitleTextIndex]
          isClearing = false

          setTimeout(updateSubtitle, 75)
        }
      } else {
        // Add text back to our subtitle
        if (text !== newText) {
          // Add characters back to our subtitle
          if (text === '|') {
            heroSubtitle.innerHTML = newText[0]
          } else {
            heroSubtitle.innerHTML = newText.substring(0, text.length + 1)
          }

          setTimeout(updateSubtitle, 75)
        } else {
          // Text is complete; set state so we clear text on next call for updateSubtitle
          isClearing = true
          setTimeout(updateSubtitle, 1500)
        }
      }
    }

    setTimeout(updateSubtitle, 1500)
  }
  render() {
    // Controls hero header type effect


    return (
      <div>
      <section className="hero is-dark">
          <div className="hero-body">
            <div className="container">
              <div data-aos="zoom-in" data-aos-duration={1000}>
                <h1 className="title" id="hero-title">Hi! I'm Devin</h1>
                <h2 className="subtitle" id="hero-subtitle">Developer</h2>
              </div>
            </div>
          </div>

        </section>

      </div>
    )
  }
}
