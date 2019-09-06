import React from 'react';

interface Props {
    reset: () => void
}

const ResetButton = ({ reset }: Props) => (
    <button onClick={() => reset()}>
        Reset All
    </button>
)

export default ResetButton;
