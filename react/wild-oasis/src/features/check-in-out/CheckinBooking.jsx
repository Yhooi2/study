import styled from "styled-components";
import BookingDataBox from "../../features/bookings/BookingDataBox";

import Row from "../../ui/Row";
import Heading from "../../ui/Heading";
import ButtonGroup from "../../ui/ButtonGroup";
import Button from "../../ui/Button";
import ButtonText from "../../ui/ButtonText";

import { useMoveBack } from "../../hooks/useMoveBack";
import useBooking from "../bookings/hooks/useBooking";
import Spinner from "../../ui/Spinner";
import Checkbox from "../../ui/Checkbox";
import { formatCurrency } from "../../utils/helpers";
import useCheckin from "./hooks/useCheckin";
import { useState } from "react";
import useSettings from "../settings/useSettings";

const Box = styled.div`
  /* Box */
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);
  padding: 2.4rem 4rem;
`;

function CheckinBooking() {
  const moveBack = useMoveBack();
  const { booking, isLoading } = useBooking();
  const { checkin, isCheckingIn } = useCheckin();
  const { settings } = useSettings();
  const [confirmPaid, setConfirmPaid] = useState(false);

  const [includeBreakfast, setIncludeBreakfast] = useState(false);

  if (isLoading || isCheckingIn) return <Spinner />;

  const {
    id: bookingId,
    guests,
    totalPrice,
    numGuests,
    hasBreakfast,
    numNights,
    isPaid,
  } = booking;

  const confirmedPaid = isPaid || confirmPaid;
  const includedBreakfast = hasBreakfast || includeBreakfast;

  const totalBreakfastPrice = numGuests * settings.breakfastPrice * numNights;

  function handleCheckin() {
    if (!confirmedPaid) return;
    if (includeBreakfast && !hasBreakfast)
      checkin({
        bookingId,
        breakfast: {
          hasBreakfast: true,
          extrasPrice: totalBreakfastPrice,
          totalPrice: totalPrice + totalBreakfastPrice,
        },
      });
    else checkin({ bookingId, breakfast: {} });
  }

  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">Check in booking #{bookingId}</Heading>
        <ButtonText onClick={moveBack}>&larr; Back</ButtonText>
      </Row>

      <BookingDataBox booking={booking} />

      <Box>
        <Checkbox
          checked={includedBreakfast}
          disabled={hasBreakfast}
          onChange={() => {
            setIncludeBreakfast((include) => !include);
            setConfirmPaid(false);
          }}
          id="breakfast"
        >
          Want to add breakfast for {formatCurrency(totalBreakfastPrice)}?
        </Checkbox>
      </Box>
      <Box>
        <Checkbox
          checked={confirmPaid}
          onChange={() => setConfirmPaid((confirm) => !confirm)}
          id="isPaid"
        >
          I confirm that {guests.fullName} has paid the total amount of{" "}
          {includeBreakfast && !hasBreakfast
            ? formatCurrency(totalPrice + totalBreakfastPrice) +
              ` (included ${formatCurrency(totalBreakfastPrice)}  for breakfast)`
            : formatCurrency(totalPrice)}
        </Checkbox>
      </Box>

      <ButtonGroup>
        <Button onClick={handleCheckin} disabled={!confirmPaid}>
          Check in booking #{bookingId}
        </Button>
        <Button variation="secondary" onClick={moveBack}>
          Back
        </Button>
      </ButtonGroup>
    </>
  );
}

export default CheckinBooking;
