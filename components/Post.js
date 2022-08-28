import React from 'react'
import {
  SearchIcon,
  PlusCircleIcon,
  UserGroupIcon,
  HeartIcon,
  PaperAirplaneIcon,
  MenuIcon,
  DotsHorizontalIcon,
  ChatIcon,
  BookmarkIcon,
  EmojiHappyIcon
} from "@heroicons/react/outline";
import {
  HeartIcon as HeartIconSolid
} from "@heroicons/react/solid";
import { useSession } from 'next-auth/react';

function Post({ id, username, img, userImg, caption }) {
  const { data: session } = useSession();

  return (
    <div className='bg-white my-7 border rounded-sm'>
      {/* Header */}
      <div className='flex items-center p-5'>
        <img src={userImg} alt="" className='rounded-full h-12 w-12 border p-1 mr-3 '/>
        <p className='flex-1 font-bold'>{username}</p>
        <DotsHorizontalIcon className='h-5'/>
      </div>
      {/* img */}
      <img src={img} alt="" className='object-cover w-full'/>
      {/* Buttons */}
      {session && (
        <div className='flex justify-between px-4 pt-4'>
          <div className='flex space-x-4'>
            <HeartIcon className='btn'/>
            <ChatIcon className='btn'/>
            <PaperAirplaneIcon className='btn rotate-45'/>
          </div>
        
        <BookmarkIcon className='btn'/>
        </div>
      )}

      {/* caption */}
      <p className='p-5 truncate'>
        <span className='font-bold mr-1'>{username}</span>
        {caption}
      </p>
      {/* comments */}
      {/* input box */}
      {session && (
        <form className='flex items-center p-4'>
          <EmojiHappyIcon className='h-7 mr-2'/>
          <input type="text" 
            placeholder='Add a comment...'
            className='border-none flex-1 focus:ring-0 outline-none'/>
            <button className='font-semibold text-blue-400'>Post</button>
        </form>
      )}
    </div>
  )
}

export default Post