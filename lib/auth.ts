export function isAuthenticated(): boolean{
    if(typeof window === "undefined")return false 
    const token =localStorage.getItem("auth_token")
    return !! token
}

export function getAuthToken(): string | null{
    if(typeof window === "undefined") return null
    return localStorage.getItem("auth_token");
}

export function getUserData(){
    if(typeof window === "undefined") return null
   const userData= localStorage.getItem("user_data");
   return userData ? JSON.parse(userData) : null
}
export function logout(){
    localStorage.removeItem("auth_token");
    localStorage.removeItem("user_data");
    window.location.href="/auth/login";
}