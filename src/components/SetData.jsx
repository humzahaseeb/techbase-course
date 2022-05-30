import axios from "axios";
import { useState } from "react";

const defaultFormData = {
  title: "",
  body: "",
  userId: 1
};

export default function SetData() {

  const [formData, setFormData] = useState(defaultFormData);
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(false);

  const { title, body } = formData;

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const onSubmit = async(e) => {
    e.preventDefault();

    try {
        await axios.post('https://jsonplaceholder.typicode.com/posts', formData)
        setSuccess(true)
        setError(false)
    } catch (error) {
        setError(true)
        setSuccess(false)
    }

    setFormData(defaultFormData);
  };


  return (
    <>
      <h1>Form</h1>
      <p>Create a post</p>

      <form onSubmit={onSubmit}>
        <label htmlFor="title">Title</label>
        <br />
        <input type="text" id="title" value={title} onChange={onChange} />
        <br />
        <br />
        <label htmlFor="body">Body</label>
        <br />
        <input type="text" id="body" value={body} onChange={onChange} />
        <br />
        <br />
        <button type="submit">Upload post</button>
      </form>
      <br />

      {success && <h3>Post upload has been succeeded</h3>}
      {error && <h3>Oops, could not upload data to the server</h3>}
    </>
  );
}