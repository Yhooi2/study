import {
  HiOutlineBanknotes,
  HiOutlineChartBar,
  HiOutlineBriefcase,
  HiOutlineCalendarDays,
} from "react-icons/hi2";
import Stat from "./Stat";
import { formatCurrency } from "../../utils/helpers";

function Stats({ bookings, confirmedStays }) {
  const totalBookings = bookings.length;
  const totalSales = confirmedStays.reduce(
    (acc, curr) => acc + curr.totalPrice,
    0,
  );
  const occupancyRate =
    confirmedStays.length === 0
      ? 0
      : Math.round((confirmedStays.length / totalBookings) * 100);

  return (
    <>
      <Stat
        icon={<HiOutlineBriefcase />}
        title="Bookings"
        value={totalBookings}
        color="blue"
      />
      <Stat
        icon={<HiOutlineBanknotes />}
        title="sales"
        value={formatCurrency(totalSales)}
        color="green"
      />
      <Stat
        icon={<HiOutlineCalendarDays />}
        title="Checkins"
        value={confirmedStays.length}
        color="indigo"
      />
      <Stat
        icon={<HiOutlineChartBar />}
        title="Occupancy"
        value={`${occupancyRate}%`}
        color="yellow"
      />
    </>
  );
}

export default Stats;
