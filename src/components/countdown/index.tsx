import { useState, useEffect } from 'react'

const Countdown = () => {
  const [count, setCount] = useState(3)

  useEffect(() => {
    if (count === 0) return

    const timer = setTimeout(() => {
      setCount((prev) => prev - 1)
    }, 1000)

    return () => clearTimeout(timer)
  }, [count])

  return <div className={`text-7xl font-bold text-center flex justify-center items-center h-full w-full ${count === 0 ? 'hidden' : ''}`}>{count}</div>
}

export default Countdown
