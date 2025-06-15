import React from 'react'
import UICard from '../../../components/ui/UICard'

const ViewProfile = () => {
  return (
<>

<UICard title="User Profile">
<div className="max-w-4xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-start sm:space-x-10">
          <div className="flex justify-center sm:block mb-6 sm:mb-0">
            <img
              alt="Admin Profile"
              className="w-24 h-24 rounded-full border-4 border-white object-cover"
              height={100}
              src="https://storage.googleapis.com/a1aa/image/d7fd1b39-bc88-4fb7-01d2-936ffd59297f.jpg"
              width={100}
            />
          </div>
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-12 text-gray-700 text-base">
            <div className="flex space-x-2">
              <span className="">Title:</span>
              <span className="font-semibold">Mr.</span>
            </div>
            <div className="flex space-x-2">
              <span>Email ID:</span>
              <span className="font-semibold">example@gmail.com</span>
            </div>
            <div className="flex space-x-2">
              <span>Full Name:</span>
              <span className="font-semibold">Louis Ferguson</span>
            </div>
            <div className="flex space-x-2">
              <span>Location:</span>
              <span className="font-semibold">California</span>
            </div>
            <div className="flex space-x-2">
              <span>User Name:</span>
              <span className="font-semibold">Lousifer</span>
            </div>
            <div className="flex space-x-2">
              <span>Joining Date:</span>
              <span className="font-semibold">29 Aug 2019</span>
            </div>
            <div className="flex space-x-2 col-span-full">
              <span>Mobile Number:</span>
              <span className="font-semibold">+123 456 789 10</span>
            </div>
            <div className="flex space-x-2 col-span-full">
              <span>Education:</span>
              <span className="font-semibold">
                Bachelor in Computer Graphics, Masters in Computer Graphics
              </span>
            </div>
            <div className="flex space-x-2 col-span-full">
              <span>Description:</span>
              <span className="font-semibold">
                As it so contrasted oh estimating instrument. Size like body
                someone had. Are conduct viewing boy minutes warrant the
                expense. Tolerably behavior may admit daughters offending her
                ask own. Praise effect wishes change way and any wanted. Lively
                use looked latter regard had. Do he it part more last in.
              </span>
            </div>
          </div>
        </div>
      </div>
</UICard>
      </>
  )
}

export default ViewProfile
