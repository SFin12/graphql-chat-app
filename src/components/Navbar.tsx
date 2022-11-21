import { useState } from "react";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";

type Props = {
  handleChannelChange: any
}

export default function Navbar({handleChannelChange}: Props) {

  
  return (
    <nav className="d-flex">
      <LoginButton />
      <LogoutButton />
      <button onClick={handleChannelChange} value="channel1">
        Channel 1
      </button>
      <button onClick={handleChannelChange} value="channel2">
        Channel 2
      </button>
    </nav>
  )
}

export {};