"use client"

import {useNavigation} from "@app/app/features/common/navigation/navigation.hook";
import {useForm} from "react-hook-form";
import {LoginData, loginSchema} from "@app/auth/schemas/login.schema";
import { zodResolver } from '@hookform/resolvers/zod';
import {toast} from "@app/components/core/use-toast";
import {loginAction} from "@app/auth/actions/auth.actions";

export const useLogin = () => {
    const { navigateTo } = useNavigation();
    const form = useForm<LoginData>({
        resolver: zodResolver(loginSchema),
        defaultValues: { email: '', password: '' }
    });

    const onLogin: () => void = form.handleSubmit(
        async (data: LoginData): Promise<void> => {
            try {
                await loginAction(data);
                navigateTo('', { replace: true });
            } catch (error) {
                toast({
                    title: 'Cannot login',
                    description: 'Invalid credentials',
                    variant: 'destructive'
                });
            }
        }
    );

    return {
        form,
        loading: form.formState.isSubmitting,
        onLogin
    };
};
