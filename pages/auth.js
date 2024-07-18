import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import { useEffect } from "react";

import AuthForm from "../components/auth/auth-form";

function AuthPage() {
  const router = useRouter();
  const { data: session, status } = useSession();
  const isLoading = status === "loading";

  useEffect(() => {
    if (session) {
      router.replace("/");
    }
  }, [session, router]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return <AuthForm />;
}

export default AuthPage;
