'use client'

interface InputProps {
  type: 'text'|'number'|'date'
  label: string
  nameAndId: string
  value: string|number|undefined
  placeholder: string|undefined
  required: boolean
}

export function Input(props: InputProps) {
  return (
    <div className="sm:col-span-10">
      <label htmlFor={props.nameAndId} className="block leading-6 mb-1">{props.label}</label>
      <div className="flex rounded-md shadow-sm ring-2 ring-inset ring-gray-500 focus-within:ring-inset focus-within:ring-gray-400 sm:max-w-md">
        <input type={props.type} required={props.required} id={props.nameAndId} name={props.nameAndId} defaultValue={props.value} placeholder={props.placeholder}
          className="block flex-1 border-0 bg-transparent py-1.5 pl-2 focus:ring-0 sm:leading-6 placeholder:text-gray-500"/>
      </div>
    </div>
  )
}

interface TextareaProps {
  label: string
  nameAndId: string
  value: string|number|undefined
  placeholder: string|undefined
  required: boolean
}

export function Textarea(props: TextareaProps) {
  return (
    <div className="sm:col-span-10">
      <label htmlFor={props.nameAndId} className="block leading-6 mb-1">{props.label}</label>
      <div className="flex rounded-md shadow-sm ring-2 ring-inset ring-gray-500 focus-within:ring-inset focus-within:ring-gray-400 sm:max-w-md">
        <textarea required={props.required} id={props.nameAndId} name={props.nameAndId} defaultValue={props.value} placeholder={props.placeholder}
          className="block flex-1 border-0 bg-transparent py-1.5 pl-2 focus:ring-0 sm:leading-6 placeholder:text-gray-500"/>
      </div>
    </div>
  )
}

interface SelectProps {
  label: string
  nameAndId: string
  options: { label: string; value: string }[];
  selectedValue: string|undefined
  required: boolean
}

export function Select(props: SelectProps) {
  return (
    <div className="sm:col-span-10">
      <label htmlFor={props.nameAndId} className="block leading-6 mb-1">{props.label}</label>
      <div className="flex rounded-md shadow-sm ring-2 ring-inset ring-gray-500 focus-within:ring-inset focus-within:ring-gray-400 sm:max-w-md">
        <select required={props.required} id={props.nameAndId} name={props.nameAndId} defaultValue={props.selectedValue}
          className="block flex-1 border-0 bg-transparent py-1.5 pl-2 focus:ring-0 sm:leading-6 placeholder:text-gray-500">
            {props.options.map(option => <option key={option.value} value={option.value}>{option.label}</option>)}
        </select>
      </div>
    </div>
  )
}
