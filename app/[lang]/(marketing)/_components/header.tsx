import MainNav from "./main-nav";
import {Logo} from "./logo";
import {MobileNav} from "@/components/mobile-nav";
import {Locale} from "@/i18n-config";
import {getDictionary} from "@/lib/dictionary";


interface HeaderProps {
    lang: Locale;
}

const Header = async ({
                          lang
                      }: HeaderProps) => {

    const dictionary = await getDictionary(lang);

    return (
        <header
            className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-14 max-w-screen-2xl items-center space-x-2">
                <Logo/>
                <MainNav lang={lang} dictionary={dictionary}/>
                <MobileNav/>
            </div>
        </header>
    );
}

export default Header;