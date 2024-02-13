import { FormEvent, useRef } from "react"

interface NewGoalProps {
  onAddGoal: (goal: string, summary: string)=> void
}

export default function NewGoal({onAddGoal}:NewGoalProps) {
  const goal = useRef<HTMLInputElement>(null)
  const summary = useRef<HTMLInputElement>(null)
  
  const handleSubmit = (e: FormEvent<HTMLFormElement>)=>{
    e.preventDefault()
    
    const enteredGoal = goal.current!.value
    const enteredSummary = summary.current!.value
    
    e.currentTarget.reset()
    
    onAddGoal(enteredGoal,enteredSummary)
  }
  
  return (
    <form onSubmit={handleSubmit}> 
        <p>
          <label htmlFor="goal">Your goal</label>
          <input type="text" name="goal" id="goal" ref={goal} />
        </p>  
        <p>
          <label htmlFor="summary">Short summary</label>
          <input type="text" name="summary" id="summary" ref={summary} />
        </p>
        <button>Add goal</button>
      </form>
  )
}
