import React, { useEffect, useState } from "react";
import axios from "axios";
import { Box, Grid } from "@mui/material";
import { toast } from "react-toastify";
import SingleWebinarCard from "./single-webinar"


const GetWebinars = ({ setShowWebinarDialog, setSelectedWebinarId }) => {
    const [webinars, setWebinars] = useState([]);
    const [loading, setLoading] = useState(true);

    // Fetch all webinars
    const fetchWebinars = async () => {
        try {
            setLoading(true);
            const response = await axios.get(
                "https://hyphen-back.vercel.app/api/v1/webinar"
            );
            setWebinars(response.data.webinars);
        } catch (error) {
            toast.error("Error fetching webinars.");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchWebinars();
    }, []);

    return (
        <Box sx={{ padding: 3 }}>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <Grid container spacing={2}>
                    {webinars.length > 0 ? (
                        webinars.map((webinar) => (
                            <Grid item xs={12} sm={6} md={4} key={webinar._id}>
                                <SingleWebinarCard
                                    webinar={webinar}
                                    setShowWebinarDialog={setShowWebinarDialog}
                                    setSelectedWebinarId={setSelectedWebinarId}
                                />
                            </Grid>
                        ))
                    ) : (
                        <p style={{ marginLeft: "15px" }}>No webinars found.</p>
                    )}

                </Grid>
            )}
        </Box>
    );
};

export default GetWebinars;
