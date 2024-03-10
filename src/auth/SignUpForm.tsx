import { zodResolver } from "@hookform/resolvers/zod"
import {Link} from 'react-router-dom';
import { z } from "zod"
import {useForm} from "react-hook-form";
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";
import {SignUpValidation} from '@/lib/validation'
import Loader from "@/components/shared/Loader";

export default function SignUpForm (){
    const isLoading = false;
    const form = useForm<z.infer<typeof SignUpValidation>>({
        resolver : zodResolver(SignUpValidation),
        defaultValues : {
            name : "",
            username : "",
            email : "",
            password : "",

        },
    })
    function onSubmit(values: z.infer<typeof SignUpValidation>) {
        console.log(values)
    }
    return (
        <Form {...form}>
        <div className = "sm:w-420 flex-center flex-col">
        <img src = "/assets/images/logo.svg"/>
        <h2 className = "h3-bold md:h2-bold pt-5 sm:pt-12">
        Create a new account
        </h2>
        <p className = "text-light-3 small-medium md:base-regular mt-2"></p>
        <form onSubmit={form.handleSubmit(onSubmit)} 
        className="flex flex-col gap-5 w-full mt-4">
        <FormField
        control={form.control}
        name="name"
        render={({ field }) => (
            <FormItem>
            <FormLabel>Name</FormLabel>
            <FormControl>
            <Input type = "text" placeholder="" {...field} className = "shad-input" />
            </FormControl>
            <FormMessage />
            </FormItem>
        )}
        />
        <FormField
        control={form.control}
        name="username"
        render={({ field }) => (
            <FormItem>
            <FormLabel>Username</FormLabel>
            <FormControl>
            <Input type = "text" placeholder="" {...field} className = "shad-input" />
            </FormControl>
            <FormMessage />
            </FormItem>
        )}
        />
        <FormField
        control={form.control}
        name="email"
        render={({ field }) => (
            <FormItem>
            <FormLabel>Email</FormLabel>
            <FormControl>
            <Input type = "email" placeholder="" {...field} className = "shad-input" />
            </FormControl>
            <FormMessage />
            </FormItem>
        )}
        />
        <FormField
        control={form.control}
        name="password"
        render={({ field }) => (
            <FormItem>
            <FormLabel>Password</FormLabel>
            <FormControl>
            <Input type = "password" placeholder="" {...field} className = "shad-input" />
            </FormControl>
            <FormMessage />
            </FormItem>
        )}
        />
        <Button className = "shad-button_primary" type="submit">
        {isLoading? (
            <div className = "flex-center gap-2"><Loader/>Loading...</div>
        ) : (
        "Sign Up"
        )}

        </Button>
        <p className = "text-small-regular text-light-2 text-center mt-2">Already have an account?
        <Link to = "/sign-in" className = "text-primary-500 text-small-semibold ml-1">Log In</Link></p>
        </form>
        </div>
        </Form>
    )

}
