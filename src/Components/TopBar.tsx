import React from 'react'
import styled from 'styled-components';

const Wrapper = styled.div`
    //background: #0066cc;
    //color: white;
     background:rgba(255,218,68);
     color: #000;
    line-height: 24px;
    font-size: 16px;
    vertical-align: center;
    padding: 13px 15px;
`;
type Props = {
   name: string
}

const TopBar: React.FC<Props> = (props)=>{
  return (
    <Wrapper>{props.name}</Wrapper>
  )
}
export {TopBar}