import "../../component-styles.css";
import {
  AdjustmentsHorizontalIcon,
  ChevronDoubleRightIcon,
  UserIcon,
} from "@heroicons/react/16/solid";

// Code: Header component
type User = {
  name: string;
  imgUrl: string;
};

export interface HeaderProps {
  user: User;
  serviceName?: string;
  serviceIcon?: string;
}

export const Header = ({ user, serviceName, serviceIcon }: HeaderProps) => (
  <div className="navbar bg-base-300">
    <div className="flex-1">
      <img
        src={serviceIcon}
        alt="Tailwind CSS Navbar component"
        className="w-10"
      />
      <a className="btn btn-ghost text-xl">{serviceName}</a>
    </div>
    <div className="flex-none">
      <div className="dropdown dropdown-end">
        <div
          tabIndex={0}
          role="button"
          className="btn btn-ghost btn-circle avatar shadow bg-base-100"
        >
          <div className="w-10 rounded-full bg-base-100">
            <img alt="Tailwind CSS Navbar component" src={user.imgUrl} />
          </div>
        </div>
        <div
          tabIndex={0}
          className="card compact dropdown-content mt-3 z-[1] p-2 px-1 shadow bg-base-200 rounded-box w-52"
        >
          <div className="px-5">
            <b>Hi {user.name}!</b>
          </div>
          <ul className="menu menu-sm  ">
            <li>
              <div className="flex flex-row">
                <UserIcon className="w-5 h-5" />
                <a>Account Settings</a>
              </div>
            </li>
            <li>
              <div className="flex flex-row">
                <AdjustmentsHorizontalIcon className="w-5 h-5" />
                <a>Settings</a>
              </div>
            </li>
            <li>
              <div className="flex flex-row">
                <ChevronDoubleRightIcon className="w-5 h-5" />
                <a>Logout</a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);
