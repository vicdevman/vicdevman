import React from 'react'

export default function Footer() {

    const currentYear = new Date().getFullYear();

  return (
    <div className="text-center py-6 text-md text-neutral-500 font-[satoshi-medium] tracking-tight pt-10 border border-neutral-200 mt-20 mb-20 border-b-0">
      Copyright © {currentYear} Victor Adeiza. All rights reserved.

      <div></div>
    </div>
  )
}
