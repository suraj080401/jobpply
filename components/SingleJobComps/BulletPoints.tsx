import React from "react";

interface BulletPointsProps {
	data: string[];
	title: string;
}

const BulletPoints: React.FC<BulletPointsProps> = ({ data, title }) => {
	function generateRandomHexColor() {
		const getRandomHexDigit = () => Math.floor(Math.random() * 8).toString(16);

		let colorCode = "#";
		for (let i = 0; i < 3; i++) {
			colorCode += getRandomHexDigit();
		}
		return colorCode;
	}

	return (
		<>
			{title === "Skills" ? (
				<div className="flex flex-col">
					<div>
						<p className="md:text-lg text-sm underline font-bold">
							Add these skills in resume
						</p>
					</div>
					<div className="flex flex-row flex-wrap">
						{data.map((item, i) => {
							const randomColor = generateRandomHexColor();
							return (
								<p
									key={i}
									style={{
										backgroundColor: `${randomColor}3`,
										color: randomColor,
									}}
									className={`px-2 py-1 rounded-xl my-2 mr-2 md:text-sm text-xs bg-opacity-20`}
								>
									{item}
								</p>
							);
						})}
					</div>
				</div>
			) : (
				<div className="flex flex-col">
					<div>
						<p className="md:text-lg text-md font-bold">{title}</p>
					</div>
					<div>
						{data.map((item, i) => {
							return (
								<p key={i} className="md:text-sm text-xs my-2">
									- {item}
								</p>
							);
						})}
					</div>
				</div>
			)}
		</>
	);
};

export default BulletPoints;
