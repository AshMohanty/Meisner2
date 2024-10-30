'use client'

import { useState } from 'react'
import { Star, StarHalf } from 'lucide-react'
import { useCompletion } from 'ai/react'

interface FormData {
  location: 'inside' | 'outside'
  outside?: {
    want: string
    wantReason: string
    obstacle: string
    momentBefore: string
    feelingAboutInside: string
    tactics: string
    stakes: string
  }
  inside?: {
    want: string
    wantReason: string
    obstacle: string
    momentBefore: string
    activity: string
    adverb: string
    noun: string
    activityObjectiveConnection: string
    expectedVisitor: string
    feelingAboutExpected: string
    feelingAboutPartner: string
  }
  actorType: string
}

interface Scores {
  objectiveClarity: number
  emotionalDepth: number
  conflictAndTension: number
  immediateContext: number
  relationshipDynamics: number
  actionPlan: number
  urgency: number
  activityRelevance: number
  characterRelationships: number
  overallPreparation: number
  actorTypeIntegration: number
  personalConnection: number
}

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

export default function Home() {
  const [scores, setScores] = useState<Scores>({
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
    actorTypeIntegration: 0,
    personalConnection: 0
  })

  const { complete, completion, isLoading } = useCompletion({
    api: '/api/generate-feedback',
  })

  const handleSubmit = async (formData: FormData) => {
    const response = await complete(formData)
    
    // Parse scores from the response
    const scoreRegex = /(\w+):\s*(\d+(\.\d+)?)/g
    let match
    const newScores = { ...scores }
    while ((match = scoreRegex.exec(response)) !== null) {
      const [_, category, score] = match
      newScores[category.toLowerCase().replace(/\s+/g, '') as keyof Scores] = parseFloat(score)
    }
    setScores(newScores)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 p-4">
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-6">
        <h1 className="text-3xl font-bold mb-6">Meisner Method: "Coming In" Exercise</h1>
        <p className="text-gray-600">Welcome to the Meisner Method Training Assistant.</p>
      </div>
    </div>
  )
}
