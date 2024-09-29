import React from 'react'

const Footer = () => {
  return (
    <>
      <footer className='footer bottom-0 bg-base-200 text-base-content p-10 max-w-screen-2xl container mx-auto md:px-20 px-4 mt-16'>
          <nav>
            <h6 className="footer-title">Services</h6>
            <a className="link link-hover">Explore Books</a>
            <a className="link link-hover">Downloads</a>
          </nav>
          <nav>
            <h6 className="footer-title">Company</h6>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Advertisement</a>
          </nav>
          <nav>
            <h6 className="footer-title">Legal</h6>
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Privacy policy</a>
          </nav>
          <form>
            <h6 className="footer-title">Newsletter</h6>
            <fieldset className="form-control w-80">
              <label className="label">
                <span className="label-text">Enter your email address</span>
              </label>
              <div className="join">
                <input
                  type="text"
                  placeholder="username@site.com"
                  className="input input-bordered join-item" />
                <button className="btn btn-primary join-item">Subscribe</button>
              </div>
            </fieldset>
          </form>
      </footer>
    </>
  )
}

export default Footer