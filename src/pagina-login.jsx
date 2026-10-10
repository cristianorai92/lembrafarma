```jsx
import { useState } from "react"
import { toast } from "react-toastify"

export default function App() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  function login(event) {
    event.preventDefault()

    if (email === "" || password === "") {
      toast.error("Email e senha são obrigatórios")
      return
    }

    if (password.length < 8) {
      toast.error("A senha deve ter pelo menos 8 caracteres")
      return
    }

    toast.success("Login realizado com sucesso!")
  }

  return (
    <div className="w-full min-h-screen bg-[url('/bg-farma.png')] bg-cover bg-center bg-no-repeat">
      <div className="relative flex min-h-screen w-full items-center justify-center px-4 py-20">

        <img
          src="/logo-farma.png"
          alt="Logo Lembra Farma"
          className="absolute left-6 top-3 w-[200px] sm:left-10"
        />

        <div className="w-full max-w-[500px] min-h-[400px] rounded-lg bg-black/70 px-6 py-[30px] text-white sm:px-[60px]">

          <h1 className="text-[30px] font-bold">
            Entrar
          </h1>

          <form
            onSubmit={login}
            className="mt-5 flex flex-col gap-[15px]"
          >
            <input
              type="email"
              placeholder="Usuário"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="h-[50px] w-full border border-gray-400 bg-[#2fe9b16a] pl-4 text-white outline-none placeholder:text-gray-200 focus:border-emerald-400"
            />

            <input
              type="password"
              placeholder="Senha"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              className="h-[50px] w-full border border-gray-400 bg-[#2fe9b16a] pl-4 text-white outline-none placeholder:text-gray-200 focus:border-emerald-400"
            />

            <button
              type="submit"
              className="h-[50px] w-full rounded-md bg-[#2fe9b16a] font-bold transition hover:bg-emerald-500 hover:text-black"
            >
              Entrar
            </button>
          </form>

        </div>
      </div>
    </div>
  )
}
```
