import "./App.css"
import { ApolloClient, ApolloProvider, InMemoryCache, useSubscription, gql } from "@apollo/client"
import { WebSocketLink } from "@apollo/client/link/ws"
import React, { useEffect, Fragment, useState } from "react";
import LoginButton from "./components/LoginButton"
import LogoutButton from "./components/LogoutButton"
import ProfilePage from "./pages/ProfilePage"
import { useAuth0 } from "@auth0/auth0-react"

import Main from "./pages/Main"

import DisplayMessages from "./components/DisplayMessages"
import { PostTextMessage } from "./components/PostTextMessage"
import SubscribeToLastMessage from "./components/SubscribeToLastMessage";

const createApolloClient = () => {
  return new ApolloClient({
    link: new WebSocketLink({
      uri: "wss://teaching-bug-46.hasura.app/v1/graphql",
      options: {
        reconnect: true,
        connectionParams: {
          headers: {
            "x-hasura-admin-secret": "5d0b2rWTiI5x66G4NXXe01moMYegqye9hkKfGUYXCvRU8fd6t7yt2MumBlnkbkHB",
          },
        },
      },
    }),
    cache: new InMemoryCache(),
  })
}

export default function App() {
  const { user, isAuthenticated, getIdTokenClaims, getAccessTokenSilently } = useAuth0()
  const client = createApolloClient()
  console.log(isAuthenticated)
  return (
    <ApolloProvider client={client}>
      <div>
        <Main user={user}/>
        {/* <ProfilePage /> */}
        
      </div>
    </ApolloProvider>
  )
}
