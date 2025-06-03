import { FaCalendarAlt, FaTasks, FaUser, FaCog } from 'react-icons/fa';

export default function BottomBar() {
  return (
    <nav className="bottom-bar">
      <IconButton icon={<FaCalendarAlt />} active />
      <IconButton icon={<FaTasks />} />
      <IconButton icon={<FaUser />} />
      <IconButton icon={<FaCog />} />
    </nav>
  );
}

type IconButtonProps = {
  icon: React.ReactNode;
  active?: boolean;
};

function IconButton({ icon, active = false }: IconButtonProps) {
  return (
    <button className={`icon-btn ${active ? 'active' : ''}`}>
      {icon}
    </button>
  );
}