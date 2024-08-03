export interface LinkProps {
  name: string;
  path: string;
}

export const ListLinks: LinkProps[] = [
  {
    name: "Inicio",
    path: "/",
  },
  {
    name: "Proyectos",
    path: "/projects",
  },
  {
    name: "Posts",
    path: "/posts",
  },
];
