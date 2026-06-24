import StatsCard from "../../../Components/Dashboard/Admin/StatsCard";

function AdminDashboard() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">
        Dashboard
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
        <StatsCard
          title="Total Users"
          value="1,250"
        />

        <StatsCard
          title="Orders"
          value="356"
        />

        <StatsCard
          title="Blogs"
          value="25"
        />

        <StatsCard
          title="Revenue"
          value="₹45,000"
        />

        <StatsCard
          title="Pending"
          value="24"
        />
      </div>
    </div>
  );
}

export default AdminDashboard;