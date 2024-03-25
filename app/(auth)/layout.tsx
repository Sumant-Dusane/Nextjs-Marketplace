"use client"
import Image from "next/image"

function Auth({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-full lg:grid lg:min-h-screen lg:grid-cols-2">
      <div className="hidden bg-muted lg:block">
        <Image
          src="/assets/images/auth_image.webp"
          alt="Image"
          width="1920"
          height="1080"
          className="h-full w-full object-cover dark:brightness-[0.2]"
        />
      </div>
      {children}
    </div>
  )
}


export default Auth;