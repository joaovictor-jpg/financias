export const Input = ({id}: {id: string}) => {
    return (
        <input
            id={id}
            name="path"
            type="radio"
            className="hidden peer/expand"
        />
    );
};