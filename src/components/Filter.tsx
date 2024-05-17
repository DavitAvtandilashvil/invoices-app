import arrowDown from "/public/assets/icon-arrow-down.svg";
import plus from "/public/assets/icon-plus.svg";

import { IInvoices } from "../pages/Invoices";

interface FilterProps {
  invoices: IInvoices[];
}

const Filter: React.FC<FilterProps> = ({ invoices }) => {
  return (
    <div className="text-black font-bold  text-[15px] flex justify-center items-center gap-[86px]">
      <div className="flex justify-center flex-col">
        <span className="dark:text-whiteTwo     text-[32px]">Invoices</span>
        <span className="text-grey text-[13px] dark:text-[#DFE3FA]">
          {invoices.length} invoices
        </span>
      </div>
      <div className="flex">
        <div className="cursor-pointer  flex justify-center items-center">
          <span className="dark:text-whiteTwo">Filter</span>
          <img className="m-[16px]" src={arrowDown} alt="arrowDown" />
        </div>
        <div className="cursor-pointer   flex justify-center items-center w-[90px]  h-[44px] rounded-[24px] bg-blue gap-[9px]">
          <div className="w-[32px] h-[32px] rounded-[50%] bg-white flex justify-center items-center">
            <img className="w-[10px] h-[10px]" src={plus} alt="plus" />
          </div>
          <span className="text-white">New</span>
        </div>
      </div>
    </div>
  );
};
export default Filter;
