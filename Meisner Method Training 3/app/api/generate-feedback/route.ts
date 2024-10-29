import { Configuration, OpenAIApi } from 'openai-edge'
import { OpenAIStream, StreamingTextResponse } from 'ai'

const config = new Configuration({
  apiKey: process.env.OPENAI_API_KEY
})
const openai = new OpenAIApi(config)

export const runtime = 'edge'

export async function POST(req: Request) {
  const { location, formData } = await req.json()

  const prompt = `You are an AI acting coach specializing in the Meisner technique, as taught by Sanford Meisner and elaborated on in D.W. Brown's book "You Can ACT!". 
  
  Analyze the following information for a student practicing the "${location}" role in a Meisner "coming in" exercise:

  ${Object.entries(formData).map(([key, value]) => `${key}: ${value}`).join('\n')}

  Provide detailed feedback on the student's preparation, including:
  1. Strengths in their approach
  2. Areas for improvement
  3. Suggestions for deepening emotional connection and truthfulness
  4. How well they've applied Meisner's principles
  5. Advice for staying present and responsive in the moment

  Also, provide numerical scores (1-5) for the following categories:
  - Objective Clarity
  - Emotional Depth
  - Conflict and Tension
  - Immediate Context
  ${location === 'outside' ? 
    `- Relationship Dynamics
    - Action Plan
    - Urgency` : 
    `- Activity Relevance
    - Character Relationships
    - Overall Preparation`
  }

  Format your response in Markdown, with clear headings for each section.`

  const response = await openai.createChatCompletion({
    model: 'gpt-3.5-turbo',
    stream: true,
    messages: [{ role: 'user', content: prompt }],
  })

  const stream = OpenAIStream(response)
  return new StreamingTextResponse(stream)
}