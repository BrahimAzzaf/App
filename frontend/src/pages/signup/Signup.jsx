import React from 'react'
import GenderCheckbox from './GenderCheckbox'

function Signup() {
  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
      <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg
      bg-opacity-0'>
         <h1 className='text-3xl font-semibold text-center text-gray-400'>
         Sign Up
          <span className='text-blue-500'> ChatApp</span>
        </h1>

        <form >
          <div>
            <label className='label p-2'>
              <span className=' text-base label-text'>full name</span>
            </label>
            <input
              className='input w-full input-bordered h-10'
              type='text'
              name='username'
              placeholder='your name here' />
          </div>

          <div>
            <label className='label p-2'>
              <span className=' text-base label-text'>username</span>
            </label>
            <input
              className='input w-full input-bordered h-10'
              type='text'
              name='username'
              placeholder='your username here' />
    </div>


              <div>
                <label className='label p-2'>
                  <span className=' text-base label-text'>password</span>
                </label>
                <input
                  className='input w-full input-bordered h-10'
                  type='password'
                  name='password'
                  placeholder='<PASSWORD>' />
        </div>


        <div>
          <label className='label p-2'>
            <span className=' text-base label-text'>confirm password</span>
          </label>
          <input
            className='input w-full input-bordered h-10'
            type='password'
            name='confirmPassword'
            placeholder='<PASSWORD>'/> 
            </div>
            <GenderCheckbox/>
             

            <a href="#" className='text-im hover:underline hover:text-blue-600 mt-2 inline-block'>
            don't have an account?
          </a>

            <div >
              <button 
              className='btn btn-block btn-sm mt-2'>
              Sign Up</button>
            </div>



</form>
      </div>
    </div>
  )
}

export default Signup




















//STARTER CODE FOR SIGNUP COMPONENET 

// import React from 'react'
// import GenderCheckbox from './GenderCheckbox'

// function Signup() {
//   return (
//     <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
//       <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg
//       bg-opacity-0'>
//          <h1 className='text-3xl font-semibold text-center text-gray-400'>
//          Sign Up
//           <span className='text-blue-500'> ChatApp</span>
//         </h1>

//         <form >
//           <div>
//             <label className='label p-2'>
//               <span className=' text-base label-text'>full name</span>
//             </label>
//             <input
//               className='input w-full input-bordered h-10'
//               type='text'
//               name='username'
//               placeholder='your name here' />
//           </div>

//           <div>
//             <label className='label p-2'>
//               <span className=' text-base label-text'>username</span>
//             </label>
//             <input
//               className='input w-full input-bordered h-10'
//               type='text'
//               name='username'
//               placeholder='your username here' />
//     </div>


//               <div>
//                 <label className='label p-2'>
//                   <span className=' text-base label-text'>password</span>
//                 </label>
//                 <input
//                   className='input w-full input-bordered h-10'
//                   type='password'
//                   name='password'
//                   placeholder='<PASSWORD>' />
//         </div>


//         <div>
//           <label className='label p-2'>
//             <span className=' text-base label-text'>confirm password</span>
//           </label>
//           <input
//             className='input w-full input-bordered h-10'
//             type='password'
//             name='confirmPassword'
//             placeholder='<PASSWORD>'/> 
//             </div>
//             <GenderCheckbox/>
             

//             <a href="#" className='text-im hover:underline hover:text-blue-600 mt-2 inline-block'>
//             don't have an account?
//           </a>

//             <div >
//               <button 
//               className='btn btn-block btn-sm mt-2'>
//               Sign Up</button>
//             </div>



// </form>
//       </div>
//     </div>
//   )
// }

// export default Signup
