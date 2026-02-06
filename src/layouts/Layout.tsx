import { Outlet } from 'react-router-dom';
import ChatbotWidget from "@/components/common/ChatbotWidget";
import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";

export default function Layout() {
  return (
    <div className="relative min-h-screen flex flex-col">
        <Navbar/>

        <main className="flex-1">
            <Outlet />
        </main>
        
        <Footer/>

        <ChatbotWidget/>
    </div>
  );
}
