import CheckBox from "./CheckBox";
import DragIndicatorRoundedIcon from '@mui/icons-material/DragIndicatorRounded';

export default function Task(){
        return(
                <>
                <div className="flex gap-5 items-center relative">
                        <CheckBox/>
                        <span className="text-[#1B2559] text-[1rem] font-bold dark:text-white">Lorem ipsum dolor sit amet.</span>
                        <DragIndicatorRoundedIcon className="absolute right-0 cursor-pointer dark:text-white "/>
                </div>
                </>
        )
}