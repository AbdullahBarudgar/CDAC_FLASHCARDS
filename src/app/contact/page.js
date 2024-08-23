import Link from "next/link";


 const Contact =() => {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="container mx-auto p-8">
          <div className="bg-gray-100 shadow-lg rounded-lg flex">
            <div className="w-full lg:w-1/2 p-8">
              <h2 className="text-2xl text-gray-900 font-bold mb-6">Get in touch</h2>
              <p className="text-gray-600 mb-8">
                Proin volutpat consequat porttitor cras nullam gravida at. Orci molestie a eu arcu. Sed ut tincidunt integer elementum id sem. Arcu sed malesuada et magna.
              </p>
              <div className="flex items-center mb-4">
                <svg className="w-6 h-6 text-gray-400 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 11c3.866 0 7-3.134 7-7S15.866 1 12 1 5 4.134 5 8s3.134 7 7 7zm0 0v12"></path>
                </svg>
                <div>
                  <p className="text-gray-600">545 Mavis Island</p>
                  <p className="text-gray-600">Chicago, IL 99191</p>
                </div>
              </div>
              <div className="flex items-center mb-4">
                <svg className="w-6 h-6 text-gray-400 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M22 12h-5M16 6h6M18 18h4M10 11l2 2m0-2l-2 2M6 12l2 2m0-2L6 14m12 6H6m12-12H6"></path>
                </svg>
                <div>
                  <p className="text-gray-600">+1 (555) 234-5678</p>
                </div>
              </div>
              <div className="flex items-center mb-4">
                <svg className="w-6 h-6 text-gray-400 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16 2v6h6"></path>
                </svg>
                <div>
                  <p className="text-gray-600">hello@example.com</p>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2 p-8 bg-white">
              <form>
                <div className="flex mb-4">
                  <div className="w-1/2 mr-2">
                    <label className="block text-gray-600 text-sm font-bold mb-2" htmlFor="firstName">
                      First name
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="firstName" type="text" placeholder="First name" />
                  </div>
                  <div className="w-1/2 ml-2">
                    <label className="block text-gray-600 text-sm font-bold mb-2" htmlFor="lastName">
                      Last name
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="lastName" type="text" placeholder="Last name" />
                  </div>
                </div>
                <div className="mb-4">
                  <label className="block text-gray-600 text-sm font-bold mb-2" htmlFor="email">
                    Email
                  </label>
                  <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Email" />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-600 text-sm font-bold mb-2" htmlFor="phone">
                    Phone number
                  </label>
                  <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="phone" type="tel" placeholder="Phone number" />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-600 text-sm font-bold mb-2" htmlFor="message">
                    Message
                  </label>
                  <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="message" placeholder="Message" />
                </div>
                <div className="flex items-center justify-end">
                  <button className="bg-gradient-to-r from-blue-400 to-purple-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline hover:opacity-90 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg" type="button">
                    Send message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }

  export default Contact
