import Header from "./_components/header"
import {i18n} from "@/i18n-config";


const MarketingLayout = ({
                             children
                         }: {
    children: React.ReactNode,
}) => {

    const lang = i18n.defaultLocale;

    return (
        <div className="relative flex min-h-screen flex-col bg-background">
            <Header lang={lang}/>

            <main className="flex-1 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]">
                {children}
            </main>
        </div>
    )
}


export default MarketingLayout