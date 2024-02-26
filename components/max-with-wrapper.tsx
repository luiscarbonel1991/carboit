import {cn} from "@/lib/utils";

const MaxWithWrapper = ({
                            className,
                            children,
                        }: {
    className?: string
    children: React.ReactNode
}) => {
    return (
        <section className={cn(
            `mx-auto w-full max-w-screen-xl px-4 sm:px-6 lg:px-8`,
            className
        )}>
            {children}
        </section>
    )
}

export default MaxWithWrapper