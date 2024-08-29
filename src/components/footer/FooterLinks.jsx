import React from 'react'

const FooterLinks = ({links}) => {
  return (
    <div className='mx-4 my-2 flex flex-col'>
        {
            links.map((link) => (
                <a href="#" className='text-[#6c6c6c] my-1 text-sm '>{link}</a>
            ))
        }
    </div>
  )
}

export default FooterLinks