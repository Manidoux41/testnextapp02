import React from 'react'

type Params = {
  params: {
    appartId: string
  }
}

const AppartOnly = ({params: { appartId }}: Params) => {
  return (
    <div>AppartOnly</div>
  )
}

export default AppartOnly