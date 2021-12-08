import React, {useState} from "react"

import type {NextPage} from "next"

import Progress1 from "src/Progress1"
import Progress2 from "src/Progress2"
import Progress3 from "src/Progress3"
import Progress4 from "src/Progress4"
import Progress5 from "src/Progress5"
import Progress6 from "src/Progress6"
import Progress7 from "src/Progress7"
import Progress8 from "src/Progress8"

const Index: NextPage = () => {
  const [progress, setProgress] = useState(0)

  return (
    <div className="w-full h-full grid place-items-center">
      <div className="flex flex-col items-center gap-12">
        <div className="grid grid-rows-4 grid-flow-col gap-4 max-w-xl" style={{gridTemplateColumns: `12rem 12rem`}}>
          <Progress1 progress={progress} />
          <Progress2 progress={progress} />
          <Progress3 progress={progress} />
          <Progress4 progress={progress} />
          <Progress5 progress={progress} />
          <Progress6 progress={progress} />
          <Progress7 progress={progress} />
          <Progress8 progress={progress} />
        </div>

        <input
          type="range"
          max={1}
          step="any"
          value={progress}
          onChange={(evt) => setProgress(Number(evt.target.value))}
        />
      </div>
    </div>
  )
}

export default Index
