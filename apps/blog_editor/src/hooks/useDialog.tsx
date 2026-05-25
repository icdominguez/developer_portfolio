import { useRef } from "react";

function useDialog() {
    const ref = useRef<HTMLDialogElement>(null);
    return {
        ref,
        open: () => ref.current?.showModal(),
        close: () => ref.current?.close(),
    };
}

export default useDialog;
