import React from "react";
import Style from "./index.module.scss";

interface Props {
	className?: string;
	size?: string;
}

export const Loader: React.FC<Props> = (props: Props) => {
	const className = props?.className;
	const size = props?.size || "Medium";
	const loaderSize = () => {
		switch (size || null) {
			case "Small":
				return Style.small;
			case "Medium":
				return Style.medium;
			case "Large":
				return Style.large;
			case "":
			case undefined:
			case null:
				return "";
		}
		return "";
	};
	const getLoaderSize = loaderSize();
	return (
		<>
			<div className={`${Style.loaderWrapper} ${className} ${getLoaderSize}`}>
				<div className={Style.loader}></div>
			</div>
		</>
	);
};

export default Loader;
