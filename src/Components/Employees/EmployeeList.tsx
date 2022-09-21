import { Col, Input, Row } from 'antd';
import EmployeeItem from './EmployeeItem';

type Props = {
    employeeList: any[];
}
const EmployeeList = ({ employeeList } : Props) => {
    return (
        <div className='container'>
            <Row>
                <Col span={24}>
                    <Input.Search size='large' placeholder='Search for people' />
                </Col>
                <Row gutter={[24,24]}>
                    {employeeList.map((e, index) => (
                        <EmployeeItem employee={e} key={index.toString()} />
                    ))}
                </Row>
            </Row>
        </div>
    );
};

export default EmployeeList;