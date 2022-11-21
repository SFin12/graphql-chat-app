import { useState } from 'react'
import styled from 'styled-components'


type Props = {}

const TextMessageInput = styled.input`
border-radius: 50px;
border: 1px gray solid;
padding-left:10px;
margin: 10px;
min-height: 50px;
min-width: 200px;
`

const TextInput = ({postText}:any) => {

  const [textMessage, setTextMessage] = useState<string | undefined>("")
  

  const handleText = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    if(textMessage){
      postText(textMessage)
      setTextMessage("")
    }
  }

  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => setTextMessage(e.target.value)
 

  return (
    <form onSubmit={handleText}>
      <TextMessageInput type="text" name='text-message' value={textMessage} placeholder="Message" onChange={handleChange}/>
    </form>
  )
}

export default TextInput


