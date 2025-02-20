"use client"
import { ShoppingCart, User } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useRouter } from "next/router"
import { useRef, useState } from "react"
import gsap from 'gsap';
function Nav() {
    gsap.registerPlugin()
    const profile = useRef()
    const [profileDislplay, setProfileDislplay] = useState(0)
    const [cartItems, setCartItems] = useState(0)
    const [loggin, setLoggin] = useState(false)
    const pathname = usePathname()
    const userPrfile = ()=>{
        if(!loggin){
            return(
                <div className="w-16 flex drop-shadow-md flex-col">
                    <Link href={"/login"}>Log In</Link>
                    <Link href={"/sign-up"}>Sign Up</Link>
                </div>
            )
        }
        else{
            return(
                <div>
                    <Link href={"/account"}>Account</Link>
                    <Link href={"/sign-out"}>Sign Out</Link>
                </div>
            )
        }
    }
    const onClickProfile = ()=>{
        if(profileDislplay){
            // profile.current.classList.add("hidden")
            // profile.current.classList.remove("flex")
            setProfileDislplay(0)
            gsap.to(profile.current,{
                display:"hidden",
                duration:.5,
                opacity:"0%",
                scaleY:0
            })
        }
        else{
            // profile.current.classList.add("flex")
            // profile.current.classList.remove("hidden")
            setProfileDislplay(1)
            gsap.to(profile.current,{
                display:"flex",
                opacity:"100%",
                duration:.5,
                scaleY:1
            })
        }
    }
    return (
        <div className="w-full flex justify-between items-center h-24  px-4 ">
            <div className="logo">
                <Link href={"/"} className="text-3xl font-semibold">New <span className="text-[#FF1D24]">Zone</span></Link>
            </div>
            <ul className="flex gap-2 text-lg ">
                <li><Link href={"/"} className={`${(pathname === "/") ? `text-[#FF1D24]` : ``}`}>Home</Link></li>
                <li><Link href={"/product"} className={`${(pathname === "/product") ? `text-[#FF1D24]` : ``}`}>Prducts</Link></li>
                <li><Link href={"/about-us"} className={`${(pathname === "/about-us") ? `text-[#FF1D24]` : ``}`}>About Us</Link></li>
                <li><Link href={"/orders"} className={`${(pathname === "/orders") ? `text-[#FF1D24]` : ``}`}>Orders</Link></li>
            </ul>
            <div className="flex gap-2  select-none  font-normal">
                <div className=" relative">
                    <User size={28} strokeWidth={1.5} onClick={onClickProfile} />
                    <div ref={profile} className=" absolute hidden -left-8 rounded-2xl drop-shadow-none top-[250%] bg-white px-3 py-2 text-lg">
                        {userPrfile()}
                        
                    </div>
                </div>
                <div className=" relative">
                    <div className=" absolute w-5 flex items-center justify-center text-white h-5 bg-[#FF1D24] rounded-full right-0 -top-1 ">
                        <h1>{cartItems}</h1>
                        
                    </div>
                    
                    <ShoppingCart size={28} strokeWidth={1.5}/>
                </div>
            </div>
        </div>
    )
}

export default Nav
