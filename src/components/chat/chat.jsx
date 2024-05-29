import { useState } from 'react'
import './chat.scss'

function Chat() {

    const [chat, setChat] = useState(true)
    return (
        <div className='chat'>
            <div className='messeges'>
                <h1>Messeges</h1>
                <div className='messege'>
                    <img src='https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' />
                    <span>John Doe</span>
                    <p>Lorem ipsum dolor sit amet...</p>
                </div>
                <div className='messege'>
                    <img src='https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' />
                    <span>John Doe</span>
                    <p>Lorem ipsum dolor sit amet...</p>
                </div>
                <div className='messege'>
                    <img src='https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' />
                    <span>John Doe</span>
                    <p>Lorem ipsum dolor sit amet...</p>
                </div>
                <div className='messege'>
                    <img src='https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' />
                    <span>John Doe</span>
                    <p>Lorem ipsum dolor sit amet...</p>
                </div>
                <div className='messege'>
                    <img src='https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' />
                    <span>John Doe</span>
                    <p>Lorem ipsum dolor sit amet...</p>
                </div>
            </div>
            {chat && (<div className='chatBox'>
                <div className='top'>
                    <div className='user'>
                        <img src='https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' />
                        John Doe
                    </div>
                    <span className='close' onClick={()=>setChat(null)}>x</span>
                </div>
                <div className='center'>
                    <div className='chatMesseges'>
                        <p>Lorem ipsum dolor sit amet...</p>
                        <span>1 hour ago</span>
                    </div>
                    <div className='chatMesseges own'>
                        <p>Lorem ipsum dolor sit amet...</p>
                        <span>1 hour ago</span>
                    </div>
                    <div className='chatMesseges'>
                        <p>Lorem ipsum dolor sit amet...</p>
                        <span>1 hour ago</span>
                    </div>
                    <div className='chatMesseges own'>
                        <p>Lorem ipsum dolor sit amet...</p>
                        <span>1 hour ago</span>
                    </div>
                    <div className='chatMesseges'>
                        <p>Lorem ipsum dolor sit amet...</p>
                        <span>1 hour ago</span>
                    </div>
                    <div className='chatMesseges own'>
                        <p>Lorem ipsum dolor sit amet...</p>
                        <span>1 hour ago</span>
                    </div>
                    <div className='chatMesseges'>
                        <p>Lorem ipsum dolor sit amet...</p>
                        <span>1 hour ago</span>
                    </div>
                </div>
                <div className='bottom'>
                    <textarea></textarea>
                    <button>Send</button>
                </div>
            </div>)}
        </div>
    )
}

export default Chat