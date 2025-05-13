import Aurora from '@/components/ui/Aurora';

// Using the Aurora component with increased height (amplitude)
export default function AuroraDemo() {
  return (
    <div className="w-full h-screen relative">
      {/* Using an even higher amplitude (3.0) for more dramatic waves */}
      <Aurora
        colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
        blend={0.5}
        amplitude={0.1} 
        speed={0.5}
      />
      
      {/* Optional content over the aurora */}
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-4xl font-bold text-black dark:text-white drop-shadow-lg">
          Aurora Effect
        </h1>
      </div>
    </div>
  );
}