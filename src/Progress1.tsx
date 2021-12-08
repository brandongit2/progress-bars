import React from "react"

import type {FC} from "react"

const Segment = () => {
  return (
    <div>
      <div className="rounded-full bg-white" style={{boxShadow: `0px 0px 0px 100px black`}} />
    </div>
  )
}

type Progress1Props = {
  progress: number
}

const Progress1: FC<Progress1Props> = ({progress}) => {
  return (
    <div className="relative h-2 w-full">
      <div className="absolute w-full h-full grid grid-cols-6 gap-1 overflow-hidden">
        <Segment />
        <Segment />
        <Segment />
        <Segment />
        <Segment />
        <Segment />
      </div>
      {/* <progress value={progress} className="absolute w-full h-full mix-blend-color" /> */}
    </div>
  )
}

export default Progress1
