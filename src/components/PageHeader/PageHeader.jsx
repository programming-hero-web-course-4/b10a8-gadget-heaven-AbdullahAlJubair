import PropTypes from "prop-types";
const PageHeader = ({title, subTitle}) => {
    return (
        <div className="text-center px-2">
            <h3 className="text-2xl md:text-4xl text-white font-bold mb-4">{title}</h3>
            <p className="max-w-[700px] mx-auto text-base text-white">{subTitle}</p>
        </div>
    );
};

PageHeader.propTypes = {
    title : PropTypes.string.isRequired,
    subTitle : PropTypes.string.isRequired,
}

export default PageHeader;