import { useSearchParams } from "react-router-dom";
import Select from "./Select";

function SortDropdown({ options, ...props }) {
  const [searchParams, setSearchParams] = useSearchParams();
  function handleChange(value) {
    searchParams.set("sortBy", value);
    setSearchParams(searchParams);
  }

  return (
    <Select options={options} type="white" onChange={handleChange} {...props}>
      SortBy
    </Select>
  );
}

export default SortDropdown;
