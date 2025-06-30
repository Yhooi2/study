import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import Spinner from "../../ui/Spinner";
import useUpdateSetting from "./hooks/useSettingsOperations";

function UpdateSettingsForm() {
  const { isLoading, isUpdate, getSettings, updateSetting } =
    useUpdateSetting();
  const {
    minBookingLength,
    maxBookingLength,
    maxGuestsPearBooking,
    breakfastPrice,
  } = getSettings ?? {};

  if (isLoading) return <Spinner />;
  return (
    <Form>
      <FormRow label="Minimum nights/booking">
        <Input
          type="number"
          id="min-nights"
          disabled={isUpdate}
          defaultValue={minBookingLength}
          onBlur={(e) => updateSetting(e, "minBookingLength")}
        />
      </FormRow>
      <FormRow label="Maximum nights/booking">
        <Input
          type="number"
          id="max-nights"
          disabled={isUpdate}
          defaultValue={maxBookingLength}
          onBlur={(e) => updateSetting(e, "maxBookingLength")}
        />
      </FormRow>
      <FormRow label="Maximum guests/booking">
        <Input
          type="number"
          id="max-guests"
          disabled={isUpdate}
          defaultValue={maxGuestsPearBooking}
          onBlur={(e) => updateSetting(e, "maxGuestsPearBooking")}
        />
      </FormRow>
      <FormRow label="Breakfast price">
        <Input
          type="number"
          id="breakfast-price"
          disabled={isUpdate}
          defaultValue={breakfastPrice}
          onBlur={(e) => updateSetting(e, "breakfastPrice")}
        />
      </FormRow>
    </Form>
  );
}

export default UpdateSettingsForm;
