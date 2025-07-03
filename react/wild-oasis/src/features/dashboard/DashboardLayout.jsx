import styled from "styled-components";
import useRecentBookings from "./hooks/useRecentBookings";
import Spinner from "../../ui/Spinner";
import useRecentStays from "./hooks/useRecentStays";
import Stats from "./Stats";
import SalesChart from "./SalesChart";

const StyledDashboardLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto 34rem auto;
  gap: 2.4rem;
`;

function DashboardLayout() {
  const { bookings, isLoadingBookings, numDays } = useRecentBookings();
  const { stays, confirmedStays, isLoadingStays } = useRecentStays();
  if (isLoadingBookings || isLoadingStays) return <Spinner />;

  return (
    <StyledDashboardLayout>
      <Stats
        bookings={bookings}
        confirmedStays={confirmedStays}
        stays={stays}
      />
      <SalesChart bookings={bookings} numDays={numDays} />
    </StyledDashboardLayout>
  );
}

export default DashboardLayout;
