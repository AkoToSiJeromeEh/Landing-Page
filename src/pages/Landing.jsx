import { Navbar, Footer } from "../components";
import { Card, CardHeader, CardTitle, Button } from "../components/ui";
import { GiMedicines } from "react-icons/gi";
import { LiaCoinsSolid } from "react-icons/lia";
import { MdOutlineInventory2 } from "react-icons/md";
export const Landing = () => {
  const SystemLinkData = [
    {
      icon: <GiMedicines />,
      title: "Botike",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur pariatur culpa, vitae assumenda perspiciatis nihil quibusdam minus voluptatum, error architecto beatae. Nobis nihil voluptates tempora voluptate labore quia, ipsam laudantium.",
    },
    {
      icon: <LiaCoinsSolid />,
      title: "Distburstment Voucher",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur pariatur culpa, vitae assumenda perspiciatis nihil quibusdam minus voluptatum, error architecto beatae. Nobis nihil voluptates tempora voluptate labore quia, ipsam laudantium.",
    },
    {
      icon: <MdOutlineInventory2 />,
      title: "Inventory",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur pariatur culpa, vitae assumenda perspiciatis nihil quibusdam minus voluptatum, error architecto beatae. Nobis nihil voluptates tempora voluptate labore quia, ipsam laudantium.",
    },
  ];

  const SystemLinkELements = SystemLinkData?.map((data, index) => (
    <Card
      className={`relative  border-2 flex items-center justify-center text-center border-black w-full h-full md:h-fit md:w-fit `}
      key={index}
    >
      <div className=" absolute -top-6 rounded-full w-12 h-12  left-0	right-0 m-auto flex items-center justify-center   bg-white text-black text-2xl ">
        {data.icon}
      </div>
      <CardHeader className=" mt-5 flex flex-col gap-5">
        <CardTitle className=" text-lg sm:text-2xl md:text-4xl">{data.title}</CardTitle>
        <Button
          variant="secondary"
          className="bg-muted-violet uppercase btn text-gray-100 border-2 border-black "
        >
          Click To Start
        </Button>
      </CardHeader>
    </Card>
  ));

  return (
    <div className=" min-h-dvh bg-light-violet text-black grid grid-rows-[auto_1fr_auto] w-full md:p-5">
      <Navbar />
      <main className=" flex flex-col items-center  justify-center mt-5 gap-12 ">

          <h1 className=" text-[1rem] sm:text-3xl md:text-4xl max-w-[15ch] md:max-w-[28ch] text-center leading-9 font-extrabold ">
            EURASIA RESEARCH CORP BEST MANUFACTURER IN THE WORLD
          </h1>
  
        <div className=" flex gap-10 p-0  md:gap-5 md:p-5 flex-col md:flex-row w-[95%]  sm:w-fit">
          {SystemLinkELements}
        </div>
      </main>
      <Footer />
    </div>
  );
};
