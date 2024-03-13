'use client'
 
import { useFormStatus } from 'react-dom'
 
interface SubmitButtonProps {
  label: string;
  pendingLabel: string;
  classNames: string;
}

export function SubmitButton(props: SubmitButtonProps) {
  const { pending } = useFormStatus()
  const { label, pendingLabel, classNames } = props
 
  return (
    <button type="submit" aria-disabled={pending} disabled={pending} className={classNames}>
      { pending ? pendingLabel : label }
    </button>
  )
}
