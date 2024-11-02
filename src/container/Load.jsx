import React from 'react'
import { MoonLoader } from 'react-spinners'
export default function Load({open}) {
    return (
        <section className={`load w-full h-dvh fixed bg-white z-50 ${open ? "flex" : "hidden"} inset-0 justify-center items-center`}>
      <MoonLoader
          color="#007dff"
          loading={open}
          size={120}
          speedMultiplier={1}
      />
    </section>
  )
}
