import shadow from '../assets/shadow.png'

const FooterTop = () => {
    return (
        <div className='w-[1100px] bg-white mx-auto border-2'>
            <div className=''>
                <img className='' src={shadow} alt="" />
                
            </div>
            <div className='-mt-56'>
                <h2 className='text-black text-xl -mt-96 text-center font-semibold'>Subscribe to our Newsletter</h2>
                <p className=' text-gray-400 text-center text-xl'>Get the latest updates and news right in your inbox!</p>
            </div>
            <div className="flex ml-96">
                <div className="">
                  <input
                    type="text"
                    placeholder="username@site.com"
                    className="input input-bordered text-gray-300 mt-3 p-2 join-item" />
                </div>
                <div>
                  <button className="btn btn-primary text-black join-item p-2 border w-[100px] mt-3 bg-orange-300">Subscribe</button>
                </div>
              </div>
            
        </div>
    );
};

export default FooterTop;