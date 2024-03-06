import React from 'react'

function Conversation() {
  return (
    <>
    <div className='flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer'>

    <div className='avatar online'>

        <div className='w-12 rounded-full '>
            <img src="https://gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50" alt="user avatar"/>

        </div>
    </div>

    <div className='flex flex-col flex-1'>

            <div className='flex gap-3 justify-between'>
                <p className='font-bold' >jake galinhal</p>
                <span className='text-xl'> 😜</span>
            </div>
        </div>
    </div>

    <div className='divider my-0 py-0 h-1'></div>
    </>
  )
}

export default Conversation
