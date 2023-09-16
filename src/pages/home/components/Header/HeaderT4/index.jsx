import React from "react";
import { data } from "../../../../../data/headerData";
import { useTranslation } from "react-i18next";
import HeaderTextSlider from "./HeaderTextSlider";
const HeaderT4 = () => {
	const { t, i18n } = useTranslation();
	return (
		<>
			<div className='w-full h-screen' />
			<div
				className=' bg-cover bg-right lg:bg-center bg-no-repeat h-screen w-full max-w-[1920px] top-0 left-0 fixed -z-40'
				dir={i18n.language == "ar" || i18n.language == "fa" ? "rtl" : "ltr"}
			>
				<video
					autoPlay
					loop
					muted
					id='video'
					className='absolute w-full h-full object-fill object-center max-lg:hidden'
				>
					<source src={data.video[0]} type='video/mp4' />
				</video>
				<video
					autoPlay
					loop
					muted
					id='video'
					className='absolute w-full h-full object-fill object-center lg:hidden'
				>
					<source src={data.video[1]} type='video/mp4' />
				</video>
				<div
					className='h-full w-full bg-cover'
					style={{
						background:
							"radial-gradient(105.51% 436.49% at 97.61% 8.38%, rgba(0, 0, 0, 0.33) 0%, rgba(0, 0, 0, 0) 0.01%, rgba(0, 0, 0, 0.25) 100%)",
					}}
				>
					{/* <div className="h-full w-full relative">
            <HeaderTextSlider />
          </div> */}
				</div>
			</div>
		</>
	);
};

export default HeaderT4;
