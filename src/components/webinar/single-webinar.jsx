import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Collapse from "@mui/material/Collapse";
import { Tooltip } from '@mui/material';
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import parse from "html-react-parser";
import moment from "moment";

// Expand button styling
const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
        duration: theme.transitions.duration.shortest,
    }),
    transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
}));

const SingleWebinarCard = ({ webinar, setShowWebinarDialog, setSelectedWebinarId }) => {
    const [expanded, setExpanded] = useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const getPlainText = (html) => {
        const tempDiv = document.createElement("div");
        tempDiv.innerHTML = html;
        return tempDiv.textContent || tempDiv.innerText || "";
    };


    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: red[500] }} aria-label="webinar">
                        {webinar.speakerName?.[0]?.toUpperCase() || "G"}
                    </Avatar>
                }
                title={webinar.title}
                subheader={moment.utc(webinar.date).format("MMMM Do YYYY")}
            />
            {webinar.image && (
                <CardMedia
                    component="img"
                    height="194"
                    image={webinar.image}
                    alt={webinar.title}
                />
            )}
            <CardContent>
                <button
                    type="submit"
                    className="btn btn-primary w-100 my-2"
                    onClick={() => {
                        setSelectedWebinarId(webinar._id)
                        setShowWebinarDialog(true)
                    }}
                >
                    Register for this Webinar
                </button>
                <Typography variant="subtitle2" color="text.secondary">
                    Speaker: {webinar.speakerName}
                </Typography>
                <Typography variant="subtitle2" color="text.secondary">
                    Company: {webinar.companyName}
                </Typography>
                <Typography variant="subtitle2" color="text.secondary">
                    Date: {moment.utc(webinar.date).format("MMMM Do YYYY")}
                </Typography>

                <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                    {parse(
                        getPlainText(webinar.description).length > 100
                            ? getPlainText(webinar.description).substring(0, 100) + "..."
                            : getPlainText(webinar.description)
                    )}
                </Typography>
            </CardContent>
            <Tooltip title="Click to see more">

                <ExpandMore
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <ExpandMoreIcon />
                </ExpandMore>
            </Tooltip>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <Typography paragraph>{parse(webinar.description)}</Typography>
                </CardContent>
            </Collapse>
        </Card>
    );
};

export default SingleWebinarCard;
