import React from "react";
import Typography from "@material-ui/core/Typography";

export function CustomText({ text, color, variant, style }) {
	return (
		<Typography
			className={{ ...style }}
			color={color || "primary"}
			gutterBottom
			variant={variant}
		>
			{text}
		</Typography>
	);
}
