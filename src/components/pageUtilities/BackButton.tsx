import React from "react";
import { Button } from "../ui/button.tsx";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface BackButtonProps {
  route?: string;
  text?: string;
}

const BackButton = ({
  route = "/",
  text = "Back to Home",
}: BackButtonProps) => {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto max-w-6xl px-6 mb-8">
      <Button
        type="button"
        variant="ghost"
        onClick={(e) => {
          e.preventDefault();
          navigate(route);
        }}
        className="gap-2 -ml-4 cursor-pointer"
      >
        <ArrowLeft className="w-4 h-4" />
        {text}
      </Button>
    </div>
  );
};

export default BackButton;
