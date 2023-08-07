'use client'

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";

const Navbar = () => {
 
  const { status, data: session } = useSession();
  const [providers, setProviders] = useState(null);

  useEffect(() => {
    (async () => {
      const res = await getProviders();
      setProviders(res);
    })();
  }, []);


  return (
    <nav className='p-4 flex justify-between w-full mb-16 pt-3 items-center'>
       <div className='flex gap-2 flex-center'>
        <Image
          src='/assets/images/logo.svg'
          alt='logo'
          width={35}
          height={35}
          className='object-contain'
        />
        <p className='logo_text font_text'>Promptopia</p>
      </div>

      <div className='sm:flex hidden gap-5'>
        {status === 'authenticated' ? (
          <>
            <button onClick={() => signOut()} type='button' className='outline_btn font_text'>
             <p className="font_text">Sign Out</p>
            </button>
            <Image
              src={session?.user?.image}
              width={40}
              height={40}
              className='rounded-full'
              alt='profile'
            />
          </>
        ) : (
          <>
            <button onClick={() => signIn('google')} type='button' className='outline_btn'>
             <p className="font_text">Sign In</p>
            </button>
            {/* <Image
              src='/assets/images/logo.svg'
              width={37}
              height={37}
              className='rounded-full'
              alt='profile'
            /> */}
          </>
        )}
      </div>
    </nav>
  )
}

export default Navbar