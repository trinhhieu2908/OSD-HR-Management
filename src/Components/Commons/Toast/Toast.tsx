import { toast } from "react-toastify";

export const successMessage = (params: ISuccessMessageProps): ReturnType<typeof toast.success> => {
    const msg = <span>{params?.successMessage}</span>;

    return toast.success(msg, {
        toastId: params?.successMessage,
    });
};

type ISuccessMessageProps = { successMessage?: string };

export const errorMessage = (params: IErrorMessageProps): ReturnType<typeof toast.error> => {
    const msg = <span>{params?.errorMessage}</span>;

    return toast.error(msg, {
        toastId: params?.errorMessage,
    });
};

type IErrorMessageProps = { errorMessage?: string };