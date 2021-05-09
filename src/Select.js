import styled from 'styled-components'
import { FaTimes as CancelIcon } from 'react-icons/fa'
import { SpinnerRing } from './Spinner'

const Select = ({
  className,
  loading,
  disabled,
  value,
  onChange,
  onClear,
  name,
  error,
  errorMessage,
  selectOptions,
  placeholder
}) => {
  // const {err, message} = {...error}
  return (
    <Wrapper className={className}>
      {loading && <SpinnerRing size={1} />}
      <InputSelect
        name={`select_${name}`}
        disabled={disabled || loading}
        type='text'
        value={value}
        autocomplete='new-password'
        list={`list_${name}`}
        onChange={onChange}
        placeholder={`${loading ? placeholder.loading : placeholder.finish}`}
        spellCheck='false'
        error={error}
      />
      {(value && !disabled) && <Clear onClick={onClear}>x</Clear>}
      {error && <Error>{errorMessage}</Error>}
      <datalist id={`list_${name}`}>
        {Array.isArray(selectOptions) &&
          selectOptions.map((item, key) => (
            <option
              key={key}
              id={item.id}
              value={item.name}
              label={item.label}
            />
          ))}
      </datalist>
    </Wrapper>
  )
}

const Error = styled.p`
  color: #f31;
  font-size: 0.75rem;
  margin-top: 0rem;
  margin-left: 0.2rem;
`

const Wrapper = styled.div`
  position: relative;
`

const InputSelect = styled.input`
  width: 100%;
  outline: none;
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  padding: 0.3rem 1.3rem 0.3rem 0.6rem;
  padding-right: ${({ value }) => (value ? '1.3rem' : '0.3rem')};
  border-color: ${({ error }) => (error ? 'red' : 'rgba(0, 0, 0, 0.2)')};
  color: ${({ error }) => (error ? 'red' : 'inherit')};
  transition: all 0.3s ease-in-out;

  :hover {
    border-color: ${({ error }) => (error ? 'red' : 'rgba(0, 0, 0, 0.87)')};
    /* border-color: rgba(0, 0, 0, 0.87); */
  }

  /* :focus {
    border-width: 2px;
  } */

  &:disabled {
    background: var(--clr-secondary-low);
    color: var(--clr-secondary-light);
    border-color: var(--clr-secondary-light);
    cursor: not-allowed;
  }

  ::-webkit-calendar-picker-indicator {
    color: var(--clr-primary);
  }
`

const Clear = styled(CancelIcon)`
  position: absolute;
  color: red;
  right: 0.5rem;
  top: 0.5rem;
  cursor: pointer;
  font-size: 14px;
`

export default Select
