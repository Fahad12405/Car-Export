import React from 'react'

export default function Footer() {
  return (
<footer className="bg-white px-4 sm:px-6 pt-12 pb-6 font-[sans-serif] border border-t-2 border-gray-200">
  <div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8  mb-14">
    <div className="space-y-4 text-center sm:text-left">
      <h6 className="text-lg text-black font-medium">RESOURCES</h6>
      <ul className="space-y-2.5">
      <li><a href="javascript:void(0)" className="text-[13px] text-gray-800">Graphic Design Tools</a></li>
      <li><a href="javascript:void(0)" className="text-[13px] text-gray-800">Video Editing Tools</a></li>
      <li><a href="javascript:void(0)" className="text-[13px] text-gray-800">Image Enhancer</a></li>
      <li><a href="javascript:void(0)" className="text-[13px] text-gray-800">Remove Backgrounds</a></li>
      <li><a href="javascript:void(0)" className="text-[13px] text-gray-800">Photo Enhancement</a></li>
      <li><a href="javascript:void(0)" className="text-[13px] text-gray-800">Explore All Tools</a></li>
    </ul>
  </div>

  <div className="space-y-4 text-center sm:text-left">
    <h6 className="text-lg text-gray-1000 font-medium">HELPFUL LINKS</h6>
    <ul className="space-y-2.5">
      <li><a href="javascript:void(0)" className="text-[13px] text-gray-800">Subscription Plans</a></li>
      <li><a href="javascript:void(0)" className="text-[13px] text-gray-800">Our Story</a></li>
      <li><a href="javascript:void(0)" className="text-[13px] text-gray-800">Developer API</a></li>
      <li><a href="javascript:void(0)" className="text-[13px] text-gray-800">Career Opportunities</a></li>
      <li><a href="javascript:void(0)" className="text-[13px] text-gray-800">Become a Contributor</a></li>
      <li><a href="javascript:void(0)" className="text-[13px] text-gray-800">Brand Guidelines</a></li>
      <li><a href="javascript:void(0)" className="text-[13px] text-gray-800">Upcoming Events</a></li>
    </ul>
  </div>

  <div className="space-y-4 text-center sm:text-left">
    <h6 className="text-lg text-gray-1000 font-medium">POLICIES</h6>
    <ul className="space-y-2.5">
      <li><a href="javascript:void(0)" className="text-[13px] text-gray-800">Terms & Conditions</a></li>
      <li><a href="javascript:void(0)" className="text-[13px] text-gray-800">User Agreement</a></li>
      <li><a href="javascript:void(0)" className="text-[13px] text-gray-800">Data Privacy Policy</a></li>
      <li><a href="javascript:void(0)" className="text-[13px] text-gray-800">Copyright Notice</a></li>
      <li><a href="javascript:void(0)" className="text-[13px] text-gray-800">Cookie Usage Policy</a></li>
      <li><a href="javascript:void(0)" className="text-[13px] text-gray-800">Manage Cookies</a></li>
    </ul>
  </div>

  <div className="space-y-4 text-center sm:text-left ">
    <h6 className="text-lg text-gray-1000 font-medium ">SOCIAL MEDIA</h6>
    <ul className="flex space-x-4 text-center justify-center sm:justify-start">
      <li><a href="javascript:void(0)"><svg xmlns="http://www.w3.org/2000/svg" className="fill-blue-600 w-8 h-8" viewBox="0 0 49.652 49.652"><path d="M24.826 0C11.137 0 0 11.137 0 24.826c0 13.688 11.137 24.826 24.826 24.826 13.688 0 24.826-11.138 24.826-24.826C49.652 11.137 38.516 0 24.826 0zM31 25.7h-4.039v14.396h-5.985V25.7h-2.845v-5.088h2.845v-3.291c0-2.357 1.12-6.04 6.04-6.04l4.435.017v4.939h-3.219c-.524 0-1.269.262-1.269 1.386v2.99h4.56z" /></svg></a></li>
      <li><a href="javascript:void(0)"><svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 112.196 112.196"><circle cx="56.098" cy="56.097" r="56.098" fill="#007ab9" /><path fill="#fff" d="M89.616 60.611v23.128H76.207V62.161c0-5.418-1.936-9.118-6.791-9.118-3.705 0-5.906 2.491-6.878 4.903-.353.862-.444 2.059-.444 3.268v22.524h-13.41s.18-36.546 0-40.329h13.411v5.715c-.027.045-.065.089-.089.132h.089v-.132c1.782-2.742 4.96-6.662 12.085-6.662 8.822 0 15.436 5.764 15.436 18.149zm-54.96-36.642c-4.587 0-7.588 3.011-7.588 6.967 0 3.872 2.914 6.97 7.412 6.97h.087c4.677 0 7.585-3.098 7.585-6.97-.089-3.956-2.908-6.967-7.496-6.967zm-6.791 59.77H41.27v-40.33H27.865v40.33z" /></svg></a></li>
      <li><a href="javascript:void(0)"><svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 152 152"><linearGradient id="a" x1="22.26" x2="129.74" y1="22.26" y2="129.74" gradientUnits="userSpaceOnUse"><stop offset={0} stopColor="#fae100" /><stop offset=".15" stopColor="#fcb720" /><stop offset=".3" stopColor="#ff7950" /><stop offset=".5" stopColor="#ff1c74" /><stop offset={1} stopColor="#6c1cd1" /></linearGradient><g data-name="Layer 2"><g data-name="03.Instagram"><rect width={152} height={152} fill="url(#a)" rx={76} /><g fill="#fff"><path fill="#ffffff10" d="M133.2 26c-11.08 20.34-26.75 41.32-46.33 60.9S46.31 122.12 26 133.2q-1.91-1.66-3.71-3.46A76 76 0 1 1 129.74 22.26q1.8 1.8 3.46 3.74z" /><path d="M94 36H58a22 22 0 0 0-22 22v36a22 22 0 0 0 22 22h36a22 22 0 0 0 22-22V58a22 22 0 0 0-22-22zm15 54.84A18.16 18.16 0 0 1 90.84 109H61.16A18.16 18.16 0 0 1 43 90.84V61.16A18.16 18.16 0 0 1 61.16 43h29.68A18.16 18.16 0 0 1 109 61.16z" /><path d="m90.59 61.56-.19-.19-.16-.16A20.16 20.16 0 0 0 76 55.33 20.52 20.52 0 0 0 55.62 76a20.75 20.75 0 0 0 6 14.61 20.19 20.19 0 0 0 14.42 6 20.73 20.73 0 0 0 14.55-35.05zM76 89.56A13.56 13.56 0 1 1 89.37 76 13.46 13.46 0 0 1 76 89.56zm26.43-35.18a4.88 4.88 0 0 1-4.85 4.92 4.81 4.81 0 0 1-3.42-1.43 4.93 4.93 0 0 1 3.43-8.39 4.82 4.82 0 0 1 3.09 1.12l.1.1a3.05 3.05 0 0 1 .44.44l.11.12a4.92 4.92 0 0 1 1.1 3.12z" /></g></g></g></svg></a></li>
      <li><a href="javascript:void(0)"><svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 1227 1227"><path d="M613.5 0C274.685 0 0 274.685 0 613.5S274.685 1227 613.5 1227 1227 952.315 1227 613.5 952.315 0 613.5 0z" /><path fill="#fff" d="m680.617 557.98 262.632-305.288h-62.235L652.97 517.77 470.833 252.692H260.759l275.427 400.844-275.427 320.142h62.239l240.82-279.931 192.35 279.931h210.074L680.601 557.98zM345.423 299.545h95.595l440.024 629.411h-95.595z" /></svg></a></li>
    </ul>

    <div className="!mt-8">
      <h6 className="text-[13px] text-gray-800 font-medium">Get exclusive assets sent straight to your inbox</h6>
      <div className="mt-4">
        <a href="javascript:void(0)" className="bg-red-800 text-sm text-white font-medium py-3 px-6 tracking-wide rounded">Sign up</a>
      </div>
      <div className="mt-12 ">
    <img
      src="https://globalcorporation.jp/wp-content/uploads/2015/12/GlobalCorporation-1.png" // Add the path to your image file here
      alt="Logo"
      className="mx-auto " // This will center the image
      style={{ width: '200px' }} // You can adjust the size as needed
    />
  </div>
    </div>
  </div>
</div>

  <hr className="my-6 border-gray-600" />
  <div className="max-w-screen-xl mx-auto text-center">
    <p className="text-gray-800 text-[13px]">
      GlobalTradingCars Copyright © 2025. All rights reserved.
    </p>
  </div>
</footer>
  )
}
