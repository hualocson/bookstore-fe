const Sidebar = () => {
  return (
    <div className="col-span-3 flex flex-col gap-y-3 text-lg">
      <p className="text-xl font-bold">Manage My account</p>
      <ul className="ml-4">
        <li>My Profile</li>
        <li>Addresses</li>
      </ul>
    </div>
  );
};

export default Sidebar;
