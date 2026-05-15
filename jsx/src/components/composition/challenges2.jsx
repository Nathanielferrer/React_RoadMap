import { getImageUrl } from './utils.jsx';

function Avatar({ person, size }) {
    const imageSize = condition(size)
    return (
        <img
            className="avatar"
            src={getImageUrl(person, imageSize)}
            alt={person.name}
            width={size}
            height={size}
        />
    );
}

function condition(size) {
    if (size <= 90) {
        return 's'
    } else {
        return 'b'
    }
}

export default function Profile() {
    return (
        <Avatar
            size={40}
            person={{
                name: 'Gregorio Y. Zara',
                imageId: '7vQD0fP'
            }}
        />
    );
}
