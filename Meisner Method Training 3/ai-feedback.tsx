import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

export default function AIFeedback({ feedback }) {
  return (
    <Card className="mt-8">
      <CardHeader>
        <CardTitle>AI Feedback</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="whitespace-pre-wrap">{feedback}</p>
      </CardContent>
    </Card>
  )
}