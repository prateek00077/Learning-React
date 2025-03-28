import React from 'react'
import Index from './Index'
import {Context} from './Context';

const App = () => {
  return (
    <div>
      <Context>
        <Index/>
      </Context>
    </div>
  )
}

export default App
