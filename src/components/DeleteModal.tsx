export default function DeleteModal() {
  return (
    <div className="absolute top-0 right-0 left-0 bottom-0 flex justify-center bg-[#000000] bg-opacity-[0.4984]">
      <div className="fixed top-[35vh] w-[327px] bg-[#FFFFFF] dark:bg-[#1E2139] pt-[34px] px-[32px] pb-[32px] rounded-[8px]">
        <h2 className="font-bold text-[24px] leading-[32px] tracking-[-0.5px] text-[#0C0E16] dark:text-[#FFFFFF]">
          Confirm Deletion
        </h2>
        <p className="text-[#888EB0] text-[13px] font-medium leading-[22px] tracking-[-0.1px] mt-[8px]">
          Are you sure you want to delete invoice #XM9141? This action cannot be
          undone.
        </p>

        <div className="flex justify-end gap-[8px] mt-[22px]">
          <button className="pt-[18px] px-[24px] pb-[15px] bg-[#F9FAFE] dark:bg-[#252945] text-[#7E88C3] dark:text-[#DFE3FA] rounded-[24px] text-[15px] font-bold leading-[15px] tracking-[-0.25px] xl:hover:bg-[#DFE3FA]">
            Cancel
          </button>
          <button className="pt-[18px] px-[24px] pb-[15px] bg-[#EC5757] text-[#FFFFFF] rounded-[24px] text-[15px] font-bold leading-[15px] tracking-[-0.25px] xl:hover:bg-[#FF9797]">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
