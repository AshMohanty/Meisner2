import ReactMarkdown from 'react-markdown'

export default function AIFeedback({ feedback }: { feedback: string }) {
  return (
    <div className="mt-8 prose max-w-none dark:prose-invert">
      <ReactMarkdown>{feedback}</ReactMarkdown>
    </div>
  )
}