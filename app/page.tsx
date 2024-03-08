import { Button } from "@/components/ui/button"
import { LoginButton } from "@/components/auth/login-button"

export default function Home() {
  return (
    <main className="flex h-full items-center flex-col justify-center bg-slate-700">
      <div className="border border-slate-600 rounded-xl p-10 flex flex-col gap-10">
        <div className="text-center">
          <h1 className="text-6xl font-semibold text-white drop-shadow-md">
            Auth
          </h1>
          <p className="text-white/60 text-lg">
            A simple authentication service
          </p>
        </div>
        <div className="self-center font-semibold">
        <LoginButton>
          <Button variant="secondary">
            Sign in
          </Button>
        </LoginButton>
        </div>
      </div>
    </main>
  );
}
