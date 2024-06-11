import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { IoIosArrowDown } from 'react-icons/io';
import { IoMenu } from 'react-icons/io5';
import { IoMdClose } from 'react-icons/io';
import { useSession } from '@/contexts/session';
import LoginSession from '@/components/home/loginSession';
import LogoutSession from '@/components/home/logoutSession';
import { useRouter } from 'next/router';

export default function Navbar() {
	const router = useRouter();
	const session = useSession();
	const toCoursePage = () => {
		router.push('/course');
	};

	return (
		<>
			{/* <!-- ========== HEADER ========== --> */}
			<header className="sticky top-0 inset-x-0 flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full bg-white border-b border-gray-200 text-md py-3 md:py-0 ">
				<nav className="relative max-w-[100rem] w-full mx-auto px-4 md:flex md:items-center md:justify-between md:px-6 lg:px-8">
					<div className="flex items-center justify-between">
						<Link href="/">
							<div className="flex-none text-xl font-semibold transition-all hover:scale-105">
								<Image
									src="/images/why_logo.png"
									width={250}
									height={100}
									alt="why logo"
								/>
							</div>
						</Link>
						<div className="md:hidden">
							<button
								type="button"
								className="hs-collapse-toggle size-9 flex justify-center items-center text-md font-semibold rounded-lg border border-gray-200 text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none"
								data-hs-collapse="#navbar-collapse-with-animation">
								<IoMenu className="hs-collapse-open:hidden flex-shrink-0 size-4" />
								<IoMdClose className="hs-collapse-open:block hidden flex-shrink-0 size-4" />
							</button>
						</div>
					</div>
					<div
						id="navbar-collapse-with-animation"
						className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow md:block">
						<div className="flex flex-col gap-y-4 gap-x-0 mt-5 md:flex-row md:items-center md:justify-end md:gap-y-0 md:gap-x-7 md:mt-0 md:ps-7">
							<Link href="/about">
								<div
									className="font-medium text-gray-500 hover:text-orange-400 md:py-6"
									href="/about">
									關於
								</div>
							</Link>
							<button
								className="flex font-medium text-gray-500 hover:text-orange-400 md:py-6"
								onClick={toCoursePage}>
								領域
							</button>
							<Link
								className="font-medium text-gray-500 hover:text-orange-400 md:py-6"
								href="http://172.23.52.90:3000/art">
								部落格
							</Link>
							{session ? (
								<Link
									className="font-medium text-gray-500 hover:text-orange-400 md:py-6"
									href="/cart">
									購物車
								</Link>
							) : null}
							{session ? <LogoutSession /> : <LoginSession />}
						</div>
					</div>
				</nav>
			</header>
			{/* <!-- ========== END HEADER ========== --> */}
		</>
	);
}
