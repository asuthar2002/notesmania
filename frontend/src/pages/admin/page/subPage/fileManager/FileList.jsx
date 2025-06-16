import React from 'react'

export default function FileList() {
  return (
    <div className="max-w-6xl mx-auto p-6">
    <div className="border border-slate-200 rounded-xl overflow-hidden">
      <div className="flex justify-between items-center px-6 py-4 border-b border-slate-200">
        <h2 className="font-semibold text-slate-900 text-lg">Recent Files</h2>
        <button className="text-slate-600 text-sm font-normal flex items-center gap-1 hover:text-slate-900 transition">
          View All
          <i className="fas fa-arrow-right text-xs" />
        </button>
      </div>
      <table className="w-full text-sm text-slate-600">
        <thead className="border-b border-slate-200">
          <tr>
            <th className="text-left px-6 py-3 font-semibold">File Name</th>
            <th className="text-left px-6 py-3 font-semibold">Category</th>
            <th className="text-left px-6 py-3 font-semibold">Size</th>
            <th className="text-left px-6 py-3 font-semibold">Date Modified</th>
            <th className="text-left px-6 py-3 font-semibold">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-slate-200">
            <td className="px-6 py-4 flex items-center gap-3 text-slate-800">
              <i className="far fa-file-video text-lg" />
              Video_947954.mp4
            </td>
            <td className="px-6 py-4">Video</td>
            <td className="px-6 py-4">89 MB</td>
            <td className="px-6 py-4">12 Jan, 2027</td>
            <td className="px-6 py-4 flex gap-4 text-slate-600">
              <button
                aria-label="Delete Video_947954.mp4"
                className="hover:text-slate-900"
              >
                <i className="far fa-trash-alt" />
              </button>
              <button
                aria-label="View Video_947954.mp4"
                className="hover:text-slate-900"
              >
                <i className="far fa-eye" />
              </button>
            </td>
          </tr>
          <tr className="border-b border-slate-200">
            <td className="px-6 py-4 flex items-center gap-3 text-slate-800">
              <i className="far fa-file-image text-lg" />
              Travel.jpg
            </td>
            <td className="px-6 py-4">Image</td>
            <td className="px-6 py-4">5.4 MB</td>
            <td className="px-6 py-4">10 Feb, 2027</td>
            <td className="px-6 py-4 flex gap-4 text-slate-600">
              <button
                aria-label="Delete Travel.jpg"
                className="hover:text-slate-900"
              >
                <i className="far fa-trash-alt" />
              </button>
              <button
                aria-label="View Travel.jpg"
                className="hover:text-slate-900"
              >
                <i className="far fa-eye" />
              </button>
            </td>
          </tr>
          <tr className="border-b border-slate-200">
            <td className="px-6 py-4 flex items-center gap-3 text-slate-800">
              <i className="far fa-file-pdf text-lg" />
              Document.pdf
            </td>
            <td className="px-6 py-4">Document</td>
            <td className="px-6 py-4">1.2 MB</td>
            <td className="px-6 py-4">8 Mar, 2027</td>
            <td className="px-6 py-4 flex gap-4 text-slate-600">
              <button
                aria-label="Delete Document.pdf"
                className="hover:text-slate-900"
              >
                <i className="far fa-trash-alt" />
              </button>
              <button
                aria-label="View Document.pdf"
                className="hover:text-slate-900"
              >
                <i className="far fa-eye" />
              </button>
            </td>
          </tr>
          <tr className="border-b border-slate-200">
            <td className="px-6 py-4 flex items-center gap-3 text-slate-800">
              <i className="far fa-file-video text-lg" />
              Video_947954_028.mp4
            </td>
            <td className="px-6 py-4">Video</td>
            <td className="px-6 py-4">489 MB</td>
            <td className="px-6 py-4">29 Apr, 2027</td>
            <td className="px-6 py-4 flex gap-4 text-slate-600">
              <button
                aria-label="Delete Video_947954_028.mp4"
                className="hover:text-slate-900"
              >
                <i className="far fa-trash-alt" />
              </button>
              <button
                aria-label="View Video_947954_028.mp4"
                className="hover:text-slate-900"
              >
                <i className="far fa-eye" />
              </button>
            </td>
          </tr>
          <tr className="border-b border-slate-200">
            <td className="px-6 py-4 flex items-center gap-3 text-slate-800">
              <i className="far fa-file-image text-lg" />
              Mountain.png
            </td>
            <td className="px-6 py-4">Image</td>
            <td className="px-6 py-4">5.4 MB</td>
            <td className="px-6 py-4">10 Feb, 2027</td>
            <td className="px-6 py-4 flex gap-4 text-slate-600">
              <button
                aria-label="Delete Mountain.png"
                className="hover:text-slate-900"
              >
                <i className="far fa-trash-alt" />
              </button>
              <button
                aria-label="View Mountain.png"
                className="hover:text-slate-900"
              >
                <i className="far fa-eye" />
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  )
}
