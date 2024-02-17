"use client";

import {usePathname, useRouter} from "next/navigation";

import {i18n, Locale} from "@/i18n-config";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import {useEffect, useState} from "react";
import {getDictionary} from "@/lib/dictionary";
import {Badge} from "@/components/ui/badge";
import {LuLanguages} from "react-icons/lu";


const LocaleSwitcher = ({
                            lang,
                            dictionary
                        }
                            : {
    lang: Locale,
    dictionary: Awaited<ReturnType<typeof getDictionary>>['languages']
}) => {

    const pathName = usePathname();
    const router = useRouter();
    const locales = i18n.locales;
    const [selectedLocale, setSelectedLocale] = useState(lang || i18n.defaultLocale)

    const redirectPathName = (locale: Locale) => {
        if (!pathName) return "/";
        const segments = pathName.split("/");
        segments[1] = locale;
        return segments.join("/");
    }

    const handleLocaleChange = (locale: Locale) => {
        setSelectedLocale(locale);
        const redirect = redirectPathName(locale);
        router.push(redirect);
    }

    return (
        <Select defaultValue={selectedLocale} onValueChange={handleLocaleChange}>
            <SelectTrigger
                className="w-[70px] border-0"
                aria-label="Select a language"
            >
                <SelectValue placeholder="Select a language">
                    <LuLanguages className="w-6 h-6"/>
                </SelectValue>
            </SelectTrigger>
            <SelectContent>
                {locales.map((locale) => (
                    <SelectItem key={locale} value={locale}>
                        <div className="flex items-center gap-3 [&_svg]:h-4 [&_svg]:w-4 [&_svg]:shrink-0 [&_svg]:text-foreground">
                            <Badge variant={"outline"} className="text-xs">
                                {locale.toUpperCase()}
                            </Badge>
                            <span className="text-xs">
                            {dictionary[locale]}
                            </span>
                        </div>
                    </SelectItem>
                ))}
            </SelectContent>
        </Select>
    );
}

export default LocaleSwitcher;