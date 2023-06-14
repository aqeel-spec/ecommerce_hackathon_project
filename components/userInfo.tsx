"use client"
import { UserButton, useUser } from "@clerk/nextjs";

export default function Example() {
  const { isLoaded, isSignedIn, user } = useUser();

  if (!isLoaded || !isSignedIn) {
    return null;
  }
  console.log("users",user)

  return (
    <>
     <div className="ml-auto flex justify-end  items-center gap-2 p-2 ">
        <h4>Hello, <span className="text-primary font-semibold">{user.firstName}</span> welcome to Dino Market</h4>
        <UserButton afterSignOutUrl="/"/>
     </div>
    </>
  )
}
{/* <UserButton afterSignOutUrl="/"/>   */}