import React from 'react'
import { footerLinks } from '../constants'

const Footer = () => {
  return (
    <footer className="py-5 sm:px-10 px-5">
      <div className="screen-max-width">
        <div>
          <p className="font-semibold text-gray text-xs">
          Outras formas de comprar: {' '}
            <span className="underline text-blue">
            encontre uma Apple Store ou {' '}
            </span>
            ou {' '}
            <span className="underline text-blue">
            revendedor Apple 
            </span>{' '}
            na sua região
          </p>
          <p className="font-semibold text-gray text-xs">
          Ou ligue para 0800-761-0867.
          </p>
        </div>

        <div className="bg-neutral-700 my-5 h-[1px] w-full" />

        <div className="flex md:flex-row flex-col md:items-center justify-between">
          <p className="font-semibold text-gray text-xs">Copright @ 2024 Apple Inc. All rights reserved.</p>
          <a href="https://lrportifolio.vercel.app"><p className="font-semibold text-blue text-lg">Site recriado por Luis Roberto</p></a>
          <div className="flex">
            {footerLinks.map((link, i) => (
              <p key={link} className="font-semibold text-gray text-xs">
                {link}{' '}
                {i !== footerLinks.length - 1 && (
                  <span className="mx-2"> | </span>
                )}
              </p>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer