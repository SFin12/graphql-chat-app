import "./App.css"
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client"
import { WebSocketLink } from "@apollo/client/link/ws"
import { useAuth0 } from "@auth0/auth0-react"
import Main from "./pages/Main"


const createApolloClient = () => {
  return new ApolloClient({
    link: new WebSocketLink({
      uri: "wss://teaching-bug-46.hasura.app/v1/graphql",
      options: {
        reconnect: true,
        connectionParams: {
          headers: {
            "x-hasura-admin-secret": process.env.REACT_APP_ADMIN_SECRET_PASSCODE,
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
