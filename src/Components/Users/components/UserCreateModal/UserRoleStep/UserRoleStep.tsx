import { Radio } from 'antd';
import { UseFormRegister, Controller, Control } from 'react-hook-form';
import { UserCreateRequestPayload, UserRole } from '../../../../../models/user';

interface IProps {
    register: UseFormRegister<UserCreateRequestPayload>;
    control: Control<UserCreateRequestPayload>;
}

const UserRoleStep = ({ register, control }: IProps) => {
    const { ...roles } = UserRole

    return (
        <div className="user-create role-step">
            <div className="user-create__header">
                <div className="user-create__header__step">
                    <span>Step 1 of 2</span>
                </div>
                <h1 className="user-create__header__title">
                    Who would you like to create?
                </h1>
                <p className="user-create__header__description">
                    You can assign different roles to the employees. Each role has different permissions.
                </p>
            </div>
            <div className="user-create__form">
                <Controller
                    name="role"
                    control={control}
                    render={({ field: { onChange, value } }) => {
                        return (
                            <Radio.Group value={value} onChange={e => onChange(e.target.value)}>
                                {Object.values(roles).map(role => (
                                    <Radio className="user-create__role-radio" key={role} value={role}>
                                        <div className="user-create__user-role-label">{role}</div>
                                    </Radio>
                                ))}
                            </Radio.Group>
                        )
                    }}
                />

            </div>
        </div>
    )
}

export default UserRoleStep