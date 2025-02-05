import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";
import { useTheme } from "@/hooks/ThemeProvider";
import { Moon, Sun } from "lucide-react";

export const Navigation = () => {
  const navigate = useNavigate();
  const { setTheme, theme } = useTheme();

  return (
    <nav className="w-full height-full fixed top-0 left-0   z-10 h-[60px]">
      <div className="mx-auto h-full flex items-center justify-between max-w-screen-md">
        <h3
          className="text-xl font-semibold hover:cursor-pointer"
          onClick={() => navigate("/")}
        >
          Todo ~ Wilpola
        </h3>
        <div className="flex items-center gap-3">
          <Button
            variant={"ghost"}
            onClick={(e) => {
              e.preventDefault();
              navigate("/basic");
            }}
          >
            Basic
          </Button>
          <Button
            variant={"ghost"}
            onClick={(e) => {
              e.preventDefault();
              navigate("/advanced");
            }}
          >
            Advanced
          </Button>
          <Button
            size={"icon"}
            variant={"ghost"}
            onClick={() => {
              setTheme(theme === "dark" ? "light" : "dark");
            }}
          >
            {}
            {/* {theme === "dark" ? "🌞" : "🌙"} */}
            {theme === "dark" ? <Sun size={24} /> : <Moon size={24} />}
          </Button>
        </div>
      </div>
    </nav>
  );
};
