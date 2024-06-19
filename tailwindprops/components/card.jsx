import React from 'react'


function Card({user_name,link,btx,im}){
    return(
        <>
        <div class="relative h-[400px] w-[300px] rounded-md mb-4">
  <img
    src={im}
    alt="AirMax Pro"
    class="z-0 h-full w-full rounded-md object-cover"
  />
  <div class="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
  <div class="absolute bottom-4 left-4 text-left">
    <h1 class="text-lg font-semibold text-white">{user_name}</h1>
    <p class="mt-2 text-sm text-gray-300">
    Arnav, your energy pulls me in, your passion sets my heart on fire. Every moment with you feels like a beautiful melody that I never want to end. Keep shining brightly, enchanting the world with your amazing spirit!
    </p>
    {/* <button class="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-pink-400">
      {btx} →
    </button> */}
    <a href = {link}
    className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-pink-400">
    {btx} →
    </a>
  </div>
</div>
        </>
    )
}

export default Card
