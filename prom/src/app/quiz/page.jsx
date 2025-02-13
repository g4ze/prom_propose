
'use client'
import { useState } from 'react'
import Link from 'next/link'

export default function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState([])
  
  const questions = [
    {
      question: "What made our first prom special?",
      options: [
        "The fancy outfits",
        "The perfect photos",
        "The amazing food",
        "Being together"
      ]
    },
    {
      question: "What should we improve for Prom 2.0?",
      options: [
        "More dancing",
        "Better photos",
        "Fancier transportation",
        "Nothing - it was already perfect"
      ]
    },
    {
      question: "What's our signature couple move?",
      options: [
        "The awkward shuffle",
        "The dramatic dip",
        "The synchronized spin",
        "The laugh-until-we-snort"
      ]
    }
  ]
  
  const handleAnswer = (index) => {
    const newAnswers = [...answers]
    newAnswers[currentQuestion] = index
    setAnswers(newAnswers)
    
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    }
  }
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-blue-50 px-4 py-8">
      <main className="max-w-2xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-purple-600 mb-10">
          Our Prom Compatibility Quiz
        </h1>
        
        {currentQuestion < questions.length ? (
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl text-purple-700 font-semibold mb-6">
              {questions[currentQuestion].question}
            </h2>
            <div className="space-y-4">
              {questions[currentQuestion].options.map((option, index) => (
                <button 
                  key={index}
                  onClick={() => handleAnswer(index)}
                  className="w-full text-left py-3 px-6 rounded-lg border-2 border-purple-200 hover:border-purple-500 hover:bg-purple-50 transition-colors"
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
            <h2 className="text-3xl font-bold text-purple-600 mb-4">Quiz Complete!</h2>
            <p className="text-lg text-gray-600 mb-4">After analyzing your responses using advanced algorithms...</p>
            <h3 className="text-2xl font-bold text-pink-500 mb-6">Result: We're 100% compatible for another perfect prom night!</h3>
            <p className="text-gray-600 mb-8">No matter what you picked, we both know we're going to have an amazing time!</p>
            <Link href="/proposal" className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
              Let's Make It Official &rarr;
            </Link>
          </div>
        )}
      </main>
      
      <footer className="mt-16 text-center">    
        <Link href="/" className="text-indigo-500 hover:text-indigo-700 transition-colors">
          &larr; Back to Home
        </Link>
      </footer>
    </div>
  )
}