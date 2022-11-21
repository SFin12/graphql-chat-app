import { gql, useMutation } from "@apollo/client"
import styled from "styled-components"
import { MESSAGE_QUERY } from "./DisplayMessages"
import TextInput from "./TextInput"


const POST_MESSAGE = gql`
  mutation postMessage($message: String = "", $author_id: String = "", $channel_id: Int = 10) {
    insert_messages_one(object: { message: $message, author_id: $author_id, channel_id: $channel_id }) {
      author_id
      channel_id
      message
    }
  }
`

const TextInputContainer = styled.section`
  width: 100%;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: lightgray;
  position: fixed;
  bottom: 0px;
`


export function PostTextMessage({user, channel}: any) {
  const [postMessage, {data, loading, error}] = useMutation(POST_MESSAGE)

  if (loading) return <p>Loading...</p>
  if (error) return <p>{error.message}</p>


  const postText = (text: string) => {
    postMessage({ variables: { message: text, author_id: user.sub, channel_id: channel}})
  }

  return <TextInputContainer><TextInput postText={postText} /></TextInputContainer>
}