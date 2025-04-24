import React from 'react'
import MapComponent from '../components/MapComponent'
import Address from '../components/Address'
import CourtList from '../components/CourtList'
const Home = () => {
  return (
      <div className='flex'>
          <div className='w-14 flex-1'>
              <MapComponent />
          </div>
          <div className='w-64 flex-1'>
              <CourtList />
          </div>

      </div>
  )
}

export default Home