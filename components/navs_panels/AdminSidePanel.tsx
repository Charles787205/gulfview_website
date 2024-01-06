import Link from "next/link";
import styles from "@/css/admin.module.css";
const AdminSidePanel = () => {
  return (
    <div className="bg-primary-blue h-[100vh] w-max-[250px]">
      <ul>
        <Link href="/admin/maintenance-request">
          <li className={styles.sidelink}>
            <span className="material-symbols-outlined">engineering</span>
            <span className="hidden md:block">Maintenance Request</span>
          </li>
        </Link>
        <Link href="/admin/booking-request">
          <li className={styles.sidelink}>
            <span className="material-symbols-outlined">edit_calendar</span>
            <span className="hidden md:block">Booking Request</span>
          </li>
        </Link>
        <Link href="/admin/complaints">
          <li className={styles.sidelink}>
            <span className="material-symbols-outlined">person_alert</span>
            <span className="hidden md:block">Complaints</span>
          </li>
        </Link>
        <Link href="/admin/news">
          <li className={styles.sidelink}>
            <span className="material-symbols-outlined">newspaper</span>
            <span className="hidden md:block">News</span>
          </li>
        </Link>
        <Link href="/admin/event">
          <li className={styles.sidelink}>
            <span className="material-symbols-outlined">event</span>
            <span className="hidden md:block">Event</span>
          </li>
        </Link>
        <Link href="/admin/monthly-dues">
          <li className={styles.sidelink}>
            <span className="material-symbols-outlined">payments</span>
            <span className="hidden md:block">Monthly Dues</span>
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default AdminSidePanel;
