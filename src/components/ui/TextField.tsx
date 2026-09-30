import { useId, type InputHTMLAttributes } from 'react'
import { cn } from '../../lib/cn'

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  error?: string
}

/** Labelled input with an inline error message (linked via aria-describedby). */
export function TextField({ label, error, className, id, ...rest }: TextFieldProps) {
  const autoId = useId()
  const fieldId = id ?? autoId
  const errorId = `${fieldId}-error`

  return (
    <div>
      <label htmlFor={fieldId} className="mb-2 block text-base font-medium text-ink">
        {label}
      </label>
      <input
        id={fieldId}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? errorId : undefined}
        className={cn(
          'h-[52px] w-full rounded-full border bg-white px-5 text-base text-ink outline-none transition placeholder:text-muted focus:border-brand',
          error ? 'border-red-500' : 'border-[#c9cad0]',
          className,
        )}
        {...rest}
      />
      {error && (
        <p id={errorId} className="mt-1.5 px-2 text-sm text-red-600">
          {error}
        </p>
      )}
    </div>
  )
}
