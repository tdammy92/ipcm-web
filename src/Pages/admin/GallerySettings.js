import React, { useEffect, useState, useRef } from "react";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";

import { useSelector } from "react-redux";

//table  importss
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Badge from "@material-ui/core/Badge";
import { withStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
//icons
import WallpaperIcon from "@material-ui/icons/Wallpaper";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import DeleteIcon from "@material-ui/icons/Delete";

import { useGallery } from "../../Services/queries/gallery-query";
import { useDeleteGallery, useUploadGallery } from "../../Services/mutations/gallery-mutation";
import GalleryLoader from "../../components/Loaders/GalleryLoader";

const StyledBadge = withStyles((theme) => ({
  badge: {
    right: -12,
    top: 15,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}))(Badge);

const useStyles = makeStyles((theme) => ({
  root: {},

  headerText: {
    marginTop: theme.spacing(5),
  },
  headerCard: {
    display: "flex",
    flexDirection: "column",
    width: "auto",
    minWidth: "350px",
    alignItems: "center",
    justifyContent: "center",
    height: "auto",
    marginTop: theme.spacing(2),
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    flexWrap: "wrap",

    // border: "1px solid  yellow",
  },
  ImageCard: {
    display: "flex",
    flexDirection: "column",
    width: "auto",
    alignItems: "center",
    justifyContent: "center",
    height: "auto",
    marginTop: theme.spacing(4),

    // border: "1px solid  red",
  },
  card: {
    height: "3rem",
  },
  OptionContainer: {
    display: "flex",
    flexDirection: "column",
    width: "auto",
    minWidth: "350px",
    alignItems: "center",
    justifyContent: "space-between",
    justifySelf: "center",
    alignSelf: "center",
    padding: theme.spacing(2),

    cursor: "pointer",

    // border: "1px dotted red",
  },

  imageIconWrapper: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    padding: theme.spacing(1),
    borderRadius: theme.spacing(1),

    // border: "1px dotted  red",
    border: "1px dotted  #01996d",
  },

  uploadText: {
    // flex: 1,
    marginRight: theme.spacing(2),
    marginLeft: theme.spacing(1),
  },

  textInput: {
    width: "100%",
    marginTop: theme.spacing(1),
    // marginBottom: theme.spacing(1),
  },
  buttonUpload: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    width: "100%",
    // color: theme.color(theme.palette.info),
  },
  button: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),

    // color: theme.color(theme.palette.info),
  },

  infoText: {
    maxWidth: "350px",
    textAlign: "justify",
  },

  tableContainer: {
    marginTop: theme.spacing(5),
  },
  table: {
    minWidth: 350,
    marginTop: theme.spacing(1),
  },
  Image: {
    marginLeft: theme.spacing(4),
    width: theme.spacing(30),
    // maxWidth: theme.spacing(30),
    height: theme.spacing(25),
    resizeMode: "contain",
  },
}));

const InitialValue = {
  imageUrl: "",
  fileName: "",
  caption: "",
};


