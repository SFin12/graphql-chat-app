import { gql, useQuery, useMutation, useSubscription } from "@apollo/client"
import React, { useEffect, Fragment, useState } from "react"
import styled from "styled-components"

export const MESSAGE_QUERY = gql`
  query getMessages($_eq: Int = 1) {
    messages(where: { channel_id: { _eq: $_eq } }) {
      author_id
      channel_id
      id
      message
    }
  }
`
const TextMessageBubble = styled.div`
  display: flex;
  align-items: center;
  margin: 10px;
  padding: 15px;
  /* background-color: yellowgreen; */
  height: 50;
  max-width: fit-content;
  border-radius: 50px;
  box-shadow: 2px 8px 15px 2px rgba(0, 0, 0, 0.1);
`

export default function DisplayMessages({ user, channel }: any) {
  const { loading, error, data } = useQuery(MESSAGE_QUERY, {
    variables: { _eq: channel },
  })

  if (loading) return <p>Loading...</p>
  if (error) return <p>{error.message} :(</p>
  if (data?.messages && user?.sub) {
    return (
      <main className="container">
        <div className="w-100">
          {data?.messages?.map((message: any, i: number) => {
            
              return (
                <section key={i + message.author_id} className="w-100 d-flex" style={{ justifyContent: message.author_id === user.sub ? "end" : "start"}}>
                  {/* Plan on making the div below a component and passing user infor that will change display based on author so there will only be one return here.*/}
                  {/* <div className="d-flex justify-content-center m-2 p-3 align-items-center" style={{ background: "lightblue", height: 50, maxWidth: "fit-content", borderRadius: 50 }}>
                    <div>{message.message}</div>
                  </div> */}
                  <TextMessageBubble style={{backgroundColor: message.author_id === user.sub ? "lightblue" : "yellowgreen"}}>
                    <div>{message.message}</div>
                  </TextMessageBubble>
                </section>
              )
            
          
          })}
        </div>
      </main>
    )
  }
  return <div>No messages</div>
}
