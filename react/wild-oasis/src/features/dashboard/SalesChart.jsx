import styled from "styled-components";
import DashboardBox from "./DashboardBox";
import Heading from "../../ui/Heading";
import {
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Area,
  AreaChart,
} from "recharts";
import useDarkMode from "../../context/useDarkMode";
import { eachDayOfInterval, format, isSameDay, subDays } from "date-fns";

const StyledSalesChart = styled(DashboardBox)`
  grid-column: 1 / -1;

  & .recharts-cartesian-grid-horizontal line,
  & .recharts-cartesian-grid-vertical line {
    stroke: var(--color-grey-300);
  }
`;

function SalesChart({ bookings, numDays }) {
  const { isDarkMode } = useDarkMode();
  const colors = isDarkMode
    ? {
        totalSales: { stroke: "#4f46e5", fill: "#4f46e5" },
        extrasSales: { stroke: "#22c55e", fill: "#22c55e" },
        text: "#e5e7eb",
        background: "#18212f",
      }
    : {
        totalSales: { stroke: "#4f46e5", fill: "#c7d2fe" },
        extrasSales: { stroke: "#16a34a", fill: "#dcfce7" },
        text: "#374151",
        background: "#fff",
      };

  const allDates = eachDayOfInterval({
    start: subDays(new Date(), numDays - 1),
    end: new Date(),
  });
  const data = allDates.map((date) => ({
    label: format(date, "MMM dd"),
    totalSales: bookings
      .filter((booking) => {
        const bookingDate = new Date(booking.created_at);
        return isSameDay(bookingDate, date);
      })
      .reduce((acc, booking) => acc + booking.totalPrice, 0),
    extrasSales: bookings
      .filter((booking) => {
        const bookingDate = new Date(booking.created_at);
        return isSameDay(bookingDate, date);
      })
      .reduce((acc, booking) => acc + booking.extrasPrice, 0),
  }));

  return (
    <StyledSalesChart>
      <Heading as="h2">Sales Chart</Heading>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data}>
          <XAxis
            dataKey="label"
            tick={{ fill: colors.text }}
            tickLine={{ stroke: colors.text }}
          />
          <YAxis
            unit="$"
            tick={{ fill: colors.text }}
            tickLine={{ stroke: colors.text }}
          />
          <CartesianGrid strokeDasharray="4" />
          <Tooltip
            itemSorter={() => 0}
            contentStyle={{
              backgroundColor: colors.background,
            }}
          />
          <Area
            dataKey="totalSales"
            name="Total Sales"
            type="monotone"
            fill={colors.totalSales.fill}
            stroke={colors.totalSales.stroke}
            strokeWidth={2}
            unit="$"
          />
          <Area
            dataKey="extrasSales"
            name="Extras Sales"
            type="monotone"
            fill={colors.extrasSales.fill}
            stroke={colors.extrasSales.stroke}
            strokeWidth={2}
            unit="$"
          />
        </AreaChart>
      </ResponsiveContainer>
    </StyledSalesChart>
  );
}

export default SalesChart;
