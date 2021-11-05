import React, { ReactNode } from 'react'
export default function Divider(props: Props) {
  return <div className={`pl-2 border-bottom ${props.className}`}>{props.children}</div>
}

interface Props {
  children?: ReactNode;
  className?: string;
}