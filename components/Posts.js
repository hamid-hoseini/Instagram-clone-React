import React from 'react'
import Post from './Post'

const DUMMY_DATA = [
  {
    id: '123',
    username: "hamid_h",
    userImg: 'https://lh3.googleusercontent.com/ogw/AOh-ky0by42wLdEFCYPwPwRZ9JL7XxmORNvLElfaz_gXnQ=s128-c-mo',
    img: 'https://i.pinimg.com/originals/38/e0/f1/38e0f1baa069a4742854ddc0c59b7d41.jpg',
    caption: 'Stay with me to learn more coding...'
  },
  {
    id: '456',
    username: "mary_a",
    userImg: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1223.jpg',
    img: 'https://i.pinimg.com/474x/43/22/67/4322674cad8ce91e87849569fbb7f54a.jpg',
    caption: 'Stay with me to learn more coding...'
  }
]

function Posts() {
  return (
    <div>
      {DUMMY_DATA.map(post => (
        <Post key={post.id} id={post.id} username={post.username} userImg={post.userImg} img={post.img} caption={post.caption}/>
      ))}
    </div>
  )
}

export default Posts