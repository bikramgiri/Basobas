import { useEffect, useState, useRef } from "react";
import { ShoppingCart, Menu, X, Search, Heart, LogOut, Settings, Bell, ArrowRight } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { GrDashboard } from "react-icons/gr";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../store/authSlice";
import { toast } from "../utils/toast";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);           
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); 
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false); 
  const dropdownRef = useRef(null);
  const notificationsRef = useRef(null);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, token } = useSelector((state) => state.auth);
  
  const unreadNotifications = 2;   
  const favouritesCount = 5;      
 
  // Persistent login state
  const storedToken = localStorage.getItem("token");
  const storedUser = JSON.parse(localStorage.getItem("user") || "null");
  
  const effectiveToken = token || storedToken;
  const effectiveUser = user || storedUser;

  const isLoggedIn = !!effectiveToken && !!effectiveUser;

  // Mark all notifications as read
  const markAllAsRead = () => {
    toast("All notifications marked as read!");
  };

  // Close dropdowns on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
      if (notificationsRef.current && !notificationsRef.current.contains(event.target)) {
        setIsNotificationsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogOut = () => {
    dispatch(logOut());
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setIsDropdownOpen(false);
    setIsOpen(false);
    toast("Logged out successfully!");
    navigate("/login?logout=true");
  };

  // Dynamic dashboard path based on role
  const getDashboardPath = () => {
    if (!effectiveUser) return "/";
    if (effectiveUser.role === 'hosteler') return "/hosteler-dashboard";
    if (effectiveUser.role === 'admin') return "/admin-dashboard";
    return "/student-dashboard"; // Default for user (student) → home page
  };

  // Helper to render avatar or initials
  const renderAvatar = (size = "small") => {
    const avatarSize = size === "small" ? "w-9 h-9 sm:w-10 sm:h-10" : "w-12 h-12";
    const textSize = size === "small" ? "text-lg sm:text-xl" : "text-2xl";

    if (effectiveUser?.avatar) {
      return (
        <img
          className={`${avatarSize} rounded-full object-cover border-2 border-blue-200`}
          src={effectiveUser.avatar}
          alt="User avatar"
        />
      );
    }

    const initials = effectiveUser?.username?.charAt(0).toUpperCase() || "U";

    return (
      <div
        className={`${avatarSize} rounded-full bg-blue-600 text-white flex items-center justify-center font-bold border-2 border-green-200 ${textSize}`}
      >
        {initials}
      </div>
    );
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md border-b border-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">B</span>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Basobas
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-8">
            <Link to="/" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Home
            </Link>
            <Link to="/explore-hostels" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Explore Hostels
            </Link>
          </div>

          {/* Desktop Search */}
          <div className="hidden md:flex items-center flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-5 text-gray-500" />
              <input
                type="text"
                placeholder="Search hostels..."
                className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 placeholder-gray-500"
              />
            </div>
          </div>

          {/* Right Icons + Auth */}
          <div className="flex items-center gap-5 md:gap-6">
            {isLoggedIn && (
              <>
                <div className="relative" ref={notificationsRef}>
                  <button
                    type="button"
                    className="cursor-pointer relative text-blue-700 hover:text-blue-900 p-1.5 rounded-full hover:bg-green-50 transition-colors"
                    onClick={() => setIsNotificationsOpen(!isNotificationsOpen)}
                  >
                    <Bell className="h-6 w-6" />
                    {unreadNotifications > 0 && (
                      <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white">
                        {unreadNotifications}
                      </span>
                    )}
                  </button>

                  {isNotificationsOpen && (
                    <div className="absolute right-0 mt-3 w-80 bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden z-50">
                      <div className="flex items-center justify-between px-5 py-3 bg-gradient-to-r from-purple-600 to-purple-700 text-white">
                        <h3 className="font-semibold">Notifications</h3>
                        <button
                          onClick={markAllAsRead}
                          className="cursor-pointer text-xs underline hover:text-purple-200 transition-colors"
                        >
                          Mark all read
                        </button>
                      </div>

                      <div className="max-h-96 overflow-y-auto">
                        <div className="cursor-pointer p-4 border-b border-gray-100 hover:bg-purple-50 transition-colors flex gap-3">
                          <div className="flex-shrink-0">
                            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                              <span className="text-blue-600 text-xl">✓</span>
                            </div>
                          </div>
                          <div>
                            <p className="text-sm font-medium text-gray-900">
                              Your booking has been{" "}
                              <span className="text-blue-600 font-semibold">
                                confirmed
                              </span>
                            </p>
                            <p className="text-xs text-gray-500 mt-1">
                              2 minutes ago
                            </p>
                          </div>
                        </div>

                        <div className="cursor-pointer p-4 border-b border-gray-100 hover:bg-purple-50 transition-colors flex gap-3">
                          <div className="flex-shrink-0">
                            <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
                              <span className="text-purple-600 text-xl">%</span>
                            </div>
                          </div>
                          <div>
                            <p className="text-sm font-medium text-gray-900">
                              Special offer! Get{" "}
                              <span className="text-purple-600 font-semibold">
                                20% off
                              </span>{" "}
                              your next booking
                            </p>
                            <p className="text-xs text-gray-500 mt-1">
                              1 hour ago
                            </p>
                          </div>
                        </div>

                        <div className="cursor-pointer p-4 hover:bg-purple-50 transition-colors flex gap-3">
                          <div className="flex-shrink-0">
                            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                              <span className="text-blue-600 text-xl">$</span>
                            </div>
                          </div>
                          <div>
                            <p className="text-sm font-medium text-gray-900">
                              Payment of{" "}
                              <span className="font-semibold">$150</span> was
                              successful
                            </p>
                            <p className="text-xs text-gray-500 mt-1">
                              Yesterday
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="px-5 py-3 bg-gray-50 text-center border-t border-gray-200">
                        <Link
                          to="/notifications"
                          className="text-blue-600 hover:text-blue-800 font-medium text-sm transition-colors"
                          onClick={() => {
                            setIsNotificationsOpen(false);
                            setIsOpen(false);
                          }}
                        >
                          View All Notifications
                        </Link>
                      </div>
                    </div>
                  )}
                </div>

                {/* Favorites */}
                <Link to="/favorites" className="relative text-blue-700 hover:text-blue-900 p-2 rounded-full hover:bg-blue-50 transition-colors">
                  <Heart className="h-6 w-6" />
                  {favouritesCount > 0 ? (
                    <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white">
                      {favouritesCount}
                    </span>
                  ) : (
                    <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white">
                      0
                    </span>
                  )}
                </Link>
              </>
            )}

            {/* Desktop Auth */}
            <div className="hidden md:flex items-center gap-3">
              {!isLoggedIn ? (
                <>
                  <Link to="/login" className="px-5 py-2 text-blue-700 border-2 border-blue-700 rounded-lg hover:bg-blue-50 font-medium transition-colors">
                    Login
                  </Link>
                  <Link to="/register" className="px-5 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-colors shadow-sm">
                    Register
                  </Link>
                </>
              ) : (
                <div className="relative" ref={dropdownRef}>
                  <button
                    type="button"
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className="flex items-center gap-2 cursor-pointer focus:outline-none"
                  >
                    {renderAvatar("small")}
                  </button>

                 {isDropdownOpen && (
                    <div className="absolute right-0 mt-3 w-66 bg-white rounded-md shadow-xl border border-gray-300 py-2 z-50">
                      <div className="px-5 py-4 border-b border-gray-300">
                        <div className="flex items-center gap-3">
                          {renderAvatar("large")}
                          <div>
                            <p className="font-medium text-gray-900">
                              {effectiveUser?.username || "My Account"}
                            </p>
                            <p className="text-sm text-gray-600 truncate">
                              {effectiveUser?.email || "user@example.com"}
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="py-2">
                        <Link
                          to={getDashboardPath()}
                          className="flex gap-3 font-medium items-center px-5 py-2 text-gray-900 hover:bg-green-100 hover:text-blue-700 transition-colors"
                          onClick={() => setIsDropdownOpen(false)}
                        >
                          <GrDashboard className="h-7 w-7" />
                          Dashboard
                        </Link>
                  
                        <Link
                          to="/wishlist"
                          className="flex gap-3 font-medium items-center px-5 py-2 text-gray-900 hover:bg-blue-100 hover:text-blue-700 transition-colors"
                          onClick={() => setIsDropdownOpen(false)}
                        >
                          <Heart className="h-7 w-7" />
                          Wishlist
                        </Link>
                        <Link
                          to="/settings"
                          className="flex gap-3 font-medium items-center px-5 py-2 text-gray-900 hover:bg-blue-100 hover:text-blue-700 transition-colors"
                          onClick={() => setIsDropdownOpen(false)}
                        >
                          <Settings className="h-7 w-7" />
                          Settings
                        </Link>
                      </div>

                      <div className="border-t border-gray-300">
                        <button
                          onClick={handleLogOut}
                          className="flex mt-2 gap-3 cursor-pointer items-center font-medium w-full px-5 py-2 text-red-600 hover:bg-red-100 transition-colors"
                        >
                          <LogOut className="h-7 w-7" />
                          Log out
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-blue-700 p-2 rounded-full hover:bg-blue-50"
            >
              {isOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
            </button>
          </div>
        </div>
      </div>

   
      <div className={`fixed inset-0 z-40 transition-all duration-300 ${isOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}>
        {/* Backdrop */}
        <div 
          className={`absolute inset-0 bg-black/50 transition-opacity ${isOpen ? 'opacity-100' : 'opacity-0'}`}
          onClick={() => setIsOpen(false)}
        />

        {/* Drawer */}
        <div className={`absolute right-0 top-0 h-full w-60 max-w-full bg-white shadow-2xl transition-transform ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="flex items-center justify-between p-3 px-4 border-b border-gray-400">
            <h2 className="text-xl font-bold text-gray-900">Menu</h2>
            <button onClick={() => setIsOpen(false)} className="p-2 rounded-full hover:bg-gray-100">
              <X className="h-6 w-6 text-gray-700" />
            </button>
          </div>

          <div className="p-2 space-y-3">

            {!isLoggedIn ? (
              <div className="space-y-3">
            <Link to="/home" className="block px-2 py-3 text-gray-900 font-medium hover:text-blue-600" onClick={() => setIsOpen(false)}>
              Home
            </Link>
            <Link to="/explore-hostels" className="block px-2 py-3 text-gray-900 font-medium hover:text-blue-600" onClick={() => setIsOpen(false)}>
              Explore Hostels
            </Link>

                <Link to="/login" className="block w-full text-center py-3 text-blue-700 border-2 border-blue-700 rounded-lg hover:bg-blue-50 font-medium" onClick={() => setIsOpen(false)}>
                  Login
                </Link>
                <Link to="/register" className="block w-full text-center py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium hover:from-blue-700 hover:to-purple-700" onClick={() => setIsOpen(false)}>
                  Register
                </Link>
              </div>
            ) : (
             <div className="">
                <div className="flex items-center px-2 py-2 border-b border-gray-300">
                  <div className="flex items-center gap-3 pb-2">
                    {renderAvatar("large")}
                    <div>
                      <p className="font-medium text-gray-900">
                        Hi, {effectiveUser?.username || "My Account"}
                      </p>
                      <p className="text-sm text-gray-700 truncate">
                        Welcome back!
                      </p>
                    </div>
                  </div>
                </div>
               
               <Link
                  to={getDashboardPath()}
                  className="block font-medium py-3 px-3 text-gray-900 hover:text-blue-700 hover:bg-gray-200 rounded-lg transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Dashboard
                </Link>

                <Link
                  to="/settings"
                  className="border-b border-gray-300 block font-medium px-3 py-3 text-gray-900 hover:bg-blue-200 hover:text-blue-700 rounded-md transition-colors"
                  onClick={() => setIsDropdownOpen(false)}
                >
                  Settings
                </Link>

                <Link to="/home" className="block px-3 py-2 text-gray-900 font-medium hover:text-blue-600" onClick={() => setIsOpen(false)}>
              Home
            </Link>
            <Link to="/explore-hostels" className="border-b border-gray-300 block px-3 py-3 text-gray-900 font-medium hover:text-blue-600" onClick={() => setIsOpen(false)}>
              Explore Hostels
            </Link>

                <button
                  onClick={handleLogOut}
                  className="cursor-pointer font-medium w-full text-left px-3 py-3 text-red-600 hover:bg-red-100 rounded-lg transition-colors"
                >
                  <LogOut className="h-6 w-6 inline-block mr-2" />
                  Log out
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;