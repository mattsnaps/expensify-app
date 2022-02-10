import {BrowserRouter, Route, Routes, Navigate} from "react-router-dom";
import React from "react";
import ExpenseDashboardPage from "../components/ExpenseDashboardPage";
import AddExpensePage from "../components/AddExpensePage";
import EditExpensePage from "../components/EditExpensePage";
import NotFound from "../components/NotFoundPage";
import Header from "../components/Header";
import LoginPage from "../components/LoginPage";
import NavigateSetter from "../components/NavigateSetter";
import RequireAuth from "./RequiredAuth";

const AppRouter = () => (
    <BrowserRouter >
        <NavigateSetter />
        <Routes>
            <Route path="/" element={
                <RequireAuth redirectTo='/dashboard'>
                    <LoginPage />
                </RequireAuth>
            } />

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
            <Route path='*' element={<NotFound />} />
        </Routes>
    </BrowserRouter>
);


export default AppRouter;