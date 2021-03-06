import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { incPos, setBoard } from '../../redux/boardSlice'
import { rootState } from '../interface'
import "./key.css"

interface IProps {
    letter: string
}
const Key: React.FC<IProps> = (props) => {
    const { letter } = props
    const board = useSelector((state: rootState)=> state.board.board)
    const positon = useSelector((state: rootState)=> state.board.pos)
    const dispatch = useDispatch()
    let currentRow = Math.floor(positon/5)
    const row = useSelector((state: rootState)=> state.board.row)
     const chooseLetter = () => {
        if (positon >= 30) return;
        if (currentRow > row ) return;
        const newBoard = [...board]
        newBoard[positon] = letter
        dispatch(setBoard(newBoard))
        dispatch(incPos())
    }
  return (
    <div className="letter" onClick={chooseLetter} data-testid={`letter-${letter}`}>{letter}</div>
  )
}

export default Key
