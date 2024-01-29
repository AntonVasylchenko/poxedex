import React from 'react';
import { PageWidthContainer } from './styled';


type Props = {
  children?: React.ReactNode;
};
const PageWidth: React.FC<Props> = ({ children }) => {  
  return (
    <PageWidthContainer>
      {children}
    </PageWidthContainer>
  );
};

export default PageWidth;