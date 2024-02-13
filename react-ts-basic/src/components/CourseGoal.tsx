import { ReactNode} from "react"

interface Props {
    title: string,
    id: number
    children: ReactNode,
    onDelete: (id: number)=> void
}
// type Props = PropsWithChildren<{title: string}>
export default function CourseGoal({title, children,id, onDelete}:Props) {
  return (
    <article>
        <div>
            <h2>{title}</h2>
            <p>{children}</p>
        </div>
        <button onClick={()=>onDelete(id)}>Delete</button>
    </article>
  )
}

// const CourseGoal:FC<Props>=({title, children})=> {
//     return (
//       <article>
//           <div>
//               <h2>{title}</h2>
//               <p>{children}</p>
//           </div>
//               <button>Delete</button>
//       </article>
//     )
//   }

//   export default CourseGoal