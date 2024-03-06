import Footer from "./_components/footer"
import Header from "./_components/header"
import {Locale} from "@/i18n-config";


const MarketingLayout = ({
                             children,
                             params
                         }: {
    children: React.ReactNode,
    params: { lang: Locale }
}) => {
    return (
        <>
            <div className="relative flex min-h-screen flex-col bg-background">
                <Header lang={params.lang}/>

                <main className="flex-1 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]">
                    {children}
                </main>
                <Footer lang={params.lang}/>
            </div>
        </>
    )
}


export default MarketingLayout