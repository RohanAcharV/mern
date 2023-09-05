import {useState,useEffect} from 'react';
import axios from 'axios';


const api = axios.create({
  baseURL: 'https://mern-3dht.onrender.com/api' 
});

function Message(){
    const [messg,setmessg]=useState([]);
    useEffect(() => {
      fetchmessg();
    }, []);
    
    const fetchmessg = async () => {
      try {
        const response = await api.get(`/getmessg`);
        setmessg(response.data);
      } catch (error) {
        console.error('Error fetching groups:', error);
      }
    }
  
    const handleSubmit = async(e)=>{
      e.preventDefault();
  
      const newmessg=e.target.messg.value
      if(newmessg===''){
        alert('Message cannot be empty');
        return;
      }
      const newdata={
        messg:newmessg
      };
  
      try{
        await api.post('addmessg', newdata);
        fetchmessg();
      }
      catch{
        console.error('Error adding a new message');
      }
  
      e.target.messg.value='';
    }
    return (
  <>
  <div>
    <h1>Add message</h1><br/>
    <form method='post' onSubmit={handleSubmit}>
    <input type='text' placeholder='Enter message' name='messg'/>
    <input type='submit' value='Add'/>
    </form>
  </div>
  <br/>
  <hr/>
  
  <div>
  <h1>Messages</h1>
  
  <ul>
    {
      messg.map((m)=>(
        <li>{m.messg}</li>
      ))
    }
  </ul>
  </div>
  </>  
    );
}

export default Message;