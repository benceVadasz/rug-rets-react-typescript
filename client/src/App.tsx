import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import {Route, BrowserRouter as Router} from "react-router-dom";
import Design from "./pages/Design";
import DesignProvider from "./context/DesignProvider";
import DesignDetails from "./pages/DesignDetails";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import Feed from "./pages/Feed";
import ThemeProvider from "./context/ThemeProvider";
import Forum from "./pages/Forum";
import {ApolloClient, ApolloProvider, createHttpLink, InMemoryCache} from "@apollo/client";
import {setContext} from "@apollo/client/link/context";
import {useLocalStorage} from "./customHooks/useLocalStorage";
import PostDetails from "./components/forum/PostDetails";

const httpLink = createHttpLink({
    uri: 'http://localhost:4000/graphql'
});

const authLink = setContext(async (req, {headers}) => {
    const token = useLocalStorage('profile')?.token

    return {
        ...headers,
        headers: {
            Authorization: token ? `Bearer ${token}` : undefined
        }
    }
})

const link = authLink.concat(httpLink as any)

const client = new ApolloClient({
    link: link as any,
    cache: new InMemoryCache()
})

function App() {
    return (
        <ApolloProvider client={client}>
            <ThemeProvider>
                <Router>
                    <Navbar/>
                    <Route exact path="/login" children={<Login/>}/>
                    <Route exact path="/register" children={<Register/>}/>
                    <Route path="/profile" children={<Profile/>}/>
                    <Route path="/forum" children={<Forum/>}/>
                    <Route exact path="/design" children={<Design/>}/>
                    <Route exact path="/design/:id"
                           children={<DesignDetails id={undefined} data={undefined} fetchData={undefined}/>}
                    />
                    <Route exact path="/post/:id" children={<PostDetails />}
                    />

                    <DesignProvider>
                        <Route exact path="/feed" children={<Feed/>}/>
                    </DesignProvider>
                </Router>
            </ThemeProvider>
        </ApolloProvider>
    );
}

export default App;
