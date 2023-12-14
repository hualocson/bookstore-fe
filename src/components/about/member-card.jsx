import { Card, CardBody, CardFooter } from "@nextui-org/react";
import { User } from "lucide-react";

const MemberCard = ({ name, role, desc }) => {
  return (
    <Card radius="lg" className="border-none bg-grayscale-800 text-light">
      <CardBody className="overflow-visible p-0">
        <span className="h-96 w-96">
          <User className="h-full w-full" />
        </span>
      </CardBody>
      <CardFooter className="flex-col gap-4 bg-primary-500 text-xl text-grayscale">
        <div className="flex w-full flex-col items-center">
          <p id="card-name" className="font-bold">
            {name}
          </p>
          <p id="card-desc" className="text-lg">
            {desc}
          </p>
        </div>
        <p
          id="card-role"
          className="rounded-lg bg-grayscale-100/20 p-2 text-lg backdrop-blur-lg"
        >
          {role}
        </p>
      </CardFooter>
    </Card>
  );
};

export default MemberCard;
