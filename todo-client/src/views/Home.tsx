import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto max-w-screen-lg">
      <div className="grid items-center content-center grid-cols-[1fr_1fr] justify-center h-screen gap-2 w-auto">
        <Card
          className="shadow-none justify-self-end max-w-[400px] hover:shadow-lg cursor-pointer"
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
          className="shadow-none max-w-[400px] h-full hover:shadow-lg cursor-pointer"
          onClick={() => navigate("/advanced")}
        >
          <CardHeader>
            <CardTitle>Advnaced todo - app</CardTitle>
          </CardHeader>
          <CardContent>
            <p> Perfect for those who need a little more detailed todo app</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
