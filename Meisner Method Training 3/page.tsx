import Link from 'next/link'
import { Button } from "@/components/ui/button"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 flex flex-col items-center justify-center p-4">
      <main className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-6">Meisner Method Training Assistant</h1>
        <p className="text-xl mb-8">
          Welcome to your personal Meisner method training assistant. This tool is designed to help you prepare for the "coming in" exercise and receive AI-generated feedback on your approach.
        </p>
        <Button asChild>
          <Link href="/exercise">Start Exercise</Link>
        </Button>
      </main>
    </div>
  )
}