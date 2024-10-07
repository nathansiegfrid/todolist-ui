import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Link } from "react-router-dom"
import { z } from "zod"

import { Button } from "~/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card"
import { Input } from "~/components/ui/input"
import { Label } from "~/components/ui/label"
import { toast } from "~/hooks/use-toast"

const formSchema = z.object({
  email: z.string().min(1).email(),
  password: z.string().min(1),
})

type FormData = z.infer<typeof formSchema>

export const LoginPage = () => {
  const { handleSubmit, register } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  })

  const onSubmit = (data: FormData) => {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    })
  }

  return (
    <div className="grid h-screen w-screen place-items-center overflow-auto p-4">
      <Card className="mx-auto w-full max-w-sm">
        <CardHeader>
          <CardTitle className="text-2xl">Welcome</CardTitle>
          <CardDescription>Please log in to continue</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" {...register("email")} />
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" {...register("password")} />
              <Link to="/forgot-password" className="w-fit text-xs underline">
                Forgot password?
              </Link>
            </div>
            <Button type="submit" className="mt-4 w-full">
              Log in
            </Button>
            <div className="mt-4 text-center text-sm">
              Don&apos;t have an account?&nbsp;
              <Link to="/signup" className="underline">
                Sign up
              </Link>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
