/* eslint-disable react/react-in-jsx-scope */

/**
 * @author: sandeep.gupta1@timesinternet.in
 * @desc: Display of Denmark UI components based on material UI
 */

import {Input, User} from './components/common';
//import useForm from './customhooks/useForm';


const TestCommon = () => {

    // const statusConst = [
    //     { name: 'Active', value: 'ACTIVE' },
    //     { name: 'Inactive', value: 'INACTIVE' },
    //   ];

    //   let status = {};
    
    const handleChange = (obj, flag) => {
        console.log(obj, flag);
    };
    // const {
    //     values, events, errors, setValues,
    //   } = useForm({
    //     initialValues: {},
    //     handleSubmit: handleSubmit.bind({ {}, ...props }),
    //     validate: validate.bind(props),
    //     fields,
    //   });
    // const {
    //     onChange, onBlur, onKeyUp, onSubmit, onSelect,
    //   } = events;

    return (
        <div>
            User:
            <User />

            <Input label="Test" name="Title" 
                onBlur={handleChange}
                onKeyUp={handleChange}
                onChange={handleChange}
                helperText="Enter the Title" />

            {/* <SelectComponent
              label="Status"
              value={status}
              name="Status"
              selectItems={statusConst}
              helperText=""
              className={`${status?.name}`}
              onSelect={(value) => {
                handleChange({ target: { name: 'status', value } }, false);
              }}
            /> */}
        </div>
    );
};

export default TestCommon;


