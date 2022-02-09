import { useNavigate } from 'react-router-dom';
import BrowseHistory from "./BrowseHistory";

const NavigateSetter = () => {
    BrowseHistory.navigate = useNavigate();
    console.log(1, BrowseHistory);

    return null;
};

export default NavigateSetter;