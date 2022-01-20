import {BrowserRouter, Route, Routes} from "react-router-dom";
import React from "react";
import ExpenseDashboardPage from "../components/ExpenseDashboardPage";
import AddExpensePage from "../components/AddExpensePage";
import EditExpensePage from "../components/EditExpensePage";
import HelpPage from "../components/HelpPage";
import NotFound from "../components/NotFoundPage";
import Header from "../components/Header";

const AppRouter = () => (
    <BrowserRouter>
        <Header />
        <Routes>
            <Route path="/" element={<ExpenseDashboardPage />} />
            <Route path="/create" element={<AddExpensePage />} />
            <Route path="/edit" element={<EditExpensePage />} />
            <Route path="/help" element={<HelpPage />} />
            <Route path='*' element={<NotFound />} />
        </Routes>
    </BrowserRouter>
);

export default AppRouter;