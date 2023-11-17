import { TbWorld } from "react-icons/tb";
import { MdOutlineAcUnit ,MdOutlineLogout,MdPendingActions,MdMiscellaneousServices} from "react-icons/md";
import { RiLockPasswordLine ,RiChatQuoteLine,RiProjectorLine} from "react-icons/ri";
import { AiOutlineUser,AiOutlineEdit,AiOutlineNumber,AiOutlineMail ,AiOutlinePlusCircle,AiOutlineMinusCircle} from "react-icons/ai";
import { FaRegMoneyBillAlt ,FaUser} from "react-icons/fa";
import { SiMaterialdesign } from "react-icons/si";
import { BsCheck2All,BsPrinter ,BsCheck2,BsCalendarDate} from "react-icons/bs";
import { BiTask } from "react-icons/bi";
import { CgSandClock } from "react-icons/cg";


export const Icons = {
    city: <TbWorld/>,
    quote: <RiChatQuoteLine />,
    unity: <MdOutlineAcUnit />,
    logout: <MdOutlineLogout />,
    password: <RiLockPasswordLine />,
    user: <FaUser /> ,
    material: <SiMaterialdesign />,
    service: <MdMiscellaneousServices />,
    amount: <FaRegMoneyBillAlt />,
    action : <MdPendingActions />,
    edit: <AiOutlineEdit />,
    number: <AiOutlineNumber />,
    email: <AiOutlineMail />,
    status: <BsCheck2All />,
    task: <BiTask />,
    plus:<AiOutlinePlusCircle />,
    minus:<AiOutlineMinusCircle />,
    project: <RiProjectorLine />,
    print: <BsPrinter />,
    check: <BsCheck2 />,
    time : <BsCalendarDate />,
    duration: <CgSandClock />,


    
}