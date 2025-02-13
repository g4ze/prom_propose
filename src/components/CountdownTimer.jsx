"use client"
import { useState, useEffect } from 'react'

export function CountdownTimer({ targetDate }) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })
  const [isExpired, setIsExpired] = useState(false)

  useEffect(() => {
    // Parse the targetDate if it's a string
    const parsedDate = targetDate instanceof Date ? targetDate : new Date(targetDate)
    
    // Check if the parsed date is valid
    if (isNaN(parsedDate.getTime())) {
      console.error("Invalid date provided to CountdownTimer:", targetDate)
      setIsExpired(true)
      return
    }
    
    const targetTime = parsedDate.getTime()
    
    const interval = setInterval(() => {
      const now = new Date().getTime()
      const difference = targetTime - now
      
      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24))
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
        const seconds = Math.floor((difference % (1000 * 60)) / 1000)
        
        setTimeLeft({ days, hours, minutes, seconds })
        setIsExpired(false)
      } else {
        setIsExpired(true)
        clearInterval(interval)
      }
    }, 1000)
    
    return () => clearInterval(interval)
  }, [targetDate])

  if (isExpired) {
    return (
      <div className="mt-10">
        <h3 className="text-xl font-semibold text-center text-indigo-700 mb-4">The day has arrived!</h3>
        <p className="text-center text-gray-600 italic">Time to make it happen 💍</p>
      </div>
    )
  }

  return (
    <div className="mt-10">
      <h3 className="text-xl font-semibold text-center text-indigo-700 mb-4">Countdown to the Prom:</h3>
      <div className="flex justify-center space-x-4 sm:space-x-8">
        <div className="flex flex-col items-center">
          <span className="text-3xl font-bold text-purple-600">{timeLeft.days}</span>
          <span className="text-sm text-indigo-500">Days</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-3xl font-bold text-purple-600">{timeLeft.hours}</span>
          <span className="text-sm text-indigo-500">Hours</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-3xl font-bold text-purple-600">{timeLeft.minutes}</span>
          <span className="text-sm text-indigo-500">Minutes</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-3xl font-bold text-purple-600">{timeLeft.seconds}</span>
          <span className="text-sm text-indigo-500">Seconds</span>
        </div>
      </div>
      <p className="text-center mt-4 text-gray-600 italic">Because timing is everything (especially the second time around)</p>
    </div>
  )
}