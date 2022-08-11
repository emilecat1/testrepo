import { useEffect, useState } from "react"
import { GlobalStyles, TextField, Stack, Typography, Button, IconButton, } from "@mui/material";


function App() {
    const [posts, setPosts] = useState([])
    const [users, setUsers] = useState([])

 
    useEffect(() => {
        const getData = async () => {
            const resPosts = await fetch("https://jsonplaceholder.typicode.com/posts")
            const resUser = await fetch("https://jsonplaceholder.typicode.com/users")

            setPosts(await resPosts.json())
            setUsers(await resUser.json())
        }
        getData();
    }, [])

    if (posts.length === 0 || users.length === 0) {
        return <p>Loading</p>
    }

    return (

        <>

            <GlobalStyles
                styles={{ body: { backgroundColor: "#eafcf7" }, }}
            />

        
        <div className="App">
            <ul>
                {posts.map((post) => <li key={post.id}>{users.find(check => check.id === post.userId).name} - {post.title}</li>)}
            </ul>
        </div>

        </>
    );
}

export default App;
