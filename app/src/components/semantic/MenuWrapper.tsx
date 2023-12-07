import React from "react";

interface IProps  {
  children: React.ReactNode
}

const MenuWrapper = ({ children }: IProps) => {
  return (
    <nav>
      <ul>
        {children}
      </ul>
    </nav>
  )
};

export default MenuWrapper;
