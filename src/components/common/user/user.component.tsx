/**
 * @author: sandeep.gupta1@timesinternet.in
 * @desc: Common user component based on material UI
 */

import React from 'react';
import { UserProps } from './types';
import styles from './user.module.scss';

/**
 * Component for showing details of the user.
 *
 * @component
 * @example
 * const age = 29
 * const name = 'Alex Tom'
 * return (
 *   <User age={age} name={name} />
 * )
 */

export const User = (props: UserProps) => {
  const { name, age } = props;
  return (
    <p className={styles['user-wrapper']}>
      {name} is {age} years old.
    </p>
  );
};

export default User;
