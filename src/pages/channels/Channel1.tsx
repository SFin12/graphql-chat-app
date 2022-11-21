import DisplayMessages from "../../components/DisplayMessages"
import { PostTextMessage } from "../../components/PostTextMessage"
import SubscribeToLastMessage from "../../components/SubscribeToLastMessage"

export default function Channel1({ user }: any) {
  return (
    <div>
      <h2 className="text-center">Channel 1</h2>
      <DisplayMessages user={user} channel={1}/>
      <SubscribeToLastMessage user={user} channel={1}/>
      <PostTextMessage user={user} channel={1}/>
    </div>
  )
}
