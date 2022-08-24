import Link from "next/link";

const Navbar = () => {
    return (
      <>
        <nav className='flex items-center flex-wrap bg-green-300 p-3 '>
        <div className='hidden w-full lg:inline-flex lg:flex-grow lg:w-auto'>
          <div className='lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto'>
            <Link href='/'>
              <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-green-600 hover:text-white '>
                Home
              </a>
            </Link>
            <Link href='/ProductListingsPage'>
              <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-green-600 hover:text-white'>
                Product Listings
              </a>
            </Link>
            {/* <Link href='/'>
              <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-green-600 hover:text-white'>
                About us
              </a>
            </Link>
            <Link href='/'>
              <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-green-600 hover:text-white'>
                Contact us
              </a>
            </Link> */}
          </div>
        </div>
        </nav>
      </>
    );
  };

export default Navbar;