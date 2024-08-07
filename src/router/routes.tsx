import { createBrowserRouter } from "react-router-dom";
import Questions from "../app/quetions";

const router = createBrowserRouter([
  {
    path: "/questions",
    element: <Questions />,
  },
]);

export default router;
