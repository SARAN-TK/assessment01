import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';

const Form = () => {
  const [blogName, setBlogName] = useState('');
  const [description, setDescription] = useState('');
  const [authorName, setAuthorName] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    
    setBlogName('');
    setDescription('');
    setAuthorName('');
  };

  return (
    <div>

    <br></br>    <br></br> <br /><br /> <br /> <br /> <br />
      <h1>ADD BLOG</h1> <br /> 
      <form onSubmit={handleSubmit}>
                  <TextField
                    variant='outlined'
                    label="Blog Name"
                    value={blogName}
                    onChange={e => setBlogName(e.target.value)}
                  /> <br /> <br /> <br />
                
                  <TextField
                  variant='outlined'
                    label="Description"
                    multiline
                    rows={4}
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                  /> <br /> <br /> <br />
                
                  <TextField
                  variant='outlined'
                    label="Author Name"
                    value={authorName}
                    onChange={e => setAuthorName(e.target.value)}
                  /> <br /> <br /> <br />
               
                  <Button type="submit" variant="contained" color="error">Submit</Button>
                  </form>       
    </div>
  );
};

export default Form;