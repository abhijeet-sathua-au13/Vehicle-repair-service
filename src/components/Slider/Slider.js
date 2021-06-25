import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import useStyles from "./SliderStyles";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import audi from "../../assets/images/audi.png";
import lexus from "../../assets/images/lexus.png";
import toyota from "../../assets/images/toyota.png";
import landRover from "../../assets/images/landrover.png";
import bmw from "../../assets/images/bmw.png";



const DomainSlider = () => {

  const classes = useStyles();

  let settings = {
    dot: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    cssEase: "linear",
  };

  const carServices = [lexus, landRover, bmw, audi, toyota]

  return (
    <Slider {...settings}>
        {carServices.map((carService,carIndex) => {
            return <Card className={classes.sliderCardroot} key={carIndex}>
                      <CardMedia
                        className={classes.sliderCardmedia}
                        image={carService}
                        title={carService}
                      />
                    </Card>
        })}
    </Slider>
  );
};

export default DomainSlider;
