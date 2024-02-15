import { ComponentPropsWithoutRef, FormEvent, forwardRef, useImperativeHandle, useRef } from "react";

export type FormHandle = {
    clear: ()=>void
}

type FormProps = ComponentPropsWithoutRef<'form'> & {
    onSave: (value: unknown) => void
}

const Form = forwardRef<FormHandle, FormProps>(function Form({onSave,children, ...otherProps},ref) {
    const form = useRef<HTMLFormElement>(null)
    useImperativeHandle(ref, ()=>{
        return{
            clear(){
                console.log("Clearing");
                
                form.current?.reset()
            }    
        }
    })
    const handleSubmit = (e: FormEvent<HTMLFormElement>)=>{
        e.preventDefault()

        const formData = new FormData(e.currentTarget)
        const data = Object.fromEntries(formData)
        onSave(data)
        form.current?.reset()
    }
  return (
    <form {...otherProps} onSubmit={handleSubmit} ref={form}>
        {children}
    </form>
  )
})

export default Form