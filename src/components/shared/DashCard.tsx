import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface DashcardProps {
  top: React.ReactNode;
  numbers?: number;
  content: string;
  type?: "complete" | "overdue" | "active" | "default" | "notStarted";
}

const DashCard = ({
  top: icon,
  numbers,
  content,
  type = "default",
}: DashcardProps) => {
  return (
    <Card
      className={`p-4 md:p-6 flex flex-col w-[148px] md:w-[187px] gap-4 md:gap-6 rounded-3xl  text-white bg-card-inprogress ${
        type === "complete"
          ? "bg-card-complete"
          : type === "overdue"
          ? "bg-card-overdue"
          : type === "notStarted" && "bg-muted-foreground"
      }`}
    >
      <CardHeader className="flex justify-end p-0">
        <CardTitle className="flex justify-end w-full ">{icon}</CardTitle>
      </CardHeader>
      <CardContent className="p-0 font-medium">
        <h1 className=" md:text-5xl text-3xl">{numbers}</h1>
        <p className="text-base ">{content}</p>
      </CardContent>
    </Card>
  );
};

interface PlainProps extends DashcardProps {
  head: string;
}

export const DashCardPlain = (props: PlainProps) => {
  const { top: icon, head, content } = props;
  return (
    <Card
      className={`p-6 flex flex-col w-full gap-6 rounded-3xl  text-black border border-black bg-transparent`}
    >
      <CardHeader className="flex justify-end p-0">
        <CardTitle className="flex justify-end w-full ">{icon}</CardTitle>
      </CardHeader>
      <CardContent className="p-0 font-medium">
        <h1 className="text-5xl">{head}</h1>
        <p className="text-base text-muted-foreground">{content}</p>
      </CardContent>
    </Card>
  );
};

export default DashCard;
