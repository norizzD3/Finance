import { Link } from "react-router-dom";
import { LucideIcon } from "lucide-react";
import { cn } from "../lib/utils";

interface CalculatorCardProps {
  name: string;
  description: string;
  path: string;
  icon: LucideIcon;
  color: string;
}

export default function CalculatorCard({ name, description, path, icon: Icon, color }: CalculatorCardProps) {
  return (
    <Link 
      to={path}
      className="group p-8 bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-blue-100 transition-all duration-300 flex flex-col items-center text-center"
    >
      <div className={cn("p-4 rounded-2xl mb-6 ring-4 ring-offset-2 transition-all duration-300 group-hover:scale-110", color)}>
        <Icon className="w-8 h-8 text-white" />
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-2">{name}</h3>
      <p className="text-gray-500 text-sm">{description}</p>
    </Link>
  );
}
