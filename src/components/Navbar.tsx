"use client"

import React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { User } from "next-auth"
import { useSession, signOut } from "next-auth/react"
import { ModeToggle } from "@/components/ui/modeToggle"

const NavBar = () => {
    const { data: session } = useSession()
    const user: User = session?.user as User

    return (
        <nav className="p-4 md:p-6 shadow-md dark:text-white">
            <div className="container mx-auto flex flex-col md:flex-row  justify-between items-center">
                <a href="#" className="text-xl fond-bold mb-4 md:mb-0">
                    Amize
                </a>
                {session ? (
                    <>
                        <span className="mr-4">
                            Welcome , {user.username || user.email}
                        </span>
                        <Button
                            onClick={() => signOut()}
                            className="w-full md:w-auto bg-slate-100 text-black"
                            variant={"outline"}
                        >
                            Logout
                        </Button>
                    </>
                ) : (
                    <Link href={"/auth/sign-in"}>
                        <Button
                            className="w-full md:w-auto bg-slate-100 text-black"
                            variant={"outline"}
                        >
                            Login
                        </Button>
                    </Link>
                )}

                <div className="toggle">
                    <ModeToggle />
                </div>
            </div>
        </nav>
    )
}

export default NavBar
