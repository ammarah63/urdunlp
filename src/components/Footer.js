import React from 'react'
import { MDBFooter } from 'mdb-react-ui-kit';

export default function Footer() {
  return (
    <MDBFooter  className='text-center' color='white' bgColor='dark'>
    <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
    © 2022 Copyright:
    <a className='text-white' href='https://mdbootstrap.com/'>
      Urdu.com
    </a>
  </div>
 </MDBFooter>
  )
}
