import React from 'react'
import Header from './Header'
import './Git.css'
import Box from './Box'
import Pull from './images/git-pull.png'
import Auth from './images/git-author.png'
import Branch from './images/git-branch.png'
import Syntax from './images/git-syntax.png'
import Box2 from './Box2'
import Button from './Button'


const Git = () => {
  
  return (
    <div className='wrap'>
      <Header/>
      <div className="hub">
        <h1>GitHub Desktop</h1>
        <p>Focus on what matters instead of fighting with Git. Whether you're new to Git or a seasoned user, <br/>
        GitHub Desktop simplifies your development workflow.</p>
        <button>Download for Windows (64bit)</button>
      </div>

      <div className="sectionTwo">
        <div className="two1">
            <h5>Feeling brave?</h5>
            <p>Try new features in the <span> <img src="https://desktop.github.com/images/octicons/beaker.svg" alt="" />
            Beta <br/>Channel</span> before they're released.</p>
        </div>
        <div className="two2">
            <h5>Prefer the MSI?</h5>
            <p>Download for <span> Windows (MSI)</span></p>
        </div>
        <div className="two3">
            <h5>macOS?</h5>
            <p>Download for <span> macOS</span></p>
        </div>
      </div>

      <div className="sectionThree">
        <p>By downloading, you agree to the <span> Open Source Applications Terms.</span></p>
      </div>

      <div className="sectionFour">
        <img src={Pull} alt="" />
      </div>
      
      <Box image={Auth} heading= "Attribute commits with collaborators easily" p= "Quickly add co-authors to your commit. Great for pairing and excellent for sending a little love/credit to that special someone who helped fix that gnarly bug of yours. See the attribution on the history page, undo an accidental attribution, and" sp= " see the co-authors on github.com"/>
      <Box image={Branch} just= "row-reverse" heading= "Checkout branches with pull requests and view CI statuses" p= "See all open pull requests for your repositories and check them out as if they were a local branch, even if they're from upstream branches or forks. See which pull requests pass commit status checks, too." />
      <Box image={Syntax} heading= "Syntax highlighted diffs" p= "The new GitHub Desktop supports syntax highlighting when viewing diffs for a variety of different languages" />

      <Box2/>
      <Button/>
      <div className="sectionFive">
        <div className="line"></div>
      </div>

      <div className="sectionSix">
        <div className="up">
          <nav>Terms</nav>
          <nav> Privacy Policy</nav>
          <nav> EULA</nav>
          <nav> Release Notes</nav>
        </div>
        <div className="down">
          <nav>© 2023 GitHub,</nav>
          <nav>Inc.</nav>
          <nav>All rights reserved.</nav>
        </div>
      </div>
    </div>
  )
}

export default Git
