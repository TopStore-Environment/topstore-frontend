import "swiper/swiper-bundle.css";
import { MONTHS } from "../../../../../../app/config/constants";
import { Swiper, SwiperSlide } from "swiper/react";
import { Modal } from "../../../../../components/Modal";
import { useSalesReportModalController } from "./useSalesReportModalController";
import { SliderOption } from "./SliderOption";
import { SliderNavigation } from "./SliderNavigation";
import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";

export function SalesReportModal() {
  const {
    isSalesReportModalOpen,
    closeSalesReportModal,
    handleChangeYear,
    selectedYear,
  } = useSalesReportModalController();

  return (
    <Modal
      title="Relatório de Vendas"
      open={isSalesReportModalOpen}
      onClose={closeSalesReportModal}
    >
      <div className="relative">
        <div className="w-full flex items-center justify-between">
          <div className="flex-1 text-center">
            <span className="text-sm h-7 sm:h-9 text-gray-800 tracking-[-0.5px] font-medium">
              {selectedYear}
            </span>
          </div>

          <button
            onClick={() => handleChangeYear(-1)}
            className="w-7 h-7 sm:w-9 sm:h-9 flex items-center justify-start absolute lelf-0 top-1/2 -translate-y-1/2"
          >
            <ChevronLeftIcon className="w-5 h-5" />
          </button>
          <button
            onClick={() => handleChangeYear(1)}
            className="w-7 h-7 sm:w-9 sm:h-9 flex items-center justify-end absolute right-0 top-1/2 -translate-y-1/2"
          >
            <ChevronRightIcon className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="mt-6 relative">
        <Swiper slidesPerView={3} centeredSlides>
          <SliderNavigation />
          {MONTHS.map((month, index) => (
            <SwiperSlide key={month}>
              {({ isActive }) => (
                <SliderOption isActive={isActive} month={month} index={index} />
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </Modal>
  );
}