function GallerySettings() {
  const classes = useStyles();



  const imgRef = useRef(null);

  const { details } = useSelector((state) => state.users);


  const {data:galleryData,isLoading:isLoadingGallery} = useGallery();
  const {mutateAsync:uploadMutation,isLoading:isUploadingGalleryImage} = useUploadGallery();
  const {mutateAsync:deleteMutation,isLoading:isDeletingGalleryImage} = useDeleteGallery();

  const [file, setFile] = useState();

  const [image, setImage] = useState(() => ({
    ...InitialValue,
  }));


  //handle Uploads
  const selectImage = (e) => {
    // e.preventDefault();
    if (imgRef?.current) {
      imgRef?.current?.click();
    }
  };

  const uploadImage = async () => {

    if (image?.imageUrl === "") return;

    const payload = {
      imageFile: image?.imageUrl,
      caption: image?.caption,
      uploadedBy: details?.admin?._id,
    };

    try {
      const newImageResponse = await uploadMutation(payload);

      if (newImageResponse.status === 201) {
        setFile(null)
        setImage({ ...InitialValue });
        // getGalleryImages();
      }
    } catch (error) {
    } 
  };

  const handleDelete = async (id, publicId) => {

    
    try {

      const payload = {
        mongoDbId: id,
        cloudinaryPublic: publicId,
      };

      const deleteRes = await deleteMutation({id,payload});

      // if (deleteRes.status === 201) {
    
      // }

    } catch (error) {
    } 
  };



  //fires to get base64 for  Image
  useEffect(() => {
    if (file) {
      setImage((prev) => ({
        ...prev,
        fileName: file?.name,
      }));
      const Reader = new FileReader();
      Reader.onload = () => {
        setImage((prev) => ({ ...prev, imageUrl: Reader?.result }));
      };
      Reader.readAsDataURL(file);
    }
  }, [file]);

  return (
    <div>
      <CssBaseline />
      <Container maxWidth="md" mt={5}>
        <Typography
          variant="h5"
          color="primary"
          align="center"
          gutterBottom
          className={classes.headerText}
        >
          GALLERY DASHBOARD
        </Typography>

        <Box component="span" mt={4}>
          <Paper
            variant="outlined"
            elevation={3}
            className={classes.headerCard}
          >
            <Paper elevation={0} className={classes.OptionContainer}>
              <div className={classes.imageIconWrapper} onClick={selectImage}>
                <IconButton>
                  <WallpaperIcon fontSize="small" color="primary" />
                </IconButton>

                <Typography
                  variant="subtitle1"
                  color="primary"
                  className={classes.uploadText}
                >
                  {image?.fileName !== ""
                    ? image?.fileName
                    : `Upload an Image. Max size 2 MB`}
                </Typography>

                <input
                  type="file"
                  accept="image/*"
                  style={{ display: "none" }}
                  ref={imgRef}
                  onChange={(e) => {
                    const file = e?.target?.files[0];
                    if (file && file?.type?.substring(0, 5) === "image") {
                      setFile(file);
                    } else {
                      setFile(null);
                    }
                  }}
                />
              </div>
              <TextField
                id="standard-text-input"
                color="primary"
                label="Caption"
                type="text"
                variant="outlined"
                autoComplete="false"
                value={image?.caption}
                onChange={(e) =>
                  setImage((prev) => ({ ...prev, caption: e.target.value }))
                }
                className={classes.textInput}
              />
              <Button
                onClick={uploadImage}
                variant="outlined"
                color="primary"
                disabled={image?.imageUrl === ""}
                className={classes.buttonUpload}
                startIcon={<CloudUploadIcon />}
              >
                Upload
              </Button>

              <div>
                <Typography
                  variant="subtitle1"
                  color="primary"
                  className={classes.infoText}
                >
                  NB: Maximum Image allowed in gallery database is 32 images,
                  Once image exceeds 32, old images will be removed to replace
                  newer once
                </Typography>
              </div>
            </Paper>
          </Paper>

          <TableContainer component={Paper} className={classes.tableContainer}>
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="center" variant="head" size="medium">
                    <StyledBadge color="primary" badgeContent={galleryData?.length}>
                      <Typography variant="h5" color="primary">
                        Images
                      </Typography>
                    </StyledBadge>
                  </TableCell>
                  <TableCell align="center">
                    <Typography variant="h5" color="primary">
                      Captions
                    </Typography>
                  </TableCell>
                  <TableCell align="center">
                    <Typography variant="h5" color="primary">
                      Delete
                    </Typography>
                  </TableCell>
                </TableRow>
              </TableHead>
              {isLoadingGallery ? <GalleryLoader/> :<TableBody>
                {galleryData?.map(({ _id, image, caption }, i) => (
                  <TableRow key={_id}>
                    <TableCell align="center">
                      <Badge color="primary" badgeContent={i + 1}>
                        <Avatar
                          alt={`image ${i}`}
                          src={image?.url}
                          className={classes.Image}
                          variant="rounded"
                          style={{
                            resizeMode: "contain",
                            objectFit: "contain",
                          }}
                        />
                      </Badge>
                    </TableCell>
                    <TableCell align="center">
                      <Typography variant="h5" color="primary">
                        {caption !== "" ? caption : `Nil`}
                      </Typography>
                    </TableCell>
                    <TableCell align="center">
                      <Button
                        onClick={() => handleDelete(_id, image?.public_id)}
                        variant="outlined"
                        color="primary"
                        className={classes.button}
                        startIcon={<DeleteIcon />}
                      >
                        Delete
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>}
            </Table>
          </TableContainer>
        </Box>
      </Container>
    </div>
  );
}

export default GallerySettings;
