
function Message() {
  return (
    <div className="chat chat-end">
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
            <img src="https://gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50" alt="user avatar"/>
        </div>
      </div>
      <div className={'chat-bubble  text-white bg-blue-500 '}>Hi | what is upp?</div>
      <div className={'chat-footer opacity-50 text-xs gap-1 items-center     '}>12:44</div>
    </div>
  )
}

export default Message
