import EmployeeList from "../../Components/Employees/components/EmployeesPortal/EmployeeList";
import { employeesHooks } from "../../Components/Employees/hooks";

const Employees = () => {
    const list = [
      {
        title: 'Senior Software Engineer',
        name: 'Tran Nhat Dan',
        email: 'dan.tran',
        phone: '0909123987',
        skype: 'tnd2908',
        team: 'Raccoon'
      },
      {
        title: 'Senior Software Engineer',
        name: 'Tran Nhat Dan',
        email: 'dan.tran',
        phone: '0909123987',
        skype: 'tnd2908',
        team: 'Raccoon'
      },
      {
        title: 'Senior Software Engineer',
        name: 'Tran Nhat Dan',
        email: 'dan.tran',
        phone: '0909123987',
        skype: 'tnd2908',
        team: 'Raccoon'
      },
      {
        title: 'Senior Software Engineer',
        name: 'Tran Nhat Dan',
        email: 'dan.tran',
        phone: '0909123987',
        skype: 'tnd2908',
        team: 'Raccoon'
      },
      {
        title: 'Senior Software Engineer',
        name: 'Tran Nhat Dan',
        email: 'dan.tran',
        phone: '0909123987',
        skype: 'tnd2908',
        team: 'Raccoon'
      },
      {
        title: 'Senior Software Engineer',
        name: 'Tran Nhat Dan',
        email: 'dan.tran',
        phone: '0909123987',
        skype: 'tnd2908',
        team: 'Raccoon'
      },
    ]

    const { data, isLoading} = employeesHooks.useUsersPortal({})

    console.log(data)

    return (
      <EmployeeList employeeList={list} />
    );
  };
  
  export default Employees;
  