'use client'
 
interface SubmitButtonProps {
  label: string;
  isPending: boolean;
  pendingLabel: string;
  classNames: string;
}

export default function SubmitButton(props: SubmitButtonProps) {
  const { label, isPending, pendingLabel, classNames } = props
 
  return (
    <button type="submit" aria-disabled={isPending} disabled={isPending} className={classNames}>
      { isPending ? pendingLabel : label }
    </button>
  )
}
