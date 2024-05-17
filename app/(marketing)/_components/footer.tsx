import Link from "next/link";
import WhatsappButton from "@/components/whatsapp-button";
import InstagramButton from "@/components/instagram-button";
import FacebookButton from "@/components/facebook-button";
import {Logo} from "@/app/(marketing)/_components/logo";


const Footer = () => {
    return (
        <footer className="mt-20 p-4 bg-white shadow-inner sm:p-6 dark:bg-gray-800 rounded-t-lg">
            <div className="container mx-auto max-w-screen-xl">
                <div className="md:flex md:justify-between">
                    <div className="mb-6 md:mb-0">
                        <Logo/>
                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-2">
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Follow
                                us</h2>
                            <ul className="text-gray-600 dark:text-gray-400">
                                <li className="mb-4">
                                    <Link href="https://www.instagram.com/carbo.it"
                                          aria-label="Instagram"
                                          target="_blank"
                                          className="hover:underline ">Instagram</Link>

                                </li>
                                <li>
                                    <Link
                                        href="https://www.facebook.com/profile.php?id=61556544511279"
                                        aria-label="Facebook"
                                        target={"_blank"}
                                        className="hover:underline">
                                        Facebook
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
                            <ul className="text-gray-600 dark:text-gray-400">
                                <li className="mb-4">
                                    <Link href="/privacy-policy"
                                          aria-label="Privacy Policy"
                                          className="hover:underline">
                                        Privacy Policy
                                    </Link>
                                </li>

                                <li>
                                    <Link href="/cookie-policy"
                                          aria-label="Cookies Policy"
                                          className="hover:underline">
                                        Cookies Policy
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"/>
                <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© {new Date().getFullYear()} {` `}
                <a
                    aria-label="Carboit"
                    href="https://carboit.com" className="hover:underline">Carboit™</a>. All Rights Reserved.
            </span>
                    <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
                        <WhatsappButton/>
                        <InstagramButton/>
                        <FacebookButton/>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;