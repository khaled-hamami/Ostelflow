"use client"
import RingLoader from "react-spinners/RingLoader"

export default function Loader() {
  return (
    <div className="bg-transparent w-full h-[90vh] ">
      <RingLoader
        color=""
        className="loader"
        loading={true}
        size={40}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  )
}
