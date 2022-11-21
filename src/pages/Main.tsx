import { ChangeEvent, SyntheticEvent, useState } from "react";
import Navbar from "../components/Navbar";
import Channel1 from "./channels/Channel1";
import Channel2 from "./channels/Channel2";


export default function Main({user}:any) {

  const [channel, setChannel] = useState<string|null>();

  function handleChannelChange (e:React.MouseEvent<HTMLElement>) {
    const target = e.target as HTMLButtonElement
    const selectedChannel = target.value
    setChannel(selectedChannel)
  }
 

  return (
    <div>
      <Navbar handleChannelChange={handleChannelChange}/>
      
      {channel === "channel1" ?    <Channel1 user={user}/> :    <Channel2 user={user}/>}
   
   
    </div>
  )
}
