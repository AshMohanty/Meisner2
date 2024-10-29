'use client'

import { useState } from 'react'
import { Star, StarHalf } from 'lucide-react'
import ExerciseForm from '@/components/exercise-form'
import AIFeedback from '@/components/ai-feedback'
import { useCompletion } from 'ai/react'

function StarRating({ score }: { score: number }) {
  const fullStars = Math.floor(score)
  const hasHalfStar = score % 1 >= 0.5

  return (
    <div className="flex items-center">
      {[...Array(5)].map((_, i) => {
        if (i < fullStars) {
          return <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
        } else if (i === fullStars && hasHalfStar) {
          return <StarHalf key={i} className="w-5 h-5 text-yellow-400 fill-current" />
        } else {
          return <Star key={i} className="w-5 h-5 text-gray-300" />
        }
      })}
      <span className="ml-2 text-sm text-gray-600">{score.toFixed(1)}</span>
    </div>
  )
}

export default function ExercisePage() {
  const [scores, setScores] = useState({
    objectiveClarity: 0,
    emotionalDepth: 0,
    conflictAndTension: 0,
    immediateContext: 0,
    relationshipDynamics: 0,
    actionPlan: 0,
    urgency: 0,
    activityRelevance: 0,
    characterRelationships: 0,
    overallPreparation: 0,
    roleUnderstanding: 0,
    personalConnection: 0
  })

  const { complete, completion, isLoading } = useCompletion({
    api: '/api/generate-feedback',
  })

  const handleSubmit = async (formData) => {
    const response = await complete(formData)
    
    // Parse scores from the response
    const scoreRegex = /(\w+):\s*(\d+(\.\d+)?)/g
    let match
    const newScores = { ...scores }
    while ((match = scoreRegex.exec(response)) !== null) {
      const [_, category, score] = match
      newScores[category.toLowerCase().replace(/\s+/g, '')] = parseFloat(score)
    }
    setScores(newScores)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 p-4 dark:bg-gradient-to-b dark:from-gray-800 dark:to-gray-900">
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-6">
        <h1 className="text-3xl font-bold mb-6">Meisner Method: "Coming In" Exercise</h1>
        <ExerciseForm onSubmit={handleSubmit} />
        {isLoading && <p className="mt-4">Generating feedback...</p>}
        {completion && (
          <>
            <AIFeedback feedback={completion} />
            <div className="mt-6 space-y-4">
              <h2 className="text-xl font-semibold">Performance Scores:</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {Object.entries(scores).map(([key, value]) => (
                  value > 0 && (
                    <div key={key}>
                      <p className="font-medium">{key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}:</p>
                      <StarRating score={value} />
                    </div>
                  )
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  )
}