import { Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";

import ProtectedRoute from "./components/ProtectedRoute";
import Loader from "./components/Loader";

/* ✅ lazy pages */
const Login = lazy(() => import("./components/Login"));
const Home = lazy(() => import("./pages/Home"));
const Expense = lazy(() => import("./pages/Expense"));
const MonthlyAnalysis = lazy(() => import("./pages/MonthlyAnalysis"));
const ExpenseAnalysis = lazy(() => import("./pages/ExpenseAnalysis"));
const OrderBreakdown = lazy(() => import("./pages/OrderBreakDown"));
const Settings = lazy(() => import("./pages/Settings"));

/* optional – heavy helper screen */
const AIExpenseHelper = lazy(() => import("./components/AIExpenseHelper"));

function App() {
  return (
    <Suspense fallback={<Loader text="Loading page..." />}>
      <Routes>
        <Route path="/login" element={<Login />} />

        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />

        <Route path="/home/expense" element={<Expense />} />
        <Route path="/home/monthly-analysis" element={<MonthlyAnalysis />} />
        <Route path="/home/expense/analysis" element={<ExpenseAnalysis />} />
        <Route path="/home/order-breakdown" element={<OrderBreakdown />} />
        <Route path="/home/settings" element={<Settings />} />

        <Route path="/AIExpenseHelper" element={<AIExpenseHelper />} />
      </Routes>
    </Suspense>
  );
}

export default App;
