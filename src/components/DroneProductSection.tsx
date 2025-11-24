
import droneBg from "../assets/drone-t021-bg.png";
import { useTheme } from "../contexts/ThemeProvider";

export default function DroneShowcase() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <section
      className={`relative  bg-black flex items-start md:items-center justify-center overflow-hidden px-6 py-20   ${
        isDark ? "bg-black text-white" : "bg-white text-gray-900"
      }`}
    >
      <div className="max-w-[1200px] mx-auto">
        <img src={droneBg} className="w-full h-auto" />
      </div>
    </section>
  );
}
