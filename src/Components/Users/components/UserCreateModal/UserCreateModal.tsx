import { Modal } from 'antd';
import { useCallback, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { FORM_STEPS } from '../../../../Constants/users';
import { UserCreateRequestPayload } from '../../../../models/user';
import { usersHooks } from '../../hooks';
import UserRoleStep from './UserRoleStep/UserRoleStep';


const defaultValues = {
    username: '',
    password: '',
    email: '',
    fullName: '',
};

const UserCreateModal = () => {
    const [formStep, setFormStep] = useState(FORM_STEPS.USER_ROLE);
    const validationSchema = usersHooks.useUserCreateValidation();

    const {
        register,
        handleSubmit,
        formState: { errors, isValid, isSubmitting, isDirty },
        watch,
        reset,
        control
    } = useForm<UserCreateRequestPayload>({
        resolver: yupResolver(validationSchema[formStep]),
        defaultValues,
        shouldUnregister: false,
        mode: 'onChange',
    })

    const isFormStep1 = formStep === FORM_STEPS.USER_ROLE;
    const role = watch('role');

    const onSubmit: SubmitHandler<UserCreateRequestPayload> = useCallback(
        async values => {
            if (isFormStep1) {
                setFormStep(FORM_STEPS.USER_DETAILS);
                reset({ ...defaultValues, role });
            }
        },
        [isFormStep1, role, reset]
    )

    return (
        <Modal
            visible={true}
            footer={null}
            className="user-create__modal"
        >
            <div className="user-create__content-wrapper">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="user-create__content">
                        {isFormStep1 ? (
                            <UserRoleStep register={register} control={control}/>
                        ) : null}
                    </div>

                    <div className="user-create__action">
                        <button type="button" className="user-create__action__btn-cancel app-btn">
                            Cancel
                        </button>

                        <button
                            disabled={!isValid}
                            type="submit"
                            className={`user-create__action__btn-submit app-btn ${!isValid && "user-create__action__btn-submit-disabled"}`}>
                            {isFormStep1 ? "Next" : "Save"}
                        </button>
                    </div>
                </form>
            </div>
        </Modal>
    )
}

export default UserCreateModal