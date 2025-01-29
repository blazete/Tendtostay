import React from 'react'
import twitter from '../utils/twitter.svg';
import facebook from '../utils/facebook.svg'
import insta from '../utils/instagram.svg'
import Logo from '../utils/finalLogo.png'

const Footer = () => {
  return (
    <div className='flex flex-col bg-[#F7F7F7]'>
    <div className=' hidden sm:flex sm:fles-row flex-row items-start justify-center  gap-32 mx-20  py-9 border-b border-slate-300'>
      <div className='flex flex-col items-start justify-center'>
        <div className='pb-4'>Support</div>
        <div>Help Center</div>
        <div>Get help with a safety issue</div>
        <div>AirCover</div>
        <div>Anti-discrimination</div>
        <div>Disability support</div>
        <div>Cancellation options</div>
        <div>Report neighbourhood concern</div>
      </div>
      <div className='flex flex-col items-start justify-center'>
         <div className='pb-4'>Hosting</div>
        <div>Airbnb your home</div>
        <div>AirCover for Hosts</div>
        <div>Hosting resources</div>
        <div>Community forum</div>
        <div>Hosting responsibly</div>
        <div>Join a free Hosting class</div>        
      </div>
      <div className='flex flex-col items-start justify-center'>
        <div className='pb-4'>Airbnb</div>
        <div>Newsroom</div>
        <div>New features</div>
        <div>Careers</div>
        <div>Investors</div>
        <div>Airbnb.org emergency stays</div>
      </div>
    </div>
    <div className='hidden sm:flex items-start justify-between gap-32 mx-20  py-9'>
    <div className='flex gap-3 items-start justify-center'>
        <div>© 2024 Airbnb, Inc.</div>
        <div>Privacy</div>
        <div>Terms</div>
        <div>Sitemap</div>
        <div>Company details</div>
      </div>
      <div className='flex gap-3 items-start justify-center'>
        <div><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
        </svg></div>
        <div>English (IN)</div>
        <div>₹INR</div>
        <div><img src={`${insta}`} className='h-[25px]'/></div>
        <div><img src={`${twitter}`} className='h-[25px]'/></div>
        <div><img src={`${facebook}`} className='h-[25px]'/></div>

      </div>
    </div>
    <div className='sm:hidden flex fixed bottom-0 items-center justify-around  py-3 w-full bg-white border-t border-slate-300'>
    <div><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
</svg>
</div>
        <div><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
</svg>
</div>
        <div><img src={`${Logo}`} className='h-[25px]'/></div>
        <div><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M9 3.75H6.912a2.25 2.25 0 0 0-2.15 1.588L2.35 13.177a2.25 2.25 0 0 0-.1.661V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 0 0-2.15-1.588H15M2.25 13.5h3.86a2.25 2.25 0 0 1 2.012 1.244l.256.512a2.25 2.25 0 0 0 2.013 1.244h3.218a2.25 2.25 0 0 0 2.013-1.244l.256-.512a2.25 2.25 0 0 1 2.013-1.244h3.859M12 3v8.25m0 0-3-3m3 3 3-3" />
</svg>
</div>
        <div><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
</svg>
</div>
    </div>
    </div>
  )
}

export default Footer