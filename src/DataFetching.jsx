import axios from 'axios'
import React, {useState, useEffect} from 'react'

const DataFetching = () => {

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    useEffect(() => {

        const fetchPosts = async () => {
            setLoading(true)

            try {
                const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
                setData(response.data)
                setLoading(false)
                setError(false)
            } catch (error) {
                setLoading(false)
                setError(true)
            }
        }
        fetchPosts()
    }, [])

  return (
    <>
        {loading && 'Loading...'}
        {error && 'Oops, you made a bad request. Try again Later'}
        {data.map(post => {
            const {id, title, body} = post
            return (
                <div key={id}>
                    <h5>{id}</h5>
                    <h3>{title}</h3>
                    <p>{body}</p>
                    <hr />
                </div>
            )
        })}
    </>
  )
}

export default DataFetching