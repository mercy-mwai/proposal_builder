"use client"
import { Loader2 } from 'lucide-react';
import { useRouter, useSearchParams } from 'next/navigation'
import React, { useEffect } from 'react'

const AuthCallback = () => {
    const router= useRouter();
    const searchParams= useSearchParams();

    useEffect(()=>{
        const token= searchParams.get("token");
        const user= searchParams.get("user");
        const error=searchParams.get("error");

        if(error){
            router.push('/auth/login/?error=${encodeURIcomponent(error)}')
            return
        }
        if(token && user){
            localStorage.setItem("auth-token", token);
            localStorage.setItem("user", decodeURIComponent(user));
            router.push("/dashboard");
        }else{
             router.push("/auth/login?error=Authentication failed")
        }
    }, [router,searchParams])
  return (
    <div className="min-h-screen flex items-center justify-center">
        <div className='text-center'>
            <Loader2 className="h-8 w-8 animate-spin mx-auto mb-4">
                <p>Processing Authentication ....</p>
            </Loader2>
        </div>
    </div>
  )
}

export default AuthCallback