import ReactMarkdown from 'react-markdown'
import { Card, CardContent } from "@/components/ui/card"

export default function AIFeedback({ feedback }: { feedback: string }) {
  return (
    <Card className="mt-8">
      <CardContent className="prose max-w-none dark:prose-invert">
        <ReactMarkdown>{feedback}</ReactMarkdown>
      </CardContent>
    </Card>
  )
}
