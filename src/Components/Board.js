import React from 'react'
import { Card } from 'react-materialize'
import { withRouter } from 'react-router-dom'

const Board = ({board, history}) => {

  const handleClick = () => {
    history.push(`/boards/${board.id}`)
  }

  return (
    <Card className="cardOver" onClick={() => handleClick()}>
      <p>{board.name}</p>
    </Card>
  )
}

export default withRouter(Board)