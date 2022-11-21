import { gql, useQuery, useMutation, useSubscription } from "@apollo/client"
import React, { useEffect, Fragment, useState } from "react";

export const MESSAGE_QUERY = gql`
query getMessages ($_eq: Int = 1) {
  messages(where: {channel_id: {_eq: $_eq}}) {
    author_id
    channel_id
    id
    message
  }
}
`


export default function DisplayMessages({ user, channel }: any) {
  const { loading, error, data } = useQuery(MESSAGE_QUERY, {
    variables: { "_eq": channel }
  })

  if (loading) return <p>Loading...</p>
  if (error) return <p>{error.message} :(</p>
  if (data?.messages && user?.sub) {
    return (
      <main className="container">
      <div className="w-100">
        {data?.messages?.map((message: any, i: number) => {
          if (message.author_id === user.sub) {
            return (
              <section key={i + message.author_id} className="w-100 d-flex justify-content-end">
              <div  className="d-flex justify-content-center m-2 p-3 align-items-center" style={{ background: "lightblue", height: 50, maxWidth: "fit-content", borderRadius: 50 }}>
                <div>{message.message}</div>
              </div>
              </section>
            )
          }
          return (
            <section key={i + message.author_id} className="w-100 d-flex justify-content-start">
              <div  className="d-flex justify-content-end m-2 p-3 align-items-center" style={{ background: "yellowgreen", height: 50, maxWidth: "fit-content", borderRadius: 50 }}>
                <div>{message.message}</div>
              </div>
            </section>
          )
        })}
      </div>
      </main>
    )
  }
  return <div>No messages</div>
}