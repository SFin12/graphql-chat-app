// import { gql, useQuery, useMutation, useSubscription } from "@apollo/client"
// import React, { useEffect, Fragment, useState } from "react";


// const SUBSCRIBE_TO_MESSAGES = gql`
// subscription MySubscription($_eq: Int = 10) {
//   messages(limit: 1, order_by: {id: desc}, where: {channel_id: {_eq: $_eq}}) {
//     author_id
//     channel_id
//     id
//     message
//   }
// }

// `


// export default function SubscribeToLastMessage({ user, channel }: any) {
//   const { loading, error, data } = useSubscription( SUBSCRIBE_TO_MESSAGES, {
//     variables: { "_eq": channel }
//   });

//   useEffect(() => {
//     window.scrollTo(0, window.document.body.scrollHeight)
//   },[loading, error, data])
  
//   if (loading) {
//     return <span>Loading...</span>;
//   }
//   if (error) {
//     console.error(error);
//     return <span>subscription error {error.message}</span>;
//   }

//   if (data?.messages && user?.sub) {
    
//     return (
//       <>
//       <main className="container">
//       <div className="w-100">
//         {data?.messages?.map((message: any, i: number) => {
//           if (message.author_id === user.sub) {
//             return (
//               <section key={i + message.author_id} className="w-100 d-flex justify-content-end">
//               <div className="d-flex justify-content-center m-2 p-3 align-items-center" style={{ background: "lightblue", height: 50, maxWidth: "fit-content", borderRadius: 50 }}>
//                 <div>{message.message}</div>
//               </div>
//               </section>
//             )
//           }
//           return (
//             <section key={i + message.author_id} className="w-100 d-flex justify-content-start">
//               <div  className="d-flex justify-content-end m-2 p-3 align-items-center" style={{ background: "yellowgreen", height: 50, maxWidth: "fit-content", borderRadius: 50 }}>
//                 <div>{message.message}</div>
//               </div>
//             </section>
//           )
//         })}
//       </div>
//       </main>
//       <footer style={{height:90}}></footer>
//       </>
//     )
//   }
//   return <div>No messages</div>
// }

export {}