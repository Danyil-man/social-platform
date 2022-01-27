import { Field, Form, Formik } from "formik";
import React, { FC } from "react";
import Paginator from "../../redux/selectors/Paginator";
import { UserType } from "../../redux/types/types";
import User from "./User";

interface PaginatorPropsType {
  totalUsers: number;
  pageSize: number;
  currentPage: number;
  portionSize?: number;
  users: Array<UserType>;
  followingInProgress: Array<number>;
  onPageChange: (pageNumber: number) => void;
  unfollow: (userId: number) => void;
  follow: (userId: number) => void;
}

const Users: FC<PaginatorPropsType> = ({
  totalUsers,
  pageSize,
  currentPage,
  onPageChange,
  users,
  ...props
}) => {
  return (
    <>
      <div>
        <UserSearchForm />
      </div>
      <div>
        <Paginator
          totalUsers={totalUsers}
          pageSize={pageSize}
          currentPage={currentPage}
          onPageChange={onPageChange}
        />
        <div>
          {users.map((u) => (
            <User
              user={u}
              followingInProgress={props.followingInProgress}
              key={u.id}
              unfollow={props.unfollow}
              follow={props.follow}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export const UserSearchForm = () => {
  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={(values, actions) => {
          console.log({ values, actions });
          alert(JSON.stringify(values, null, 2));
          actions.setSubmitting(false);
        }}
      >
        <Form>
          <label htmlFor="firstName">First Name</label>
          <Field id="firstName" name="firstName" placeholder="First Name" />
          <button type="submit">Find</button>
        </Form>
      </Formik>
    </>
  )
}

export default Users;