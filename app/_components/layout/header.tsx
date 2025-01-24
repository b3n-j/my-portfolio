import DeployButton from "@/app/_components/deploy-button";
import { EnvVarWarning } from "@/app/_components/env-var-warning";
import HeaderAuth from "@/app/_components/header-auth";
import { hasEnvVars } from "@/app/_utils/supabase/check-env-vars";
import Link from "next/link";

export function Header() {
    return (
        <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">
            <div className="w-full max-w-5xl flex justify-between items-center p-3 px-5 text-sm">
                <div className="flex gap-5 items-center font-semibold">
                    <Link href={"/"}>my-portfolio</Link>
                    <div className="flex items-center gap-2">
                        <DeployButton />
                    </div>
                </div>
                {!hasEnvVars ? <EnvVarWarning /> : <HeaderAuth />}
            </div>
        </nav>
    )
}