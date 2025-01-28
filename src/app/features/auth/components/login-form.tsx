"use client";

import {useLogin} from "@app/auth/hooks/login.hook";
import {Form} from "@app/components/core/form";
import {InputControl} from "@app/components/form/input.control";
import {Button} from "@app/components/core/button";

export default function LoginForm () {
    const { form, loading, onLogin } = useLogin();

    return (
        <Form {...form}>
            <form className={'flex w-full flex-col gap-4'} action={onLogin}>
                <span className={'text-subtitle-1'}>Login</span>
                <InputControl
                    control={form.control}
                    name="email"
                    label="Email address"
                    type="email"
                    autoComplete="email"
                    autoCorrect="off"
                    disabled={loading}
                    placeholder="enter your email"
                />
                <InputControl
                    required
                    control={form.control}
                    name="password"
                    label="Password"
                    type="password"
                    disabled={loading}
                    placeholder="enter your password"
                />
                <Button
                    loading={loading}
                    size="sm"
                    className="tracking-widest"
                    id="login-credentials-button"
                >
                    Login
                </Button>
            </form>
        </Form>
    )
}