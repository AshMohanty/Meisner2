'use client'

import { useState } from 'react'
import ExerciseForm from './exercise-form'
import AIFeedback from './ai-feedback'

export default function ExercisePage() {
  const [feedback, setFeedback] = useState('')

  const handleSubmit = async (formData) => {
    // In a real application, you would send this data to your backend
    // and receive AI-generated feedback. For this example, we'll simulate it.
    const simulatedFeedback = `
Based on your responses:

Entrance: ${formData.entrance}
Moment Before: "${formData.momentBefore}"
Doing: "${formData.doing}"
Objective: "${formData.objective}"
Point of View: "${formData.pointOfView}"
Location: "${formData.location}"

Feedback:
1. Your "moment before" provides a strong emotional context. Consider how this recent experience might physically manifest in your body language.

2. The activity you've chosen (${formData.doing}) is a good anchor. Remember to fully engage with this task while remaining open to your partner.

3. Your objective is clear. Keep this want at the forefront of your mind throughout the exercise, letting it drive your reactions and responses.

4. Your attitude towards your partner is well-defined. Allow this point of view to color your interactions, but remain responsive to any shifts in the dynamic.

5. The location you've chosen provides a solid framework for the scene. Use the environment to inform your behavior and choices.

Remember, in the Meisner technique, the key is to "live truthfully under imaginary circumstances." Stay present, react honestly to your partner, and let your prepared work inform your performance without constraining it.
`
    setFeedback(simulatedFeedback)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 p-4">
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-6">
        <h1 className="text-3xl font-bold mb-6">Meisner Method: "Coming In" Exercise</h1>
        <ExerciseForm onSubmit={handleSubmit} />
        {feedback && <AIFeedback feedback={feedback} />}
      </div>
    </div>
  )
}