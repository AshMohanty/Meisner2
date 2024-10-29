'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ExerciseForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    location: 'outside',
    outside: {
      want: '',
      wantReason: '',
      obstacle: '',
      momentBefore: '',
      feelingAboutInside: '',
      tactics: '',
      stakes: ''
    },
    inside: {
      want: '',
      wantReason: '',
      obstacle: '',
      momentBefore: '',
      activity: '',
      adverb: '',
      noun: '',
      activityObjectiveConnection: '',
      expectedVisitor: '',
      feelingAboutExpected: '',
      feelingAboutPartner: ''
    },
    roles: {
      desiredRole: '',
      roleTraits: '',
      challengesForRole: '',
      personalConnection: ''
    }
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    const [section, field] = name.split('.')
    setFormData(prevData => ({
      ...prevData,
      [section]: {
        ...prevData[section],
        [field]: value
      }
    }))
  }

  const handleLocationChange = (value) => {
    setFormData(prevData => ({
      ...prevData,
      location: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit(formData)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <Tabs defaultValue="outside" onValueChange={handleLocationChange}>
        <TabsList>
          <TabsTrigger value="outside">Outside</TabsTrigger>
          <TabsTrigger value="inside">Inside</TabsTrigger>
          <TabsTrigger value="roles">Roles</TabsTrigger>
        </TabsList>
        <TabsContent value="outside">
          <div className="space-y-4">
            <div>
              <Label htmlFor="outside.want">1. What Do I Want? (What specific outcome am I hoping for when the person answers the door?)</Label>
              <Textarea id="outside.want" name="outside.want" value={formData.outside.want} onChange={handleChange} className="mt-1" />
            </div>
            <div>
              <Label htmlFor="outside.wantReason">2. Why Do I Want It? (Why is this important to me, and what deeper need am I trying to fulfill?)</Label>
              <Textarea id="outside.wantReason" name="outside.wantReason" value={formData.outside.wantReason} onChange={handleChange} className="mt-1" />
            </div>
            <div>
              <Label htmlFor="outside.obstacle">3. What's in the Way? (What obstacles or fears might prevent me from achieving what I want at the door?)</Label>
              <Textarea id="outside.obstacle" name="outside.obstacle" value={formData.outside.obstacle} onChange={handleChange} className="mt-1" />
            </div>
            <div>
              <Label htmlFor="outside.momentBefore">4. What Just Happened? (The Moment Before - What emotional or physical state am I bringing with me to the door?)</Label>
              <Textarea id="outside.momentBefore" name="outside.momentBefore" value={formData.outside.momentBefore} onChange={handleChange} className="mt-1" />
            </div>
            <div>
              <Label htmlFor="outside.feelingAboutInside">5. How Do I Feel About the Person Inside? (What is my relationship to the person on the other side, and how do I feel about them in this moment?)</Label>
              <Textarea id="outside.feelingAboutInside" name="outside.feelingAboutInside" value={formData.outside.feelingAboutInside} onChange={handleChange} className="mt-1" />
            </div>
            <div>
              <Label htmlFor="outside.tactics">6. How Will I Try to Get What I Want? (What approach or tactic am I going to try first when they open the door?)</Label>
              <Textarea id="outside.tactics" name="outside.tactics" value={formData.outside.tactics} onChange={handleChange} className="mt-1" />
            </div>
            <div>
              <Label htmlFor="outside.stakes">7. What's at Stake if I Don't Get What I Want?</Label>
              <Textarea id="outside.stakes" name="outside.stakes" value={formData.outside.stakes} onChange={handleChange} className="mt-1" />
            </div>
          </div>
        </TabsContent>
        <TabsContent value="inside">
          <div className="space-y-4">
            <div>
              <Label htmlFor="inside.want">1. What Do I Want? (What is my overall objective in this scene?)</Label>
              <Textarea id="inside.want" name="inside.want" value={formData.inside.want} onChange={handleChange} className="mt-1" />
            </div>
            <div>
              <Label htmlFor="inside.wantReason">2. Why Do I Want It? (Why is this important to me, and what deeper need am I trying to fulfill?)</Label>
              <Textarea id="inside.wantReason" name="inside.wantReason" value={formData.inside.wantReason} onChange={handleChange} className="mt-1" />
            </div>
            <div>
              <Label htmlFor="inside.obstacle">3. What's in the Way? (What obstacles or fears might prevent me from achieving what I want?)</Label>
              <Textarea id="inside.obstacle" name="inside.obstacle" value={formData.inside.obstacle} onChange={handleChange} className="mt-1" />
            </div>
            <div>
              <Label htmlFor="inside.momentBefore">4. What Just Happened? (The Moment Before - What emotional or physical state am I in at the start of the scene?)</Label>
              <Textarea id="inside.momentBefore" name="inside.momentBefore" value={formData.inside.momentBefore} onChange={handleChange} className="mt-1" />
            </div>
            <div>
              <Label htmlFor="inside.activity">5. What activity am I doing?</Label>
              <Textarea id="inside.activity" name="inside.activity" value={formData.inside.activity} onChange={handleChange} className="mt-1" />
            </div>
            <div>
              <Label htmlFor="inside.adverb">Adverb (e.g., "most sincere", "funniest")</Label>
              <Input type="text" id="inside.adverb" name="inside.adverb" value={formData.inside.adverb} onChange={handleChange} className="mt-1" />
            </div>
            <div>
              <Label htmlFor="inside.noun">Noun (e.g., "apology", "imitation")</Label>
              <Input type="text" id="inside.noun" name="inside.noun" value={formData.inside.noun} onChange={handleChange} className="mt-1" />
            </div>
            <div>
              <Label htmlFor="inside.activityObjectiveConnection">6. How will this activity tie to my objective?</Label>
              <Textarea id="inside.activityObjectiveConnection" name="inside.activityObjectiveConnection" value={formData.inside.activityObjectiveConnection} onChange={handleChange} className="mt-1" />
            </div>
            <div>
              <Label htmlFor="inside.expectedVisitor">7. Who am I expecting at the door?</Label>
              <Input type="text" id="inside.expectedVisitor" name="inside.expectedVisitor" value={formData.inside.expectedVisitor} onChange={handleChange} className="mt-1" />
            </div>
            <div>
              <Label htmlFor="inside.feelingAboutExpected">8. How do I feel about who I'm expecting?</Label>
              <Textarea id="inside.feelingAboutExpected" name="inside.feelingAboutExpected" value={formData.inside.feelingAboutExpected} onChange={handleChange} className="mt-1" />
            </div>
            <div>
              <Label htmlFor="inside.feelingAboutPartner">9. How do I feel about my scene partner?</Label>
              <Textarea id="inside.feelingAboutPartner" name="inside.feelingAboutPartner" value={formData.inside.feelingAboutPartner} onChange={handleChange} className="mt-1" />
            </div>
          </div>
        </TabsContent>
        <TabsContent value="roles">
          <div className="space-y-4">
            <div>
              <Label htmlFor="roles.desiredRole">1. What role or character type do you want to work on?</Label>
              <Input type="text" id="roles.desiredRole" name="roles.desiredRole" value={formData.roles.desiredRole} onChange={handleChange} className="mt-1" />
            </div>
            <div>
              <Label htmlFor="roles.roleTraits">2. What are the key traits or characteristics of this role?</Label>
              <Textarea id="roles.roleTraits" name="roles.roleTraits" value={formData.roles.roleTraits} onChange={handleChange} className="mt-1" />
            </div>
            <div>
              <Label htmlFor="roles.challengesForRole">3. What challenges do you anticipate in portraying this role?</Label>
              <Textarea id="roles.challengesForRole" name="roles.challengesForRole" value={formData.roles.challengesForRole} onChange={handleChange} className="mt-1" />
            </div>
            <div>
              <Label htmlFor="roles.personalConnection">4. How does this role connect to your personal experiences or emotions?</Label>
              <Textarea id="roles.personalConnection" name="roles.personalConnection" value={formData.roles.personalConnection} onChange={handleChange} className="mt-1" />
            </div>
          </div>
        </TabsContent>
      </Tabs>
      <Button type="submit">Submit</Button>
    </form>
  )
}