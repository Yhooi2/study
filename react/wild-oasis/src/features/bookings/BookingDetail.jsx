import styled from "styled-components";

import BookingDataBox from "./BookingDataBox";
import Row from "../../ui/Row";
import Heading from "../../ui/Heading";
import Tag from "../../ui/Tag";
import ButtonGroup from "../../ui/ButtonGroup";
import Button from "../../ui/Button";
import ButtonText from "../../ui/ButtonText";
import { useMoveBack } from "../../hooks/useMoveBack";
import useBooking from "./hooks/useBooking";
import Spinner from "../../ui/Spinner";
import { useNavigate } from "react-router-dom";
import useCheckout from "../check-in-out/hooks/useCheckout";
import Modal from "../../ui/Modal";
import ConfirmDelete from "../../ui/ConfirmDelete";
import useDeleteBooking from "./hooks/useDeleteBooking";
import Empty from "../../ui/Empty";
const HeadingGroup = styled.div`
  display: flex;
  gap: 2.4rem;
  align-items: center;
`;

function BookingDetail() {
  const navigate = useNavigate();
  const { booking, isLoading } = useBooking();
  const { checkout, isCheckingOut } = useCheckout();
  const { deleteBooking, isDeleting } = useDeleteBooking();
  const moveBack = useMoveBack();

  const statusToTagName = {
    unconfirmed: "blue",
    "checked-in": "green",
    "checked-out": "silver",
  };

  if (isLoading) return <Spinner />;
  if (!booking) return <Empty resource="booking" />;

  const { status } = booking;

  return (
    <>
      <Row type="horizontal">
        <HeadingGroup>
          <Heading as="h1">Booking #{booking.id}</Heading>
          <Tag type={statusToTagName[status]}>{status.replace("-", " ")}</Tag>
        </HeadingGroup>
        <ButtonText onClick={moveBack}>&larr; Back</ButtonText>
      </Row>

      <BookingDataBox booking={booking} />

      <ButtonGroup>
        {status === "unconfirmed" && (
          <Button onClick={() => navigate(`/bookings/checkin/${booking.id}`)}>
            Check in
          </Button>
        )}
        {status === "checked-in" && (
          <Button
            onClick={() => {
              checkout(booking.id);
            }}
            disabled={isCheckingOut}
          >
            Check out
          </Button>
        )}
        <Modal>
          <Modal.Open window="delete">
            <Button variation="danger">Delete booking</Button>
          </Modal.Open>
          <Modal.Window window="delete">
            <ConfirmDelete
              resourceName="booking"
              onConfirm={() =>
                deleteBooking(booking.id, {
                  onSuccess: () => moveBack(),
                })
              }
              disabled={isDeleting}
            />
          </Modal.Window>
        </Modal>
        <Button variation="secondary" onClick={moveBack}>
          Back
        </Button>
      </ButtonGroup>
    </>
  );
}

export default BookingDetail;
