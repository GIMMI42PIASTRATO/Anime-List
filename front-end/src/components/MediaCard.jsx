import PropTypes from "prop-types";

export default function MediaCard({ image, name }) {
    return (
        <div>
            <a href="#">
                <img src={image} alt="anime logo" />
            </a>
            <a href="#">{name}</a>
        </div>
    );
}

MediaCard.propTypes = {
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
};
