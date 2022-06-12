import React, { useEffect , useState } from 'react';
import './posts.css';
// import Data from './data.json'
import icon from '../instagram/icon.png'
import camera from '../instagram/camera.png'
import moreicon from '../instagram/more-icon.png'
import like from '../instagram/like.png'
import share from '../instagram/share.png'
import { Link } from 'react-router-dom';
import axios from 'axios'

export default function Posts() {
    const [Data,setData] = useState([])

    useEffect(()=>{  
        axios.get('http://localhost:5000/data').then((res)=>{   //axios 
            console.log(res)
            setData(res.data.posts) 
        })
    },[])
    console.log(Data)
    return (
        <>
        <header className='for-header'>
            <img className='for-icon' src={icon} alt='icon'></img>
            <h1 className='for-name'>Instagram Clone</h1>
            <Link to="/form"><img className='for-camera' src={camera} alt='camera'></img></Link>
        </header>
            {
                Data.map(post =>{
                    return(
                        <body className='main-container'>
                            <div className='inside-container'>
                                <div className='container-name'>
                                    <div className='Name'>
                                        <h1 className='profile-name'>{post.author}</h1>
                                        <label className='profile-location'><strong>{post.location}</strong></label>
                                    </div>
                                    <div>
                                        <img className='more-icon' src={moreicon} alt='icon'></img>
                                    </div>
                                </div>
                                <div className='image-display'>
                                    <img className='profile-image' src={post.img} alt='profile'></img>
                                </div>
                                <div>
                                    <img className='imglike' src={like} alt='like'></img>
                                    <img className='share' src={share} alt='share'></img>
                                    <label className='date'>{post.date}</label>
                                    <p className='like'>{post.likes}</p>
                                    <p className='description'>{post.description}</p>
                                </div>
                            </div>
                        </body>
                    )
                })
            }
        </>
    );
}