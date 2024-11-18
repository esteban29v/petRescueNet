import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../assets/auth/authProvider";
import { API_URL } from "../assets/auth/constants";



export default function PortalLayout({children}: {children:React.ReactNode}){

    const auth = useAuth();

    async function handleSignOut(e: React.MouseEvent<HTMLAnchorElement>){
        e.preventDefault();

        try {
            const response = await fetch(`${API_URL}/signout`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${auth.getRefreshToken()}`,
                },
            });

            if (response.ok) {
                auth.signOut();
            }
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <>
        <header>
            <nav>
                <ul>
                    <li>
                        <Link to="/dashboard>">Dashboard</Link>
                    </li>
                    <li>
                    <Link to="/me>">Profile</Link>
                    </li>
                    <li>
                    <Link to="/me>">{auth.getUser()?.name ?? ""} {auth.getUser()?.lastname ?? ""}</Link>
                    </li>
                    <li>
                    <a href="#" onClick={handleSignOut}>
                        Sign out
                    </a>
                    </li>
                </ul>
            </nav>
        </header>

        <main className="dashboard">{children}</main>
        </>
    );
} 