import React from 'react';

const AddPersonForm = () => {

	return (
		<form>
			<div className='row'>
				<div className='col-sm'>
					<label for='name'>Gift Recipient</label>
					<input
						required='required'
						type='text'
						className='form-control'
						id='gift-recipient'
					></input>
				</div>

				<div className='col-sm'>
					<label for='cost'>Cost</label>
					<input
						required='required'
						type='text'
						className='form-control'
						id='cost'
					></input>
				</div>

			</div>
            <div className='row'>
            	<div className='col-sm'>
					<button type='submit' className='btn btn-primary mt-3'>
						Save
					</button>
				</div>
            </div>
		</form>
	);
};

export default AddPersonForm;