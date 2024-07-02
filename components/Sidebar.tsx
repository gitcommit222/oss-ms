import Image from "next/image";
import Link from "next/link";
import React from "react";

const Sidebar = () => {
	return (
		<section className="w-[200px] shadow-md h-screen">
			<div className="h-[100px] flex items-center justify-center">
				<Link href="/">
					<Image
						src="/images/PRINTING LOGO 1.svg"
						height={100}
						width={160}
						alt="logo"
                        objectFit="contain"
					/>
				</Link>
			</div>
		</section>
	);
};

export default Sidebar;
