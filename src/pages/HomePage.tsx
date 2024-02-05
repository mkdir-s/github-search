import React from 'react'
import { useSearchUsersQuery } from '../store/github/github.api'

function HomePage() {
  const {isLoading, isError, data} = useSearchUsersQuery('mkdir');

  console.log(data)

  return (
    <div className='flex justify-center pt-10 mx-auto h-screen w-screen'>
      {isError && <p className='text-center text-red-600'>Something went wrong...</p>}

      
    </div>
  )
}

export default HomePage