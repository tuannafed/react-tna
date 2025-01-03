import { usePrevious } from './usePrevious'
import React from 'react'

export default function Component() {
  const [count, setCount] = React.useState(0)
  const prevCount = usePrevious(count)

  return (
    <p>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
      <p>
        Now: {count}, before: {prevCount}
      </p>
    </p>
  )
}
