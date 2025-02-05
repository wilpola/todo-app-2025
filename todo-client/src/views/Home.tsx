import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto max-w-screen-lg">
      <div className="max-w-[95%] flex flex-col pt-[70px] md:grid items-center content-center md:grid-cols-[1fr_1fr] justify-center h-screen gap-2 w-auto mx-auto">
        <div className="w-full col-span-2 flex flex-col items-center justify-center">
          <h1 className="text-4xl font-semibold">Choose your poison</h1>
          <p className="my-2">
            {" "}
            Choose which todo app experience you would like to use.
          </p>
        </div>
        <Card
          className="shadow-none justify-self-end max-w-[400px] hover:shadow-lg cursor-pointer max-h-[162px]"
          onClick={() => navigate("/basic")}
        >
          <CardHeader>
            <CardTitle>Basic todo - app</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              {" "}
              Get started by choosing the basic view. This is perfect for those
              that just need a simple place to store their small todos.
            </p>
          </CardContent>
        </Card>
        <Card
          className="shadow-none max-w-[400px] h-full hover:shadow-lg cursor-pointer max-h-[162px]"
          onClick={() => navigate("/advanced")}
        >
          <CardHeader>
            <CardTitle>Advanced todo - app</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              {" "}
              Perfect for those who need a little more detailed todo app.
              Including tags, due dates, and task descriptions.{" "}
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
