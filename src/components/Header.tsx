import { PiGithubLogoFill } from 'react-icons/pi'
import { PiInstagramLogoFill } from 'react-icons/pi'
import { PiLinkedinLogoFill } from 'react-icons/pi'

export function Header() {
  return (
    <header>
      <nav className="border-gray-200 px-4 lg:px-6 py-2.5 bg-gray-800">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <div className="flex items-center">
            <span className="self-center text-xl font-black uppercase  whitespace-nowrap text-white mr-4">Mauricio Poveda</span>
            <span className="self-center text-xl font-semibold uppercase text-blue-200">Portafolio del Bloque de Matemáticas</span>
          </div>
          <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <a href="https://github.com/smoothness/" className="block py-2 pr-4 pl-3 text-gray-300 hover:text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0"><PiGithubLogoFill size={24} /></a>
              </li>
              <li>
                <a href="https://www.instagram.com/algebrooh/" className="block py-2 pr-4 pl-3 text-gray-300 hover:text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0"><PiInstagramLogoFill size={24} /></a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/mpoveda/" className="block py-2 pr-4 pl-3 text-gray-300 hover:text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0"><PiLinkedinLogoFill size={24} /></a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}