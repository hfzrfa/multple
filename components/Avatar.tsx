import Image from "next/image";
import React from "react";

type ParamsProps = {
	image: any,
	width: number,
	height: number
}

const Avatar = ({ image, width, height }: ParamsProps) => {
    return (
		<div className="hiddex xl:flex xl:max-w-none">
			<Image
                src={image}
                alt="avatar cuy"
                width={width}
                height={height}
                className="translate-z-0 w-full h-full"
            />
        </div>
    );
};

export default Avatar;
