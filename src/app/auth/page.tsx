import LoginForm from "@app/auth/components/login-form";

export default function AuthPage() {
    return <div className={'w-full h-full flex-row justify-items-center content-around'}>
        <div className={'w-1/4'}>
            <LoginForm></LoginForm>
        </div>
         {/*<div className="text-center">*/}
         {/*  All rights to <span className="text-secondary"> Adina Oros © 2025</span>*/}
         {/*</div>*/}
    </div>
}