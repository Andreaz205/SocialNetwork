import React, {useEffect, useRef, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {stopMessagesListening,sendMessage, startMessagesListening} from "../redux/chat-reducer.ts";

const ChatPage = () => {
    return <div>
        <Chat/>
    </div>
}

const Chat = () => {

    const dispatch = useDispatch()


    const status = useSelector((state) => state.chat.status)

    useEffect(() => {
        dispatch(startMessagesListening())
        return () => {
            dispatch(stopMessagesListening())
        }
    }, [])

    return <div>
        {status === 'error' && <div>Some error occured. Please refresh the page</div>}
        <>
            <Messages/>
            <AddMessageForm/>
        </>
    </div>
}

const Messages= ({}) => {
    const messages = useSelector((state) => state.chat.messages)
    const messagesAnchorRef = useRef(null);
    const [isAutoScroll, setIsAutoScroll] = useState(true)

    const scrollHandler = (e) => {
        const element = e.currentTarget;
        if (Math.abs( (element.scrollHeight - element.scrollTop) - element.clientHeight ) < 300)
        {
            !isAutoScroll && setIsAutoScroll(true)
        } else {
            isAutoScroll && setIsAutoScroll(false)
        }
    }

    useEffect(() => {
        if (isAutoScroll) {
            messagesAnchorRef.current?.scrollIntoView({behavior: 'smooth'})
        }
    }, [messages])

    return <div style={{height: '400px', overflowY: 'auto'}} onScroll={scrollHandler}>
        {messages.map((m, index) => <Message key={m.id} message={m}/>)}
        <div ref={messagesAnchorRef}></div>
    </div>
}


const Message = React.memo( ({message}) => {
    console.log(">>>>>>Message")
    return <div>
        {/*<img src={message.photo} style={{width: '30px'}}/> <b>{message.userName}</b>*/}
        <br/>
        {message.message}
        <hr/>
    </div>
})


const AddMessageForm= () => {
    const [message, setMessage] = useState('')
    const dispatch = useDispatch()

    const status = useSelector((state) => state.chat.status)


    const sendMessageHandler = () => {
        if (!message) {
            return
        }
        dispatch(sendMessage(message))
        setMessage('')
    }

    return <div>
        <div>
            <textarea onChange={(e) => setMessage(e.currentTarget.value)} value={message}></textarea>
        </div>
        <div>
            <button onClick={sendMessageHandler}>Send</button>
        </div>
    </div>
}
// disabled={status !== 'ready'}

export default ChatPage