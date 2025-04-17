
import { ReactNode, useEffect } from "react";
import { Navbar } from "@/components/navbar";
import Footer from "@/components/footer";
import { ThemeToggle } from "@/components/theme-toggle";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  // Apply scroll-performance optimizations
  useEffect(() => {
    // Add the scroll-smooth class to html to ensure smooth scrolling
    document.documentElement.classList.add('scroll-smooth');
    
    // Use passive event listeners for scroll events to improve performance
    const options = { passive: true };
    const wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';
    
    // Let's add a class to body when scrolling to optimize rendering
    let scrolling = false;
    const onScroll = () => {
      if (!scrolling) {
        scrolling = true;
        document.body.classList.add('is-scrolling');
        
        window.requestAnimationFrame(() => {
          document.body.classList.remove('is-scrolling');
          scrolling = false;
        });
      }
    };
    
    window.addEventListener('scroll', onScroll, options);
    window.addEventListener(wheelEvent, onScroll, options);
    
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener(wheelEvent, onScroll);
      document.documentElement.classList.remove('scroll-smooth');
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <ThemeToggle />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
}
