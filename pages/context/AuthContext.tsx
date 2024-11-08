import { createContext, ReactNode, useContext, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { deleteCookie, getCookie } from "cookies-next";
import { AuthContextType, User } from "./type";

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export function AuthProvider({
  children,
}: {
  children: ReactNode;
}): JSX.Element {
  const router = useRouter();
  const [user, setUser] = useState<User | undefined>();
  const [error, setError] = useState<any>();
  const [loading, setLoading] = useState<boolean>(false);

  const token = getCookie("token") || "";
  const UserId = getCookie("userId") || "";
  const UserName = getCookie("userName") || "";

  const logout = () => {
    deleteCookie("token");
    deleteCookie("userId");
    setTimeout(() => {
      router.push("/");
    }, 1000);
  };

  const memoedValue = useMemo(
    () => ({
      user,
      setUser,
      loading,
      setLoading,
      error,
      setError,
      logout,
      token,
      UserId,
      UserName,
    }),
    [user, loading, error],
  );

  return (
    <AuthContext.Provider value={memoedValue}>{children}</AuthContext.Provider>
  );
}

export default function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
