import styled from "styled-components"
import DisplayMessages from "../../components/DisplayMessages"
import { PostTextMessage } from "../../components/PostTextMessage"

const BottomSpacer = styled.div`

  height: 100px;
  width: 100%;

`


export default function Channel1({ user }: any) {
  return (
    <div>
      <h2 className="text-center">Channel 1</h2>
      <DisplayMessages user={user} channel={1}/>
      <BottomSpacer>
      <PostTextMessage user={user} channel={1}/>
      </BottomSpacer>
      <div></div>
    </div>
  )
}
