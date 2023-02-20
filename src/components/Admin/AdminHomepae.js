import AdminFooter from "./AdminPageFooter";
import AdminHeader from "./AdminPageHeader";
import './Admin.css'
import CustomerManagement from "./Sercurity/CustomerManagement";

const AdminHomePage = () => {
    return (
        <div>
            <AdminHeader></AdminHeader>
            <div className="admin-role">
                <div><h3>Sercurity Dashboard</h3></div>
            </div>
            <div className="admin-homepage-body">

        
                <ul class="nav admin-nav-custom flex-column ">
                    
                    <li tabindex="0" class="nav-item">
                        <a class="nav-link active" href="#">Customers</a>
                    </li>
                    <li tabindex="0" class="nav-item">
                        <a class="nav-link active" href="#">Slots</a>
                    </li>
                    <li tabindex="0" class="nav-item">
                        <a class="nav-link active" href="#">Location</a>
                    </li>
                    <li tabindex="0" class="nav-item">
                        <a class="nav-link active" href="#">Location</a>
                    </li>
                    <li tabindex="0" class="nav-item">
                        <a class="nav-link active" href="#">Location</a>
                    </li>
                    <li tabindex="0" class="nav-item">
                        <a class="nav-link active" href="#">Location</a>
                    </li>
                    
                </ul>

                <CustomerManagement></CustomerManagement>
            </div>

            <AdminFooter></AdminFooter>
        </div>
    );
}

export default AdminHomePage;