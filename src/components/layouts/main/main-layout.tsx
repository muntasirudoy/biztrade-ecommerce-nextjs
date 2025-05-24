import { ReactNode } from "react";
import { Header } from "./components/header";
import { Footer } from "./components/footer";


interface MainLayoutProps {
    children: ReactNode;
}

export const MainLayout = ({ children }: MainLayoutProps) => {
    return <>
        <Header />
        {children}
        <Footer />
    </>
};