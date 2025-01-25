"use client"
import React from 'react'
import Link from "next/link"
import { useState, useEffect } from 'react'
import {signIn, signOut, useSession, getProviders} from "next-auth/react"

const Nav = () => {
    const isUserLoggedIn = true
    const [providers, setProviders] = useState(null)
    useEffect(()=>{
        const setProviders = async ()=>{
            const response = await getProviders();
            setProviders(response)
        }
        setProviders();
    }, [])
    const [toggleDropDown, settoggleDropDown] = useState(false)
return (
    <nav className='flex-between w-full mb-16 pt-3'>
        <Link href="/" className="flex gap-2 flex-center">
            <img
                src="/assets/images/logo.svg"
                alt="Prompto Logo"
                width={30}
                height={30}
                className="object-contain"
            />
            <p className="logo_text">Prompto</p>
        </Link>

        <div className="sm:flex hidden">
            {isUserLoggedIn ? (
                <div className="flex gap-3 md:gap-5">
                    <Link href="/create-prompt" className="black_btn">
                        Create Post
                    </Link>
                    <button
                        type="button"
                        onClick={signOut}
                        className="outline_btn"
                    >
                        Sign Out
                    </button>
                    <Link href="/profile">
                        <img
                            src="/assets/icons/profile.svg"
                            width={37}
                            height={37}
                            className="rounded-full"
                            alt="profile"
                        />
                    </Link>
                </div>
            ) : (
                <>
                    {providers &&
                        Object.values(providers).map((provider) => (
                            <button
                                type="button"
                                key={provider.name}
                                onClick={() => signIn(provider.id)}
                                className="black_btn"
                            >
                                Sign In
                            </button>
                        ))}
                </>
            )}
        </div>
        <div className="sm:hidden flex relative">
            {isUserLoggedIn?(
                <div className="flex">
                    <img
                        src="/assets/icons/profile.svg"
                        width={37}
                        height={37}
                        className="rounded-full"
                        alt="profile"
                        onClick={()=>settoggleDropDown((prev) => !prev)}
                    />
                    {toggleDropDown &&(
                        <div className="dropdown">
                            <Link
                            href = "/profile"
                            className = "dropdown_link"
                            onClick = {() => settoggleDropDown(false)}>My Profile</Link>
                        </div>
                    )}
                </div>
            ):(
                <>
                    {providers &&
                        Object.values(providers).map((provider) => (
                            <button
                                type="button"
                                key={provider.name}
                                onClick={() => signIn(provider.id)}
                                className="black_btn"
                            >
                                Sign In
                            </button>
                        ))}
                </>
            )}
        </div>
    </nav>
);
}

export default Nav