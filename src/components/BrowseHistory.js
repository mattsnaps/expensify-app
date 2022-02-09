const BrowseHistory = {
    navigate: null,
    push: (page) => typeof BrowseHistory.navigate === "function" && BrowseHistory.navigate(page)
};

export default BrowseHistory;