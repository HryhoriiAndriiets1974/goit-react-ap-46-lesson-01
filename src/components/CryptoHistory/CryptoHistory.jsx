import { BaseTable, THead, Th, Tr, Td } from './CryptoHistory.styled';
import { format } from 'date-fns'

let i = -4;

export const CryptoHistory = ({items}) => {
  return (
  <BaseTable>
    <THead>
      <tr>
        <Th>№</Th>
        <Th>PRICE</Th>
        <Th>AMOUNT</Th>
        <Th>DATE</Th>
      </tr>
    </THead>

    <tbody>
    {items.map(({id, price, amount, date}) => (
          <Tr key={id}>
            <Td>{i++}</Td>
            <Td>{price}</Td>
            <Td>{amount}</Td>
            <Td>{format(new Date(date), "yyyy-MM-dd'T'HH:mm")}</Td>
          </Tr>
    ))}
    </tbody>
  </BaseTable>)
};
