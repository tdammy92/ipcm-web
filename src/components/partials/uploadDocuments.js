import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import FormControl from "@material-ui/core/FormControl";
import { makeStyles } from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";
import Typography from "@material-ui/core/Typography";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import React, { forwardRef } from "react";

//file them
const useStyles = makeStyles((theme) => ({
	root: {
		minWidth: 275,
		width: "100%",
		height: theme.spacing(8),
		// marginTop: theme.spacing(1),
		borderRadius: theme.spacing(1),
		display: "flex",
		justifyContent: "space-between",
	},
	bullet: {
		display: "inline-block",
		margin: "0 2px",
		transform: "scale(0.8)",
	},
	title: {
		fontSize: 14,
	},
}));

const Documents = forwardRef(
	(
		{
			documentName,
			isChecked,
			handleClick,
			handleChange,
			selectedFileName,
			handleRemove,
		},
		ref
	) => {
		const classes = useStyles();

		return (
			<Tooltip title={documentName}>
				<FormControl
					variant="outlined"
					style={{ width: "90%", margin: "5px", cursor: "pointer" }}
				>
					<Card className={classes.root} variant="outlined">
						<CardContent
							onClick={handleClick}
							style={{
								display: "flex",
								flex: 1,
								flexDirection: "row",

								alignItems: "center",
							}}
						>
							<div
								style={{
									padding: "10px",
									borderRadius: "50%",
									backgroundColor: "rgba(1, 152, 150, 0.1)",
									display: "flex",
									alignItems: "center",
									justifyContent: "center",
								}}
							>
								<FileCopyIcon fontSize="small" color="primary" />
							</div>
							<Typography
								variant="subtitle1"
								style={{
									marginLeft: "4px",
								}}
							>
								{documentName}
							</Typography>
							<Typography
								variant="subtitle1"
								style={{
									marginLeft: "15px",
									textDecoration: "underline",
								}}
							>
								{selectedFileName}
							</Typography>
						</CardContent>
						<CardActions
							style={{
								display: "flex",
								flexDirection: "row",
								// border: "1px solid blue",
							}}
						>
							{selectedFileName && (
								<div onClick={handleRemove}>
									<HighlightOffIcon fontSize="large" color="primary" />
								</div>
							)}
							<input
								type="file"
								accept="image/*,.doc, .docx,.pdf"
								style={{ display: "none" }}
								ref={ref}
								onChange={(e) => {
									const file = e?.target?.files[0];
									// if (file && file?.type?.substring(0, 5) === "image") {
									if (file) {
										handleChange(file);
									} else {
										handleChange(null);
									}
								}}
							/>
						</CardActions>
					</Card>
				</FormControl>
			</Tooltip>
		);
	}
);

export default Documents;
