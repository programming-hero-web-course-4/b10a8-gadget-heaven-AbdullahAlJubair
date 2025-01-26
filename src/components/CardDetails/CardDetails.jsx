import { useParams } from "react-router-dom";

const CardDetails = () => {
    const {obj} = useParams();
    console.log(obj);
    return (
        <div>
            
        </div>
    );
};

export default CardDetails;