import { Footer } from "@/components";
import { Background, Column, Flex } from "@/once-ui/components"; // Added Background
import { RouteGuard } from "@/components";
import { effects } from "@/app/resources"; // Added effects import

interface PortfolioLayoutProps {
  children: React.ReactNode;
}

export default function PortfolioLayout({ children }: PortfolioLayoutProps) {
  return (
    <Flex
      position="relative"
      zIndex={0}
      fillWidth
      paddingY="l"
      paddingX="l"
      horizontal="center" // This might conflict with direction="column", let's keep it for now but might need removal
      direction="column" // Set flex direction to column
      flex={1} // Outer container takes available space
      style={{ minHeight: "100vh" }} // Ensure outer container takes at least full viewport height
    >
      {/* Background component moved here from root layout */}
      <Background
        mask={{
          cursor: false, // Assuming 'false' disables it, adjust if prop name differs
          x: effects.mask.x,
          y: effects.mask.y,
          radius: effects.mask.radius,
        }}
        gradient={{
          display: effects.gradient.display,
          x: effects.gradient.x,
          y: effects.gradient.y,
          width: effects.gradient.width,
          height: effects.gradient.height,
          tilt: effects.gradient.tilt,
          colorStart: effects.gradient.colorStart,
          colorEnd: effects.gradient.colorEnd,
          opacity: effects.gradient.opacity as any,
        }}
        dots={{
          display: false,
          color: effects.dots.color,
          size: effects.dots.size as any,
          opacity: effects.dots.opacity as any,
        }}
        grid={{
          display: false,
          color: effects.grid.color,
          width: effects.grid.width as any,
          height: effects.grid.height as any,
          opacity: effects.grid.opacity as any,
        }}
        lines={{
          display: false,
          opacity: effects.lines.opacity as any,
        }}
      />
      {/* Content container */}
      <Flex 
        horizontal="center" 
        fillWidth 
        flex={1} // Make content area grow to push footer down
        // minHeight="0" // Removed minHeight="0" as flex={1} should handle growth
        style={{ zIndex: 1 }} // Ensure content is above background
      >
        <RouteGuard>{children}</RouteGuard>
      </Flex>
      {/* Footer should now be pushed to the bottom */}
      <Footer /> 
    </Flex>
  );
}
