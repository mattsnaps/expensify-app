import { useNavigate, useLocation } from 'react-router-dom';

const browseHistory = {
    navigate: null,
    currentLocation: null,
    push: (page) => browseHistory.navigate(page)
};

const NavigateSetter = () => {
    browseHistory.navigate = useNavigate();
    browseHistory.currentLocation = useLocation().pathname;
    return null;
};

export { browseHistory, NavigateSetter as default };