import { createContext, useContext, useEffect, useState } from "react"
import { 
  User as FirebaseUser,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  updateProfile
} from "firebase/auth"
import { auth } from "@/lib/firebase"

interface User {
  email: string
  name: string
  company?: string
  uid: string
}

interface AuthContextType {
  user: User | null
  isAuthenticated: boolean
  login: (email: string, password: string) => Promise<void>
  signup: (email: string, password: string, name: string, company?: string) => Promise<void>
  logout: () => Promise<void>
  isLoading: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser: FirebaseUser | null) => {
      if (firebaseUser) {
        setUser({
          email: firebaseUser.email || '',
          name: firebaseUser.displayName || '',
          uid: firebaseUser.uid,
          company: firebaseUser.displayName?.split(' | ')[1] || ''
        })
      } else {
        setUser(null)
      }
      setIsLoading(false)
    })

    return () => unsubscribe()
  }, [])

  const login = async (email: string, password: string) => {
    try {
      await signInWithEmailAndPassword(auth, email, password)
    } catch (error: any) {
      throw new Error(error.message)
    }
  }

  const signup = async (email: string, password: string, name: string, company?: string) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password)
      const displayName = company ? `${name} | ${company}` : name
      await updateProfile(userCredential.user, { displayName })
    } catch (error: any) {
      throw new Error(error.message)
    }
  }

  const logout = async () => {
    try {
      await signOut(auth)
    } catch (error: any) {
      throw new Error(error.message)
    }
  }

  const value = {
    user,
    isAuthenticated: !!user,
    login,
    signup,
    logout,
    isLoading
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}