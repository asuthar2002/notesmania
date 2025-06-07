import React from 'react'

const SubHeader = () => {
  return (
<>
  <div className="bg-gray-50 border-b border-gray-200">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center h-10 text-gray-600 text-sm font-sans">
        <div className="flex space-x-6">
          <div className="flex items-center space-x-1">
            <i className="far fa-clock" />
            <span>Visit time: Mon-Sat 9:00-19:00</span>
          </div>
          <div className="flex items-center space-x-1">
            <i className="fas fa-headphones-alt" />
            <span>Call us now: +135-869-328</span>
          </div>
        </div>
        <div className="flex items-center space-x-6 text-gray-500">
          <div className="flex items-center space-x-1 cursor-pointer select-none">
            <i className="fas fa-globe" />
            <span>Language</span>
            <i className="fas fa-chevron-down text-xs" />
          </div>
          <a href="#" aria-label="Facebook" className="hover:text-gray-900">
            <i className="fab fa-facebook-f" />
          </a>
          <a href="#" aria-label="Instagram" className="hover:text-gray-900">
            <i className="fab fa-instagram" />
          </a>
          <a href="#" aria-label="Twitter" className="hover:text-gray-900">
            <i className="fab fa-twitter" />
          </a>
          <a href="#" aria-label="LinkedIn" className="hover:text-gray-900">
            <i className="fab fa-linkedin-in" />
          </a>
        </div>
      </div>
    </div>
  </div>

</>
  )
}

export default SubHeader
