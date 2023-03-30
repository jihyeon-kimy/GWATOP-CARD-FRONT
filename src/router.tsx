import { createBrowserRouter } from "react-router-dom";
import CardDeckListPage from "./pages/CardDeckListPage";
import CreateCardPage from "./pages/CreateCardPage";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import ViewPage from "./pages/ViewPage";

interface RouterElement {
  id: number;
  path: string;
  label: string;
  element: React.ReactNode;
  onNav?: boolean;
  icon?: string;
}

export const routerData: RouterElement[] = [
  {
    id: 0,
    path: "/",
    label: "Home",
    element: <HomePage />,
    onNav: true,
    icon: "./assets/Icons/Home.png",
  },
  {
    id: 1,
    path: "/create",
    label: "카드생성",
    element: <CreateCardPage />,
    onNav: true,
    icon: "./assets/Icons/Create.png",
  },
  {
    id: 2,
    path: "/cardDeckList",
    label: "MY카드덱",
    element: <CardDeckListPage />,
    onNav: true,
    icon: "./assets/Icons/Deck.png",
  },
  {
    id: 3,
    path: "/profile",
    label: "프로필",
    element: <ProfilePage />,
  },
  {
    id: 4,
    path: "/view",
    label: "카드조회",
    element: <ViewPage />,
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
        icon: router.icon,
      },
    ];

  return prev;
}, [] as RouterElement[]);
