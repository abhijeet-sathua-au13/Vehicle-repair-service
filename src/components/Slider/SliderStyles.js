import { makeStyles } from "@material-ui/core";

const SliderStyle = makeStyles((theme) => ({
    sliderCardroot: {
        maxWidth: 150,
        backgroundColor: 'transparent',
        boxShadow: 'none'
    },
    sliderCardmedia: {
        height: '120px',
        paddingTop: '56.25%', // 16:9
    },
}))

export default SliderStyle;