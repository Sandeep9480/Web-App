import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import "./InfoBox.css";
import { Icon } from "@mui/material";

const InfoBox = ({ info }) => {
  const INIT_URL =
    "https://media.istockphoto.com/id/531312214/photo/storm-over-the-fields.jpg?s=2048x2048&w=is&k=20&c=KvC435f-Sq0VD8WWQ0d8HIQZ-RQXlOB5LmMqRincAeE=";
  const RAIN_URL =
    "https://images.unsplash.com/photo-1534274988757-a28bf1a57c17?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const HOT_URL =
    "https://images.unsplash.com/photo-1561473880-3b8b12de0a71?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  const COOL_URL =
    "https://images.unsplash.com/photo-1610215868058-f9879ac512c0?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  return (
    <div className="infoBox">
      <div className="cardContainer">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image={
              info.humidity > 80
                ? RAIN_URL
                : info.temp > 25
                ? HOT_URL
                : COOL_URL
            }
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {info.city}{" "}
              {info.humidity > 80 ? (
                <ThunderstormIcon />
              ) : info.temp > 25 ? (
                <WhatshotIcon />
              ) : (
                <AcUnitIcon />
              )}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              component={"span"}
            >
              <div>Temprature : {info.temp}&deg;C</div>
              <div>Humidity : {info.humidity}</div>
              <div>Min Temp : {info.tempMin}&deg;C</div>
              <div>Max Temp : {info.tempMax}&deg;C</div>
              <div>
                The weather can be discribed as{" "}
                <b>
                  <i>{info.weather}</i>
                </b>{" "}
                and feels like : {info.feelsLike}&deg;C
              </div>
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      </div>
    </div>
  );
};

export default InfoBox;
