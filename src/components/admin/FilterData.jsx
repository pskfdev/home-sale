import { TextInput, Filter } from 'react-admin';


export const UserFilter = (props) => (
    <Filter {...props}>
        {/* กรองตาม name */}
        <TextInput label="Search by Name" source="name" alwaysOn />
    </Filter>
);

export const CategoryFilter = (props) => (
    <Filter {...props}>
        {/* กรองตาม name */}
        <TextInput label="Search by Name" source="name" alwaysOn />
    </Filter>
);

export const AssetsFilter = (props) => (
    <Filter {...props}>
        {/* กรองตาม title */}
        <TextInput label="Search by Title" source="title" alwaysOn />
    </Filter>
);