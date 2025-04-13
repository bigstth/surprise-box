import { useEffect, useState } from 'react'
import { Button } from './components/ui/button'
import { motion } from 'motion/react'
import { Howl } from 'howler'

import BOX_IMG from './assets/box.jpg'
import ItemOne from './assets/1.png'
import ItemTwo from './assets/2.webp'
import ItemThree from './assets/3.avif'
import ItemFour from './assets/4.avif'
import Countdown from './components/countdown'
import ItemList from './components/item-list'

const ITEM_LIST = [
  { name: 'Nike Sportswear', src: ItemOne },
  { name: 'Pixi Tint Fix Lipstick', src: ItemTwo },
  { name: 'Cathy Doll Moistful Bear Lip Glaze', src: ItemThree },
  { name: 'Skinfood Carrot Carotene Calming Water Pad', src: ItemFour },
]

function App() {
  const sound = new Howl({
    src: ['/song.MP3'],
    volume: 0.05,
  })

  const [showCountdown, setShowCountdown] = useState(false)
  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    sound.play()
  }, [])

  const startUnbox = () => {
    setShowCountdown(true)
    setTimeout(() => {
      setShowCountdown(false)
      setIsActive(true)
    }, 3000)
  }

  return (
    <div className="max-md:mt-4 bg-[#fff2c6] w-full flex flex-col justify-center items-center lg:h-screen">
      <div className="card relative">
        <motion.div animate={{ rotateY: isActive ? 180 : 0 }} transition={{ duration: 0.5 }} className="w-full p-4">
          <img
            src={BOX_IMG}
            alt="Unbox"
            className={`w-full xl:max-w-[500px] rounded-xl ${isActive ? 'filter brightness-0 invert' : ''} ${isActive ? 'transform transition-transform duration-500 delay-[1000ms] xl:scale-150 max-lg:scale-0' : ''}`}
          />
        </motion.div>

        {showCountdown && (
          <div className="absolute top-[50%] -translate-y-1/2 left-1/2 -translate-x-1/2 py-3 px-5 bg-background rounded-xl">
            <Countdown />
          </div>
        )}

        {isActive && <ItemList items={ITEM_LIST} />}
      </div>

      <motion.div
        animate={{
          rotate: [0, 5, -5, 5, 0],
          transition: {
            duration: 0.5,
            ease: 'easeInOut',
            repeat: Infinity,
            repeatDelay: 0,
            delay: 0,
          },
        }}
      >
        <Button
          size="lg"
          className={`text-xl cursor-pointer mt-4 border-2 border-[#c06fff] bg-[#ff89d4] text-background font-bold hover:border-[#c06fff] hover:bg-[#ff5dc4] ${showCountdown || isActive ? 'hidden' : ''}`}
          onClick={startUnbox}
        >
          Unbox
        </Button>
      </motion.div>
    </div>
  )
}

export default App
