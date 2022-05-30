import styled from 'styled-components'

export const Img = styled.img`
    width: 100%;
`

export const Message = styled.span`
    display: block;
    text-align: center;
    border-radius: 3px;
    margin-top: 10px;
    color: ${props => props.success ? 'green' : '#C40000'};
    padding: 3px 0;
    border: ${props => props.success ? '1px solid green' : '1px solid #C40000'};
    font-size: 1rem;
`