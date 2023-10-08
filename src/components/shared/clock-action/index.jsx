import { useState } from 'react';
import ClockForm from '../clock-form'


const defaultOffsets = [
	-11.5, -11, -10.5, -10, -9.5, -9, -8.5, -8, 0, 1, 2, 3, 4, 5, 5.5, 6, 6.5,
];

const ClockActions = ({ local = false, clock, updateClock }) => {
	const [isEdit, setIsEdit] = useState(false);

	

	return (
		<div>
			<button onClick={() => setIsEdit(!isEdit)}>Edit</button>
			{local ? <button>Create</button> : <button>Delete</button>}
			{isEdit && (
				<ClockForm
					values={clock}
					handleClock={updateClock}
					title={!local}
					edit={true}
				/>
			)}
		</div>
	);
};

export default ClockActions;
