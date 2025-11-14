import { useState, useEffect } from "react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { QuoteDialog } from "./components/QuoteDialog";
import { HomePage } from "./pages/HomePage";
import { ProductsPage } from "./pages/ProductsPage";
import { ProductDetailPage } from "./pages/ProductDetailPage";
import { AboutPage } from "./pages/AboutPage";
import { ServicesPage } from "./pages/ServicesPage";
import { ContactPage } from "./pages/ContactPage";

type Page = "home" | "products" | "product-detail" | "about" | "services" | "contact";

function App() {
  const [currentPage, setCurrentPage] = useState<Page>("home");
  const [productId, setProductId] = useState<string>("");
  const [quoteDialogOpen, setQuoteDialogOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<string | undefined>();

  // Simple client-side routing
  useEffect(() => {
    const path = window.location.pathname;
    const hash = window.location.hash;

    if (path === "/" || path === "/index.html") {
      setCurrentPage("home");
    } else if (path === "/products") {
      setCurrentPage("products");
    } else if (path.startsWith("/product/")) {
      const id = path.split("/product/")[1];
      setProductId(id);
      setCurrentPage("product-detail");
    } else if (path === "/about") {
      setCurrentPage("about");
    } else if (path === "/services") {
      setCurrentPage("services");
    } else if (path === "/contact") {
      setCurrentPage("contact");
    }

    // Handle hash-based routing as fallback
    if (hash) {
      const hashPage = hash.replace("#", "") as Page;
      if (["home", "products", "about", "services", "contact"].includes(hashPage)) {
        setCurrentPage(hashPage);
      }
    }
  }, []);

  // Update URL when page changes
  const navigateTo = (page: Page, id?: string) => {
    setCurrentPage(page);
    if (page === "product-detail" && id) {
      setProductId(id);
      window.history.pushState({}, "", `/product/${id}`);
    } else if (page === "home") {
      window.history.pushState({}, "", "/");
    } else {
      window.history.pushState({}, "", `/${page}`);
    }
    window.scrollTo(0, 0);
  };

  // Handle browser back/forward buttons
  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname;
      if (path === "/" || path === "/index.html") {
        setCurrentPage("home");
      } else if (path === "/products") {
        setCurrentPage("products");
      } else if (path.startsWith("/product/")) {
        const id = path.split("/product/")[1];
        setProductId(id);
        setCurrentPage("product-detail");
      } else if (path === "/about") {
        setCurrentPage("about");
      } else if (path === "/services") {
        setCurrentPage("services");
      } else if (path === "/contact") {
        setCurrentPage("contact");
      }
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  // Intercept link clicks for client-side routing
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest("a");
      
      if (anchor && anchor.href) {
        const url = new URL(anchor.href);
        
        // Only handle internal links
        if (url.origin === window.location.origin) {
          e.preventDefault();
          
          const path = url.pathname;
          if (path === "/" || path === "/index.html") {
            navigateTo("home");
          } else if (path === "/products") {
            navigateTo("products");
          } else if (path.startsWith("/product/")) {
            const id = path.split("/product/")[1];
            navigateTo("product-detail", id);
          } else if (path === "/about") {
            navigateTo("about");
          } else if (path === "/services") {
            navigateTo("services");
          } else if (path === "/contact") {
            navigateTo("contact");
          }
        }
      }
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  const handleQuoteClick = (productName?: string) => {
    setSelectedProduct(productName);
    setQuoteDialogOpen(true);
  };

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <HomePage onQuoteClick={handleQuoteClick} />;
      case "products":
        return <ProductsPage onQuoteClick={handleQuoteClick} />;
      case "product-detail":
        return <ProductDetailPage productId={productId} onQuoteClick={handleQuoteClick} />;
      case "about":
        return <AboutPage />;
      case "services":
        return <ServicesPage onQuoteClick={() => handleQuoteClick()} />;
      case "contact":
        return <ContactPage />;
      default:
        return <HomePage onQuoteClick={handleQuoteClick} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header onQuoteClick={() => handleQuoteClick()} />
      <main className="flex-1">
        {renderPage()}
      </main>
      <Footer />
      <QuoteDialog
        open={quoteDialogOpen}
        onOpenChange={setQuoteDialogOpen}
        productName={selectedProduct}
      />
    </div>
  );
}

export default App;
