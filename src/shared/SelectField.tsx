interface Option {
    value: string
    label: string
}

export const SelectField = ({ 
  deafultValue, 
  onChange, 
  options }: {
    deafultValue: string
    onChange: (value: string) => void
    options: Option[]
  }) => {
    return (
        <select defaultValue={deafultValue} onChange={(e) => onChange(e.target.value)}>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
    )
}