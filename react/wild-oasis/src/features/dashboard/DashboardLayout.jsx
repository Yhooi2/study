import styled from "styled-components";
import useRecentBookings from "./hooks/useRecentBookings";
import Spinner from "../../ui/Spinner";
import useRecentStays from "./hooks/useRecentStays";

const StyledDashboardLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto 34rem auto;
  gap: 2.4rem;
`;

function DashboardLayout() {
  const { bookings, isLoadingBookings } = useRecentBookings();
  const { stays, confirmedStays, isLoadingStays } = useRecentStays();
  if (isLoadingBookings || isLoadingStays) return <Spinner />;
  console.log("bookings", bookings.length);
  console.log("stays", stays.length);
  console.log("confirmedStays", confirmedStays.length);

  return (
    <StyledDashboardLayout>
      <div>Statistics</div>
      <div>Today activity</div>
      <div>Chart stay duration</div>
      <div>Chart sales</div>
    </StyledDashboardLayout>
  );
}

export default DashboardLayout;
