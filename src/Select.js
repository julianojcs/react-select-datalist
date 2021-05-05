import styled from 'styled-components'
import { FaTimes as CancelIcon } from 'react-icons/fa'
import { SpinnerRing } from './Spinner'

const Select = ({ loading, value, onChange, onClear, name, selectOptions }) => {
  return (
    <Wrapper>
      {loading && <SpinnerRing size={1} />}
      <InputSelect
        name={`select_${name}`}
        disabled={loading}
        type='text'
        value={value}
        autocomplete='new-password'
        list={`list_${name}`}
        onChange={onChange}
        placeholder={`${loading ? 'Carregando...' : 'Digite ou selecione...'}`}
        spellCheck='false'
      />
      {value && <Clear onClick={onClear}>x</Clear>}
      <datalist id={`list_${name}`}>
        {Array.isArray(selectOptions) &&
          selectOptions.map((item, key) => (
            <option
              key={key}
              id={item._id}
              value={item.nome}
              label={item.label}
            />
          ))}
      </datalist>
    </Wrapper>
  )
}

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
  transition: all 0.3s ease-in-out;

  :hover {
    border-color: rgba(0, 0, 0, 0.87);
  }

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
  bottom: 0.5rem;
  cursor: pointer;
  font-size: 14px;
`

export default Select
