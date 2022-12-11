import { jsx as _jsx } from "react/jsx-runtime";
import { useModal } from "../Modal";
import ConnectModal from "./ConnectModal";
function useWalletModal(login, t, wallets) {
    var onPresentConnectModal = useModal(_jsx(ConnectModal, { login: login, t: t, wallets: wallets }))[0];
    return { onPresentConnectModal: onPresentConnectModal };
}
export default useWalletModal;
