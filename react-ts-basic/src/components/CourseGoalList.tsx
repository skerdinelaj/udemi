import CourseGoal from "./CourseGoal"
import { CourseGoal as CGoal} from "../App"
import InfoBox from "./InfoBox"
import { ReactNode } from "react"
interface CourseGoalListProps {
    goals: CGoal[]
    onDelete: (id: number)=> void
  }
export default function CourseGoalList({goals, onDelete}: CourseGoalListProps) {
  
  if(goals.length === 0){
    return(
      <InfoBox mode="hint">
        You have no corse goals yet. Start adding some!
      </InfoBox>
    )
  }

  let warningBox: ReactNode

  if(goals.length >= 4){
    warningBox = (
      <InfoBox mode="warning" severity="high">You are collecting a lot of goals. Don't put to much on your plate.</InfoBox>
      )
  }

  return (
    <>
    {warningBox}
    <ul>
        {goals.map(goal=>(
          <li key={goal.id}>
            <CourseGoal id={goal.id} onDelete={onDelete} title={goal.title}>
              <p>{goal.description}</p>
            </CourseGoal>
          </li>
        ))}
      </ul>
    </>
  )
}
