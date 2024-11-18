import { useAuth } from "../assets/auth/authProvider";
import PortalLayout from "../Layout/PortalLayout";

export default function Dashboard() {
    const auth = useAuth();
    return (
        <PortalLayout>
            <h1>Dashboard de {auth.getUser()?.name || ""} {auth.getUser()?.lastname || ""}</h1>
        </PortalLayout>
        
    )
}