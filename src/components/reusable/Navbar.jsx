import { List } from "./List";
import { Button } from "../ui";
export const Navbar = () => {
  const navLinksData = [
    { name: "Contact" },
    { name: "Support" },
    { name: "About" },
  ];
  const NavLinksElement = navLinksData?.map((data, index) => (
    <List key={index} label={data.name} />
  ));
  return (
    <nav className=" bg-white p-5 rounded-lg flex  justify-start w-full ">
      <h1 className=" text-[1.5rem]">
        Eurasia<span>.</span>
      </h1>
        <ul className=" hidden md:flex gap-5 items-center m-0  md:m-auto">
          {NavLinksElement}
        </ul>
      <Button
        variant="secondary"
        className=" bg-muted-violet uppercase btn text-gray-100 border-2 border-black hidden md:block "
      >
        How it works ?
      </Button>
    </nav>
  );
};
