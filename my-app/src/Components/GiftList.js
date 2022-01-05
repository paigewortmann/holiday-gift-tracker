import React from 'react'
import GiftList from './ExpenseItem';

const GiftList = () => {
    const gifts = [
		{}
	];

    return (
		<ul className='list-group'>
			{expenses.map((expense) => (
				<ExpenseItem id={expense.id} name={expense.name} cost={expense.cost} />
			))}
		</ul>
    )
}

export default ExpenseList