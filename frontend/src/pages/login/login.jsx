import React from 'react'

function login() {
  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
      <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0' >
        <h1 className='text-3xl font-semibold text-center text-gray-400'>
          Login
          <span className='text-blue-500'>ChatApp</span>
        </h1>

        <form >
          <div>
            <label className='label p-2'>
              <span className=' text-base label-text'>Username</span>
            </label>
            <input
              className='input w-full input-bordered h-10'
              type='text'
              name='username'
              placeholder='Enter username' />
          </div>

          <div>
            <label className='label p-2'>
              <span className=' text-base label-text'>Password</span>
            </label>
            <input
              className='input w-full input-bordered h-10'
              type='password'
              name='password'
              placeholder='Enter password' />
          </div>

          <a href="#" className='text-im hover:underline hover:text-blue-600 mt-2 inline-block'>
            don't have an account?
          </a>

          <div >
            <button
              className='btn btn-block btn-sm mt-2'>
              Login
            </button>
          </div>
        </form>

      </div>
    </div>
  )
}

export default login
