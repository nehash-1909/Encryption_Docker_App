import React,{useState,useEffect} from 'react';
import './Form.css';

const FormSuccess = ({encryptString}) => {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    var url = 'http://localhost:5000/encrypt/'+encryptString
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
    })
        .then((res) => res.json())
        .then((data) => {
           console.log(data);
           setPosts(data);
        })
        .catch((err) => {
           console.log(err.message);
        });
  }, []);
  
  return (
    <div className='form-content-right'>
      <h1 className='form-success'>Encrypted Value of {encryptString} is :</h1>
      <p className='form-right-success'>{JSON.stringify(posts)}</p>
      
    </div>
  );
};

export default FormSuccess;
