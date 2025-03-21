import { AppDispatch } from "@/store/configureStore";
import { useDispatch } from "react-redux";

export const useAppDispatch = () => useDispatch<AppDispatch>();