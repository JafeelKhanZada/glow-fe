import { createBrowserRouter } from "react-router-dom";
import Questions from "../app/quetions";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Questions />,
  },
]);

export default router;
