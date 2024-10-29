'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"

export default function ExerciseForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    entrance: '',
    momentBefore: '',
    doing: '',
    objective: '',
    pointOfView: '',
    location: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit(formData)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <Label htmlFor="entrance">Are you coming inside or outside?</Label>
        <RadioGroup id="entrance" name="entrance" value={formData.entrance} onValueChange={(value) => handleChange({ target: { name: 'entrance', value } })}>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="inside" id="inside" />
            <Label htmlFor="inside">Inside</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="outside" id="outside" />
            <Label htmlFor="outside">Outside</Label>
          </div>
        </RadioGroup>
      </div>
      <div>
        <Label htmlFor="momentBefore">What just happened to my character before this moment?</Label>
        <Textarea id="momentBefore" name="momentBefore" value={formData.momentBefore} onChange={handleChange} className="mt-1" />
      </div>
      <div>
        <Label htmlFor="doing">What am I physically doing in this moment?</Label>
        <Input type="text" id="doing" name="doing" value={formData.doing} onChange={handleChange} className="mt-1" />
      </div>
      <div>
        <Label htmlFor="objective">What do I want from my partner in this moment?</Label>
        <Textarea id="objective" name="objective" value={formData.objective} onChange={handleChange} className="mt-1" />
      </div>
      <div>
        <Label htmlFor="pointOfView">How do I feel about my partner, and what's my attitude toward them?</Label>
        <Textarea id="pointOfView" name="pointOfView" value={formData.pointOfView} onChange={handleChange} className="mt-1" />
      </div>
      <div>
        <Label htmlFor="location">Where is this scene happening?</Label>
        <Input type="text" id="location" name="location" value={formData.location} onChange={handleChange} className="mt-1" />
      </div>
      <Button type="submit">Submit</Button>
    </form>
  )
}