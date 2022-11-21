
import DisplayMessages from "../../components/DisplayMessages"
import { PostTextMessage } from "../../components/PostTextMessage"
import SubscribeToLastMessage from "../../components/SubscribeToLastMessage"

export default function Channel2({user}: any) {
  return (
    <div>
      <h2 className="text-center">Channel 2</h2>
      <DisplayMessages user={user} channel={2} />
      <SubscribeToLastMessage user={user} channel={2}/>
      <PostTextMessage user={user} channel={2}/>
    </div>
  )
}
