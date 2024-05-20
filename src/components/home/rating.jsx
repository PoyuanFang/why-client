/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import RatingCard from '@/components/home/card-modules/ratingCard';
import { useState, useEffect } from 'react';

export default function Rating() {
	const [page, setPage] = useState(1); // 追蹤當前頁面
	const [perPage] = useState(4); // 每頁顯示的課程數量
	const [data, setData] = useState([]);
	const [displayedData, setDisplayedData] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const res = await fetch('/api/course');
				let postData = await res.json();
				setData(postData);
			} catch (error) {
				setData([]);
			}
		};
		fetchData();
	}, []);

	useEffect(() => {
		// 根據當前頁面和每頁顯示的課程數量計算要顯示的課程資料
		const startIndex = (page - 1) * perPage;
		const endIndex = startIndex + perPage;
		setDisplayedData(data.slice(startIndex, endIndex));
	}, [data, page, perPage]);

	const nextPage = () => {
		setPage(page + 1);
	};

	const prevPage = () => {
		setPage(page - 1);
	};
	return (
		<>
			{/* <!-- Card Blog --> */}
			<div class="max-w-[75rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
				{/* <!-- Title --> */}
				<div class="max-w-2xl mb-10">
					<h2 class="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">
						熱門課程
					</h2>
					<p class="mt-1 text-gray-600 dark:text-neutral-400">
						看看大家都在學習什麼！
					</p>
				</div>
				{/* <!-- End Title --> */}
				<div className="flex gap-3 items-center">
					<button
						className="rounded-full	border-solid border-2 border-gray-600 p-3 hover:scale-110 transition"
						onClick={prevPage}
						disabled={page === 1}>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="16"
							height="16"
							fill="currentColor"
							className="bi bi-chevron-left"
							viewBox="0 0 16 16">
							<path
								fill-rule="evenodd"
								d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"
							/>
						</svg>
					</button>
					<button
						className="rounded-full	border-solid border-2 border-gray-600 p-3 hover:scale-110 transition"
						onClick={nextPage}
						disabled={page * perPage >= data.length}>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="16"
							height="16"
							fill="currentColor"
							className="bi bi-chevron-right"
							viewBox="0 0 16 16">
							<path
								fill-rule="evenodd"
								d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"
							/>
						</svg>
					</button>
				</div>
				{/* <!-- Grid --> */}
				<div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
					{displayedData.map((course, i) => (
						<RatingCard
							key={i}
							title={course.Name}
							content={course.Intro}
							image={course.Filename}
						/>
					))}
				</div>
				{/* <!-- End Grid --> */}
			</div>
			{/* <!-- End Card Blog --> */}
		</>
	);
}
