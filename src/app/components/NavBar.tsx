'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const NavBar = () => {
    const pathname = usePathname();

    return (
        <div>
            <nav className="bg-white py-2 px-6 flex items-center justify-between">
                <div className="flex items-center ml-7">
                    <a href="https://www.fia.com" target="_blank" rel="noopener noreferrer">
                        <Image src="/fia-logo.png" alt="FIA Logo" width={50} height={50} className="mr-5" />
                    </a>
                    <div className="border-r border-gray-300 h-6 mr-3"></div>
                    <a
                        href="https://www.formula1.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ml-4 font-bold text-gray-800 hover:text-[#e10600] transition-colors"
                    >
                        F1®
                    </a>
                </div>
            </nav>
            <nav className="bg-[#e10600] py-6 px-6 flex justify-around items-center">
                <div className="mr-4">
                    <Image src="/f1-logo.svg" alt="F1 Logo" width={150} height={150} />
                </div>
                <Link href="/race-schedule" legacyBehavior>
                    <a className={`text-white hover:bg-black hover:text-white px-3 py-1 rounded-full transition-colors font-sans font-medium text-sm ${pathname === '/race-schedule' || pathname === '/' ? 'border-highlight' : ''}`}>
                        Race Schedule
                    </a>
                </Link>
                <Link href="/race-results" legacyBehavior>
                    <a className={`text-white hover:bg-black hover:text-white px-3 py-1 rounded-full transition-colors font-sans font-medium text-sm ${pathname === '/race-results' ? 'border-highlight' : ''}`}>
                        Race Results
                    </a>
                </Link>
                <Link href="/standings" legacyBehavior>
                    <a className={`text-white hover:bg-black hover:text-white px-3 py-1 rounded-full transition-colors font-sans font-medium text-sm ${pathname === '/standings' ? 'border-highlight' : ''}`}>
                        Standings
                    </a>
                </Link>
                <Link href="/driver-info" legacyBehavior>
                    <a className={`text-white hover:bg-black hover:text-white px-3 py-1 rounded-full transition-colors font-sans font-medium text-sm ${pathname === '/driver-info' ? 'border-highlight' : ''}`}>
                        Driver Information
                    </a>
                </Link>
                <Link href="/constructor-info" legacyBehavior>
                    <a className={`text-white hover:bg-black hover:text-white px-3 py-1 rounded-full transition-colors font-sans font-medium text-sm ${pathname === '/constructor-info' ? 'border-highlight' : ''}`}>
                        Constructor Information
                    </a>
                </Link>
                <Link href="/circuit-info" legacyBehavior>
                    <a className={`text-white hover:bg-black hover:text-white px-3 py-1 rounded-full transition-colors font-sans font-medium text-sm ${pathname === '/circuit-info' ? 'border-highlight' : ''}`}>
                        Circuit Information
                    </a>
                </Link>
                <Link href="/finishing-status" legacyBehavior>
                    <a className={`text-white hover:bg-black hover:text-white px-3 py-1 rounded-full transition-colors font-sans font-medium text-sm ${pathname === '/finishing-status' ? 'border-highlight' : ''}`}>
                        Finishing Status
                    </a>
                </Link>
                <Link href="/lap-times" legacyBehavior>
                    <a className={`text-white hover:bg-black hover:text-white px-3 py-1 rounded-full transition-colors font-sans font-medium text-sm ${pathname === '/lap-times' ? 'border-highlight' : ''}`}>
                        Lap Times
                    </a>
                </Link>
                <Link href="/pit-stops" legacyBehavior>
                    <a className={`text-white hover:bg-black hover:text-white px-3 py-1 rounded-full transition-colors font-sans font-medium text-sm ${pathname === '/pit-stops' ? 'border-highlight' : ''}`}>
                        Pit Stops
                    </a>
                </Link>
            </nav>
        </div>
    );
};

export default NavBar;
