

import Directory from "../../components/directory/directory";
const Home = () => {
    const sections = [
        {
            id: 1,
            title: 'Mens',
            imageUrl: 'https://i.ibb.co/kKb12Fy/Mens.jpg',
            linkUrl: 'Mens'
        },
        {
            id: 2,
            title: 'Womens',
            imageUrl: 'https://i.ibb.co/Lz5yCWm/Womens.jpg',
            linkUrl: 'Womens'
        },
        {
            id: 3,
            title: 'Kids',
            imageUrl: 'https://i.ibb.co/WvGQqck/Kids.jpg',
            linkUrl: 'Kids'
        },
        {
            id: 4,
            title: 'Sunglasses',
            imageUrl: 'https://i.ibb.co/SBqk7zd/Sg2.jpg',
            linkUrl: 'Sunglasses',
            size: 'large'
        },
        {
            id: 3,
            title: 'Shoes',
            imageUrl: 'https://i.ibb.co/th5wvRJ/sh1.jpg',
            linkUrl: 'Shoes',
            size: 'large'
        }
    ];

    return (
        <Directory sections={sections} />
    );
};

export default Home;