'use client'  // Client component
import React from 'react'

interface ButtonProps {
  onClick: () => void;
  label: string;
}

const Button : React.FunctionComponent<ButtonProps> = ({ onClick, label }) => {
  return (
    <button onClick={onClick}>{label}</button>
  )
}

export default Button;
