import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaInstagram } from 'react-icons/fa6';
import { FaYoutube } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

export default function Footer() {
	const MySwal = withReactContent(Swal);

	return (
		<>
			<footer className="w-full bg-orange-400 dark:bg-neutral-950">
				{/* <!-- ========== FOOTER ========== --> */}
				<footer className="mt-auto w-full max-w-[75rem] mx-auto">
					<div className="mt-auto w-full max-w-[85rem] py-10 px-4 sm:px-6 lg:px-8 lg:pt-20 mx-auto">
						{/* <!-- Grid --> */}
						<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
							<div className="col-span-full lg:col-span-2 flex justify-center items-center">
								<Link
									className="flex-none text-xl font-semibold text-white"
									href="/">
									<Image
										src="/images/why_logo-white.png"
										width={300}
										height={100}
										alt="why logo"
									/>
								</Link>
							</div>
							{/* <!-- End Col --> */}

							<div className="col-span-1">
								<h4 className="font-semibold text-gray-100">關於我們</h4>

								<div className="mt-3 grid space-y-3">
									<a
										className="inline-flex gap-x-2 text-white hover:text-gray-800"
										href="#">
										最新消息
									</a>
									<a
										className="inline-flex gap-x-2 text-white hover:text-gray-800"
										href="#">
										常見問題
									</a>{' '}
									<a
										className="inline-flex gap-x-2 text-white hover:text-gray-800"
										href="#">
										服務契約
									</a>
									<a
										className="inline-flex gap-x-2 text-white hover:text-gray-800"
										href="#">
										隱私權政策
									</a>
								</div>
							</div>
							{/* <!-- End Col --> */}

							<div className="col-span-2">
								<h4 className="font-semibold text-gray-100 mb-3">聯絡我們</h4>

								<form
									action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSc6h_KVkpN2bcQkRb7L2t5sZkL7oCQ45wJtZEDU5xV5ztQ_PQ/formResponse"
									id="contact-form"
									method="GET"
									className="bg-white rounded-lg"
									onSubmit={e => {
										e.preventDefault();
										const form = e.currentTarget;
										const data = new URLSearchParams(new FormData(form));
										fetch(form.action + '?' + data.toString(), {
											method: form.method,
											mode: 'no-cors'
										}).then(() => {
											form.reset();
											MySwal.fire({
												icon: 'success',
												text: '已收到您的訊息，我們將盡快回覆',
												confirmButtonText: 'OK'
											}).then(() => {
												window.location.href = window.location.href;
											});
										});
									}}>
									<div className="p-2">
										<textarea
											name="entry.691578112"
											className="w-full py-3 px-4 block w-full border rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
											placeholder="輸入您的訊息"
											required></textarea>
									</div>
									<div className="flex items-center gap-2 sm:flex-row sm:gap-3  p-2">
										<div className="w-full">
											<input
												type="email"
												id="hero-input"
												name="entry.28436927"
												className="py-3 px-4 block w-full border rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
												placeholder="輸入您的信箱"
												required
											/>
										</div>
										<button
											className="w-auto  whitespace-nowrap p-3 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-sky-400 text-white hover:bg-sky-500 disabled:opacity-50 disabled:pointer-events-none"
											type="submit">
											送出
										</button>
									</div>
								</form>
							</div>
							{/* <!-- End Col --> */}
						</div>
						{/* <!-- End Grid --> */}

						<div className="mt-5 sm:mt-12 grid gap-y-2 sm:gap-y-0 sm:flex sm:justify-between sm:items-center">
							<div className="flex justify-between items-center">
								<p className="text-sm text-white dark:text-neutral-400">
									© 2024 Why Academy. All rights reserved.
								</p>
							</div>
							{/* <!-- End Col --> */}

							{/* <!-- Social Brands --> */}
							<div>
								<a
									className="size-10 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-white hover:bg-white/10 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:ring-1 focus:ring-gray-600"
									href="#">
									<FaFacebook className="size-5" />
								</a>
								<a
									className="size-10 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-white hover:bg-white/10 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:ring-1 focus:ring-gray-600"
									href="#">
									<FaYoutube className="size-5" />
								</a>
								<a
									className="size-10 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-white hover:bg-white/10 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:ring-1 focus:ring-gray-600"
									href="#">
									<FaInstagram className="size-5" />
								</a>
							</div>
							{/* <!-- End Social Brands --> */}
						</div>
					</div>
				</footer>
				{/* <!-- ========== END FOOTER ========== --> */}
			</footer>
		</>
	);
}
