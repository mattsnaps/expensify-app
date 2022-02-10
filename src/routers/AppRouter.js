import {BrowserRouter, Route, Routes, Navigate} from "react-router-dom";
import React from "react";
import { connect, useSelector } from "react-redux";
import ExpenseDashboardPage from "../components/ExpenseDashboardPage";
import AddExpensePage from "../components/AddExpensePage";
import EditExpensePage from "../components/EditExpensePage";
import HelpPage from "../components/HelpPage";
import NotFound from "../components/NotFoundPage";
import Header from "../components/Header";
import LoginPage from "../components/LoginPage";
import NavigateSetter from "../components/NavigateSetter";
import RequireAuth from "./RequiredAuth";

const AppRouter = () => (
    <BrowserRouter >
        <NavigateSetter />
        <Routes>
            <Route path="/" element={<LoginPage />} />

            <Route path="/dashboard" element={
                <RequireAuth redirectTo='/'>
                    <Header />
                    <ExpenseDashboardPage />
                </RequireAuth>
            } />

            <Route path="/create" element={
                <RequireAuth redirectTo='/'>
                    <Header />
                    <AddExpensePage />
                </RequireAuth>
            } />

            <Route path="/edit/:id" element={
                <RequireAuth redirectTo='/'>
                    <Header />
                    <EditExpensePage />
                </RequireAuth>
            } />

            <Route path="/help" element={<HelpPage />} />
            <Route path='*' element={<NotFound />} />
        </Routes>
    </BrowserRouter>
);


export default AppRouter;