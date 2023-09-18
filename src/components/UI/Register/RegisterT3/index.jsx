import React from "react";
import { useTranslation } from "react-i18next";
import { MdLocationOn } from "react-icons/md";
import { data } from "../../../../data/registerData";
import RegisterForm from "../../../Forms/RegisterForm";
import BG from "../../../../assets/images/bg.webp";
const SocialElement = ({ icon, name, modal }) => {
	return (
		<div className='flex items-center'>
			<div
				className={`w-12 h-12 bg-secondary text-big flex justify-center items-center`}
			>
				{icon}
			</div>
			<p
				className={`font-bold text-base px-4 ${
					modal ? "text-primary" : "text-white"
				}`}
			>
				{name}
			</p>
		</div>
	);
};

function RegisterT1({ modal }) {
	const { i18n, t } = useTranslation();

	return (
		<div
			style={{
				backgroundImage: `url(${BG})`,
			}}
			className={`bg-fixed  bg-cover`}
		>
			<div
				dir={i18n.language == "ar" || i18n.language == "fa" ? "rtl" : "ltr"}
				className={`md:grid md:grid-cols-12 bg-primary/50 ${
					!modal && "px-[5%] md:px-[10%]"
				}`}
			>
				<div
					className={`col-span-12 p-4 lg:px-4 xl:grid xl:grid-cols-12 gap-4 ${
						modal ? "bg-secondary" : " py-28"
					} row-span-2`}
				>
					<div
						className={`col-span-6 space-y-12 flex flex-col justify-between items-stretch ${
							modal ? "text-primary" : "text-white"
						}`}
					>
						<div className='space-y-12'>
							<p className={`font-bold text-bigger xl:text-huge md:w-[70%]`}>
								{t(data.slogan)}
							</p>
							<p className='font-regular text-med'>{t(data.subTitle)}</p>
						</div>
						<div className='max-xl:hidden'>
							<SocialElement
								icon={<MdLocationOn className='text-primary' />}
								name={t(data.address)}
								modal={modal}
							/>
						</div>
					</div>
					<div className='col-span-6 max-lg:pt-8'>
						<RegisterForm modal={modal} />
					</div>
					<div className='xl:hidden max-xl:mt-6'>
						<SocialElement
							icon={<MdLocationOn className='text-primary' />}
							name={t(data.address)}
							modal={modal}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

export default RegisterT1;
