import {BrowserRouter, Route, Routes, unstable_HistoryRouter} from "react-router-dom";
import React from "react";
import ExpenseDashboardPage from "../components/ExpenseDashboardPage";
import AddExpensePage from "../components/AddExpensePage";
import EditExpensePage from "../components/EditExpensePage";
import HelpPage from "../components/HelpPage";
import NotFound from "../components/NotFoundPage";
import Header from "../components/Header";
import LoginPage from "../components/LoginPage";
import NavigateSetter from "../components/NavigateSetter";


const AppRouter = () => (
    <BrowserRouter >
        <NavigateSetter />
        <Header />
        <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/dashboard" element={<ExpenseDashboardPage />} />
            <Route path="/create" element={<AddExpensePage />} />
            <Route path="/edit/:id" element={<EditExpensePage />} />
            <Route path="/help" element={<HelpPage />} />
            <Route path='*' element={<NotFound />} />
        </Routes>
    </BrowserRouter>
);

export default AppRouter;