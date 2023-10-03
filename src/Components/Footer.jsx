import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="top">
        <div>
            <h1>Tripii</h1>
            <p>Choose your favorite destination</p>
        </div>
        <div>
            <a href="/"><i class="fa-brands fa-facebook"></i></a>
            <a href="/"><i class="fa-brands fa-square-instagram"></i></a>
            <a href="/"><i class="fa-brands fa-square-behance"></i></a>
            <a href="/"><i class="fa-brands fa-square-x-twitter"></i></a>
        </div>
      </div>

      <div className="bottom">
        <div>
            <h4>Projects</h4>
            <a href="/">Changelog</a>
            <a href="/">Status</a>
            <a href="/">License</a>
            <a href="/">All Versions</a>
        </div>
        <div>
            <h4>Community</h4>
            <a href="/">Changelog</a>
            <a href="/">Status</a>
            <a href="/">License</a>
            <a href="/">All Versions</a>
        </div>
        <div>
            <h4>Help</h4>
            <a href="/">Changelog</a>
            <a href="/">Status</a>
            <a href="/">License</a>
            <a href="/">All Versions</a>
        </div>
        <div>
            <h4>Other</h4>
            <a href="/">Changelog</a>
            <a href="/">Status</a>
            <a href="/">License</a>
            <a href="/">All Versions</a>
        </div>
      </div>
    </div>
  )
}

export default Footer
