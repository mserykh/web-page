import React from 'react';

const NameInput = React.forwardRef(
  (ref: React.ForwardedRef<HTMLInputElement>) => {
    return (
      <label className="" htmlFor="name">
        Your name:
        <input
          className=""
          ref={ref}
          id="name"
          name="name"
          type="text"
          placeholder="Type your name"
          onFocus={props.onFocus}
          onChange={props.onChange}
        />
        {!props.validity ? (
          <p className={styles.errorText}>
            The  title must be longer than 2 symbols
          </p>
        ) : null}
      </label>
    );
  }
);

export default NameInput;
