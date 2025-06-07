import React from 'react'

const CategoriesPage = () => {
  return (
<>
<div className="max-w-7xl mx-auto">
    <h2 className="text-center text-3xl font-extrabold leading-tight mb-2">
      Choose a Categories
    </h2>
    <p className="text-center text-gray-600 mb-10">
      Perceived end knowledge certainly day sweetness why cordially
    </p>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
      <div className="bg-[#E6F6F1] rounded-lg p-8 flex flex-col items-center text-center">
        <div className="bg-white rounded-full p-5 mb-4">
          <img
            alt="Icon representing Data Science with abstract shapes and database symbol"
            className="mx-auto"
            height={64}
            src="https://storage.googleapis.com/a1aa/image/74af9da0-db39-4245-b610-789b2cd36426.jpg"
            width={64}
          />
        </div>
        <h3 className="font-semibold text-lg mb-1">Data Science</h3>
        <p className="font-bold text-sm">15 Courses</p>
      </div>
      <div className="bg-[#FFF3E6] rounded-lg p-8 flex flex-col items-center text-center">
        <div className="bg-white rounded-full p-5 mb-4">
          <img
            alt="Icon representing IT & Software with a computer and tools"
            className="mx-auto"
            height={64}
            src="https://storage.googleapis.com/a1aa/image/3e4e7e3a-529e-49dc-a105-c173b58d79b5.jpg"
            width={64}
          />
        </div>
        <h3 className="font-semibold text-lg mb-1">IT &amp; Software</h3>
        <p className="font-bold text-sm">22 Courses</p>
      </div>
      <div className="bg-[#FDECEF] rounded-lg p-8 flex flex-col items-center text-center">
        <div className="bg-white rounded-full p-5 mb-4">
          <img
            alt="Icon representing Engineering with a hard hat and gear"
            className="mx-auto"
            height={64}
            src="https://storage.googleapis.com/a1aa/image/7540a0df-f523-421e-6813-21aa08919aa8.jpg"
            width={64}
          />
        </div>
        <h3 className="font-semibold text-lg mb-1">Engineering</h3>
        <p className="font-bold text-sm">53 Courses</p>
      </div>
      <div className="bg-[#E8E6F7] rounded-lg p-8 flex flex-col items-center text-center">
        <div className="bg-white rounded-full p-5 mb-4">
          <img
            alt="Icon representing Web Development with a code editor screen"
            className="mx-auto"
            height={64}
            src="https://storage.googleapis.com/a1aa/image/5d92f23e-a023-4169-0018-e181619e630f.jpg"
            width={64}
          />
        </div>
        <h3 className="font-semibold text-lg mb-1">Web Development</h3>
        <p className="font-bold text-sm">25 Courses</p>
      </div>
    </div>
  </div>
</>
  )
}

export default CategoriesPage
