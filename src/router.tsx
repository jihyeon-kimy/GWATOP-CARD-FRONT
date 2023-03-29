import { createBrowserRouter } from "react-router-dom";
import CardListPage from "./pages/CardListPage";
import CreateCardPage from "./pages/CreateCardPage";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import SearchPage from "./pages/SearchPage";

interface RouterElement {
  id: number;
  path: string;
  label: string;
  element: React.ReactNode;
  onNav?: boolean;
}

export const routerData: RouterElement[] = [
  {
    id: 0,
    path: "/",
    label: "Home",
    element: <HomePage />,
    onNav: true,
  },
  {
    id: 1,
    path: "/create",
    label: "카드생성",
    element: <CreateCardPage />,
    onNav: true,
  },
  {
    id: 2,
    path: "/cardList",
    label: "MY카드덱",
    element: <CardListPage />,
    onNav: true,
  },
  {
    id: 3,
    path: "/profile",
    label: "프로필",
    element: <ProfilePage />,
  },
  {
    id: 4,
    path: "/search",
    label: "카드조회",
    element: <SearchPage />,
  },
];

export const routers = createBrowserRouter(
  routerData.map((router) => {
    return { path: router.path, element: router.element };
  })
);

export const navList: RouterElement[] = routerData.reduce((prev, router) => {
  if (router.onNav === true)
    return [
      ...prev,
      {
        id: router.id,
        path: router.path,
        label: router.label,
        element: router.element,
      },
    ];

  return prev;
}, [] as RouterElement[]);
