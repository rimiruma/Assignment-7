import footer from'../assets/footer.png'

const Footer = () => {
  return (
    <div className="bg-black py-20 w-[1280px] mx-auto">
      <div className='flex justify-center'>
        <img src={footer} alt="" />
      </div>
      <footer className="footer flex justify-between text-base-content p-10">
        <nav className="text-white">
          <h6 className="footer-title">About Us</h6>
          <p className="text-gray-400">We are a passionate team <br></br> dedicated to providing the best <br></br> services to our customers.</p>
        </nav>
        <nav className="text-white">
          <h6 className="footer-title text-white">Quick Links</h6>
          <li className="text-gray-400">Home</li>
          <li className="text-gray-400">Services</li>
          <li className="text-gray-400">About</li>
          <li className="text-gray-400">Contact</li>
        </nav>
        <form>
          <h6 className="footer-title">Newsletter</h6>
          <fieldset className="form-control w-80">
            <label className="label text-white">
              <div>
                <h1>Subscribe</h1>
                <p className="text-gray-400">Subscribe to our newsletter for the <br></br> latest updates.</p>
              </div>
            </label>
            <div className="join">
              <div className="flex">
                <div className="">
                  <input
                    type="text"
                    placeholder="username@site.com"
                    className="input input-bordered mt-3 p-2 join-item" />
                </div>
                <div>
                  <button className="btn btn-primary join-item p-2 border w-[100px] mt-3 bg-orange-300">Subscribe</button>
                </div>
              </div>
            </div>
          </fieldset>
        </form>
      </footer>
      <div>
        <p className="text-center text-gray-300">@2024 Your Company All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;