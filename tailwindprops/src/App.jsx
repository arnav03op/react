import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from '../components/card'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-red-400 text-white rounded-l'>Tailor swift</h1>
      <figure class="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
      <img class="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="https://i.guim.co.uk/img/media/23526db7bb076e0931368145a0022f920d651ea9/0_0_2411_3521/master/2411.jpg?width=445&dpr=1&s=none" alt="" width="384" height="512"/>
  <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
    <blockquote>
      <p class="text-lg font-medium">
        “In melodies, I find my story,
         From heartbreak to glory,
         Thank you, fans, for the journey.”
      </p>
    </blockquote>
    <figcaption class="font-medium">
      <div class="text-sky-500 dark:text-sky-400">
        Swifty
      </div>
      <div class="text-slate-700 dark:text-slate-500">
        Singer,Popstar
      </div>
    </figcaption>
  </div>
</figure>

<Card user_name="Taylor" link="https://www.taylorswift.com/" btx = "Visit me" im="https://m.media-amazon.com/images/M/MV5BM2E0NjA5MDktYmUxOC00NWUzLWJlNzMtZmJlNjU1ODZiMjgyXkEyXkFqcGdeQXVyMTY3ODkyNDkz._V1_.jpg"/>
<Card user_name="Alexandra" link="https://www.instagram.com/alexandradaddario/?hl=en" btx = "See me" im="https://media.assettype.com/filmcompanion%2F2023-10%2Fb86759df-33a5-4cc9-970c-11a927a142b7%2F4.png"/>

    </>
  )
}

export default App
