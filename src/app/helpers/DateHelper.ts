import dayjs from "dayjs";

export const getToday = () => {
   const vietnameseDayNames = ['Chủ nhật', 'Thứ hai', 'Thứ ba', 'Thứ tư', 'Thứ năm', 'Thứ sáu', 'Thứ bảy'];
   const currentDay = dayjs().day();
   const translatedDay = vietnameseDayNames[currentDay];
   const formattedDate = dayjs().locale('vi').format(`DD/MM/YYYY`);

   return `${translatedDay}, ${formattedDate}`;
}