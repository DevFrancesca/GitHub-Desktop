import React from 'react'
import './Box2.css'
import File from './images/git-file.svg'
import Terminal from './images/git-terminal.svg'
import Org from './images/git-organization.svg'

const Box2 = () => {
  return (
    <div className='Box2Wrap'>
      <div className="box1">
        <img src={File} alt="" />
        <h5>Expanded image diff support</h5>
        <p>Easily compare changed images. See the before and after, swipe or fade between the two, or look at just the changed parts.</p>
      </div>

      <div className="box2">
        <img src={Terminal} alt="" />
        <h5>Extensive editor & shell integrations</h5>
        <p>Open your favorite editor or shell from the app, or jump back to GitHub Desktop from your shell. GitHub Desktop is your springboard for work.</p>
      </div>

      <div className="box3">
        <img src={Org} alt="" />
        <h5>Community supported</h5>
        <p>GitHub Desktop is <span>open source</span> now! Check out our roadmap, contribute, and help us make collaboration even easier.</p>
      </div>

    </div>
  )
}

export default Box2
