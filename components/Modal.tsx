import ReactDom from "react-dom";
import { translateCenterStyle } from "../styles/Emotion";
import CloseIcon from "@mui/icons-material/Close";
import { useDispatch } from "react-redux";
import { AppDispatch, RootState } from "@/features/store";
import { openModal } from "@/features/common/commonReducer";
import { useSelector } from "react-redux";
interface PortalComponentProps {
  children: React.ReactNode;
  container: HTMLElement | null;
}
export const PotalComponent = ({
  //portal을 사용하는 이유 : dom 구조 외부에서 작동하여 dom 변형이 덜함
  children,
  container,
}: PortalComponentProps) => {
  const dispatch = useDispatch<AppDispatch>();
  const { modal } = useSelector((state: RootState) => state.common);
  return container
    ? ReactDom.createPortal(
        <>
          <div className="fixed top-0 left-0 w-full h-screen bg-black opacity-25 z-10"></div>
          <div
            className="fixed top-1/2 left-1/2 bg-white z-15 rounded-lg p-10"
            css={translateCenterStyle}
          >
            <span
              className="absolute top-2 right-2"
              onClick={() => {
                dispatch(openModal(modal));
              }}
            >
              <CloseIcon />
            </span>
            {children}
          </div>
        </>,
        container
      )
    : null;
};
